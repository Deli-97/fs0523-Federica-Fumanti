let header = document.querySelector('#header-1');
let btn = document.querySelector('#get-started')

window.addEventListener('scroll', () =>{
    let top = window.scrollY;

    if(top >= 100){
        header.classList.add('bianco');
        btn.classList.add('verde');
    }else{
        header.classList.remove('bianco');
        btn.classList.remove('verde');
    }
});