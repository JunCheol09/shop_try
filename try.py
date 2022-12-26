import requests
from bs4 import BeautifulSoup
import certifi
ca = certifi.where();

from pymongo import MongoClient
client = MongoClient('mongodb+srv://JucCheol:wnscjf909@cluster0.505uedx.mongodb.net/Cluster0?retryWrites=true&w=majority',tlsCAFile=ca)
db = client.dbsparta

url = 'https://us.puma.com/us/en'

header = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
}

res = requests.get(url, headers=header)

soup = BeautifulSoup(res.text, 'html.parser')

new_product_list = soup.select('#slots-1 > section > div > a')

for product in new_product_list:
    product_img=product.select_one('div > div.relative > img')['src'].strip()
    product_price = product.select_one('div > div.tw-kuddxj.mobile\:flex-col.tablet\:flex-col.desktop\:flex-row > h4 > span').text.strip()
    product_name = product.select_one('div > div.tw-kuddxj.mobile\:flex-col.tablet\:flex-col.desktop\:flex-row > h3').text.strip()
    
    doc={
        'product_img':product_img,
        'product_name':product_name,
        'product_price':product_price
    }
    db.puma.insert_one(doc)



#slots-1 > section > div > a:nth-child(1) > div > div.tw-kuddxj.mobile\:flex-col.tablet\:flex-col.desktop\:flex-row > h4 > span
#slots-1 > section > div > a:nth-child(1) > div
#slots-1 > section > div > a:nth-child(1) > div
#slots-1 > section > div > a:nth-child(1) > div > div.tw-kuddxj.mobile\:flex-col.tablet\:flex-col.desktop\:flex-row > h3




#layBodyWrap > div > div > div.l_search_content > div > section:nth-child(4) > ul > li:nth-child(1) > div > div:nth-child(2) > div.c_card_info_top > div.c_prd_name.c_prd_name_row_1 > a > strong

#slots-1 > section > div > a:nth-child(1) > div > div.relative > img