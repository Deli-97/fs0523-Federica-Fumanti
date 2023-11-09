let cartArray = [];

fetch(' https://striveschool-api.herokuapp.com/books')
.then(res => res.json())
.then(books => {

    let target = document.querySelector('#target');

    books.forEach(book => {
        let clone = getCardClone();
        let img = clone.querySelector('.card-img-top');
        let title = clone.querySelector('.card-title');
        let price = clone.querySelector('.card-price');
        let addToCart = clone.querySelector('.AddToCart');

        img.src = book.img;
        title.innerText = book.title;
        price.innerText = book.price;
        
        addToCart.addEventListener('click', function(){
            cartArray.push(book);
            localStorage.setItem('cart', JSON.stringify(cartArray))
        })

        target.append(clone);
    })
    

});

function getCardClone(){
    let template = document.getElementsByTagName('template')[0];
    return template.content.cloneNode(true)
}

