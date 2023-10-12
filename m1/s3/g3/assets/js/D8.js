let testo = document.getElementById('.testo');
let btn = document.getElementById('.new-task');

btn.addEventListener('click', function(){

    let olList = document.getElementById('.target');
    let inputText = document.getElementById('.testo');

    let li = document.createElement('li');
    li.innerText = inputText.value;

    li.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
    })

    olList.append(li)
})

let deleteTask = document.createElement('button');
deleteTask.innerText = 'Elimina';
deleteTask.addEventListener('click',function(){
    li.remove()

    li.append(deleteTask);
    olList.append(li);

    testo.value = '';
})