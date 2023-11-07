let saveButton = document.querySelector('#save-button');

saveButton.addEventListener('click', function(){
    let nameInput = document.querySelector('#name');
    let name = nameInput.value;
    localStorage.setItem('nome', name);
    document.querySelector('#saved-name').textContent = `Nome salvato: ${name}`;

});

let removeButton = document.querySelector('#remove-button');

removeButton.addEventListener('click', function() {
    localStorage.removeItem('nome');
    document.querySelector('#name').value = '';
    document.querySelector('#saved-name').textContent = 'Nome rimosso';
});

let savedName = localStorage.getItem('nome');
    if (savedName) {
    document.querySelector('#saved-name').textContent = `Nome salvato: ${savedName}`;
}


/*CONTATORE*/

function aggiornaContatore(){
    let conteggio = 0;
    let contatoreTempo = sessionStorage.getItem('contatore_tempo');

    if(contatoreTempo){
        conteggio = parseInt(contatoreTempo);
    }


let contatore = document.querySelector('#contatore');

setInterval(function(){
    conteggio++;
    sessionStorage.setItem('contatore_tempo', conteggio);
    contatore.textContent = `Tempo trascorso: ${conteggio} secondi`;
}, 1000);

}

aggiornaContatore();