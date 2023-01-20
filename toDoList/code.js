/***
* toDoList
* 1 шаг - концепт(макет)
* 2 шаг - расположить элементы ввода
* 3 шаг - реализовать функцию сохранения данных(массив)
* 4 шаг - реализовать функцию вывода массива данных
*   функция удаления
* функция редактирования 
*/

//находим переменные в html
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.ul');

//массив для хранения задач
const tasks = [];
const createTasks = (task) => { 
    tasks.push(task);

}
//делаем объект при клике
btn.addEventListener('click', () => { 
    const task = {};
    task.text = inp.value;
    task.id = new Date().getTime()
    task.done = false;
    createTasks(task);
    // console.log(task);
    renderTaskList();
})

const renderTaskList = () => { 
    tasks.forEach(task => { 
        const li = document.createElement('li');
        const inp = document.createElement('input');
        const delbtn = document.createElement('button');
        delbtn.innerHTML = 'X';
        inp.value = task.text;
        delbtn.addEventListener('click', () => { removeTask(task); renderTaskList(); })
        li.append(inp, delbtn);
        ul.append(li);
    })
    // удаление задачи, которую мы находим по индексу, и ножом вырезаем ее измассива
    const removeTask = (task) => { 
        const index = tasks.findIndex((t) => { return t.id === task.id;})
        tasks.splice(index, 1,)
        console.log(index);
    }
}

