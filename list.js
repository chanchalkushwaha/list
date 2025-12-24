/*************************
  STORAGE MODULE
**************************/
function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

/*************************
  UI MODULE
**************************/
const todoList = document.getElementById("todo-list");

function renderTodos(todos) {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo.text;

        if (todo.completed) {
            li.classList.add("completed");
        }

        // toggle complete
        li.onclick = () => toggleTodo(index);

        // delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.onclick = (e) => {
            e.stopPropagation(); // li click avoid
            deleteTodo(index);
        };

        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}

/*************************
  MAIN APP LOGIC
**************************/
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

let todos = getTodos();
renderTodos(todos);

addBtn.addEventListener("click", addTodo);

function addTodo() {
    if (input.value.trim() === "") return;

    todos.push({
        text: input.value,
        completed: false
    });

    saveTodos(todos);
    renderTodos(todos);
    input.value = "";
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos(todos);
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos(todos);
    renderTodos(todos);
}
