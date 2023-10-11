let testo = document.getElementById('testo');
let newTask = document.getElementById('new-task');
let target = document.getElementById('target');


newTask.addEventListener('click', function(){

    let target = document.getElementById('target');
    let input = document.getElementById('testo');

    let li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = input.value;
    li.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
    })

    target.append(li)
})

let deleteTask = document.createElement('button');
deleteTask.textContent = 'Elimina';
deleteTask.addEventListener('click',function(){
    li.style.textDecoration = 'line-through';
    deleteTask.remove()

    li.append(deleteTask);
    target.append(li);

    testo.value = '';
})