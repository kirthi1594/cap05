async function fetchTodos() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos')
    let todoList = await res.json()
    console.log(todoList)
    for (let todo of todoList) {
        appendTodo(createTodoTableRow(todo.id, todo.title, todo.completed))
    }
}

function createTodoTableRow(id, title, status) {
    let tableRow = document.createElement('tr')
    tableRow.innerHTML = `
    <tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>${status?'Done': 'Pending'}</td>
    </tr>
    `
    return tableRow
}

function clearTodo() {
    document.querySelector('tbody').innerHTML = ''
}

function appendTodo(todo) {
    document.querySelector('tbody').appendChild(todo)
}

document.getElementById('fetchBtn').addEventListener('click', fetchTodos)
document.getElementById('clearBtn').addEventListener('click', clearTodo)