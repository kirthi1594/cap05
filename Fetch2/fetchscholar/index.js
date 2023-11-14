let container = document.querySelector('.container')
let priceLowToHigh = document.querySelector('#priceLowToHigh')
let priceHighToLow = document.querySelector('#priceHighToLow')
let productsArr;

window.onload = fetchScholar()

priceHighToLow.addEventListener('click', () => {
    sortHighToLow(productsArr, 'desc')
})

priceLowToHigh.addEventListener('click', () => {
    sortHighToLow(productsArr, 'asce')
})

async function fetchScholar() {
    let res = await fetch('https://fakestoreapi.com/products')
    productsArr = await res.json()
    console.log(productsArr);
    renderProducts(productsArr)
}

function appendProductCard(product) {
    container.append(product);
}

function renderProducts(productsArr) {
    for (let product of productsArr) {
        let title = product.title.length > 30 ? product.title.substring(0, 20) + '...' : product.title
        appendProductCard(createProductCard(product.image, title, product.price, product.rating.rate, product.rating.count))
    }
}

function sortHighToLow(productsArr, order) {
    order == 'desc' ? productsArr.sort((a, b) => b.price - a.price) : productsArr.sort((a, b) => a.price - b.price);
    container.innerHTML = ''

    for (let product of productsArr) {
        // console.log(product);
        let title = product.title.length > 30 ? product.title.substring(0, 20) + '...' : product.title
        appendProductCard(createProductCard(product.image, title, product.price, product.rating.rate, product.rating.count))
    }
}

function createProductCard(img, title, price, rating, count) {
    let productCard = document.createElement('div')
    productCard.classList.add('product')
    productCard.innerHTML = `
    <img src=${img} alt="">
            <p>${title}</p>
            <div class="priceAndRating">
                <p>${price}</p>
                <div class="rating">
                    <span>${rating}</span>
                    <i class="fa-solid fa-star"></i>
                    <p>${count}</p>
                </div>
            </div>
    `
    return productCard
}