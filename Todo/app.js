const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("todoList");

/* Retrieve from localstorage above event listener */
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  console.log(savedTodos);
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let newTodo = document.createElement("li");
  let todoValue = document.getElementById("todo").value;
  newTodo.innerText = todoValue;
  console.log(newTodo);
  newTodo.isCompleted = false;
  todoForm.reset();
  todoList.appendChild(newTodo);

  savedTodos.push({ todo: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function (event) {
  let clickedListItem = event.target;
  console.log(clickedListItem);
  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }
});
