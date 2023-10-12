let tabellone = document.querySelector('.tabellone');
let btn = document.querySelector('.btn');
let numeroEstratto = document.getElementById('numero-estratto');

for(let i = 1; i <= 76; i++){
    let celle = document.createElement('div')
    celle.className = 'celle';
    celle.textContent = i;

    tabellone.appendChild(celle);
}

btn.addEventListener('click', function(){
    let numRandom = Math.floor(Math.random()* 76) + 1;
    numeroEstratto.textContent = `${numRandom}`;

})



