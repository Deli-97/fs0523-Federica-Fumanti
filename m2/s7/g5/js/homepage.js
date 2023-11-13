
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmM2VkNzJiY2QzYjAwMTk1MTdhNTQiLCJpYXQiOjE2OTk2OTIyNDcsImV4cCI6MTcwMDkwMTg0N30.QVaWjQfOEpogJz7l_hR6dzsexeM94bROes4VL8WMCb0";
let urlStrive = 'https://striveschool-api.herokuapp.com/api/product/';

fetch(urlStrive, {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": apiKey,
    }
})
    .then(res => res.json())
    .then(mobiles => {

        mobiles.forEach((mobile, i) => {
            cloneTemplate()
            createMobile(mobile)
        })

    })

function cloneTemplate(nr = `0`) {
    const template = document.getElementsByTagName("template")[`${nr}`].content;
    const clone = template.cloneNode(true);
    const cloneContainer = document.getElementById(`target${nr}`);
    cloneContainer.appendChild(clone);
    return clone;
}


function createMobile(mobile) {
    const clone = document.querySelector('.card:last-of-type');
    const immagine = clone.querySelector('.card-img-top');
    immagine.src = mobile.imageUrl;
    const titolo = clone.querySelector('#nameProduct');
    titolo.innerHTML = mobile.name;
    const prezzo = clone.querySelector('#priceProduct');
    prezzo.innerHTML = mobile.price + '€';
    const description = clone.querySelector('#descriptionProduct');
    description.innerHTML = mobile.description;
    const brandProduct = clone.querySelector('#brandProduct');
    brandProduct.innerHTML = mobile.brand;
    compileButton(clone,mobile)
}

function compileButton(clone, mobile) {
    let detailBtn = clone.querySelector('.detailBtn');
    detailBtn.href = 'detail.html?id=' + mobile._id;
    detailBtn.target = '_blank';
}