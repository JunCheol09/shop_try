$(document).ready(function () {
    listing()
    listing2();
});

function listing() {
    $.ajax({
        type: 'GET',
        url: '/shop',
        data: {},
        success: function (response) {
            let rows = response['shops']
            for (let i = 0; i < 8; i++) {
                let product_price = rows[i]['product_price']
                let product_name = rows[i]['product_name']
                let product_img = rows[i]['product_img']

                let temp_html = `<div class="col">
                                <div class="card h-100">
                                    <img src="${product_img}"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${product_name}</h5>
                                        <p class="card-text">${product_price}</p>
                                    </div>
                                </div>
                            </div>`
                $('#cards-box').append(temp_html)

            }
        }
    })
}

function listing2() {
    $.ajax({
        type: 'GET',
        url: '/puma',
        data: {},
        success: function (response) {
            let rows = response['pumas']
            for (let i = 0; i < 8; i++) {
                let puma_price = rows[i]['product_price']
                let puma_name = rows[i]['product_name']
                let puma_img = rows[i]['product_img']
               

                let temp_htm = `<div class="col">
                                <div class="card h-100">
                                    <img src="${puma_img}"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${puma_name}</h5>
                                        <p class="card-text">${puma_price}</p>
                                    </div>
                                </div>
                            </div>`
                $('#cards-box2').append(temp_htm)
               

            }

        }
    })
}


function posting() {
    let url = $('#url').val()
    let star = $('#star').val()
    let comment = $('#comment').val()
    $.ajax({
        type: 'POST',
        url: '/shop',
        data: { url_give: url, star_give: star, comment_give: comment },
        success: function (response) {
            alert(response['msg'])
            window.location.reload()

        }
    });
}

function open_box() {
    $('#post-box').show()
}
function close_box() {
    $('#post-box').hide()
}

function enterkey() {
    if (window.event.keyCode == 13) {
        login();
    }
}

function enterkey_search() {
    let product_search = $('#product_search').val()
    if (window.event.keyCode == 13) {
        alert(`cannot found ${product_search}`)
    }
}

function logout() {
    window.location.href = "/"
    alert("logout")
}