let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmM2VkNzJiY2QzYjAwMTk1MTdhNTQiLCJpYXQiOjE2OTk2OTIyNDcsImV4cCI6MTcwMDkwMTg0N30.QVaWjQfOEpogJz7l_hR6dzsexeM94bROes4VL8WMCb0";
let urlStrive = 'https://striveschool-api.herokuapp.com/api/product/';


let addBtn = document.querySelector('.addButton');
let resetButton = document.querySelector('.resetButton');

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    let name = document.querySelector('#validationCustom01').value;
    let description = document.querySelector('#validationCustom03').value;
    let brand = document.querySelector('#validationCustom02').value;
    let imageUrl = document.querySelector('#validationCustom04').value;
    let price = Number(document.querySelector('#validationCustom05').value);

    class Mobile {
        constructor(name, description, brand, imageUrl, price) {
            this.name = name;
            this.description = description;
            this.brand = brand;
            this.imageUrl = imageUrl;
            this.price = price;
        }
    }

    fetch(urlStrive, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": apiKey,
        },
        body: JSON.stringify(new Mobile(name, description, brand, imageUrl, price))
    })
        .then(res => res.json())
        .then(mobiles => {

            Swal.fire({
                title: "Ben Fatto!",
                text: "Operazione riuscita correttamente!",
                icon: "success"
            });
        })
})

resetButton.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#validationCustom01').value = '';
    document.querySelector('#validationCustom02').value = '';
    document.querySelector('#validationCustom03').value = '';
    document.querySelector('#validationCustom04').value = '';
    document.querySelector('#validationCustom05').value = '';
});