const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const username = document.getElementById("greeting-name");

const TODOS_KEY = "todos";

let toDos = []; // localStroage

//set Item
let SaveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

let DeleteTodo = (e) => {
  // 클릭한 버튼의 부모요소(li) 제거
  const li = e.target.parentElement;
  li.remove();
  console.log(li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  SaveToDos();
};

let PaintToDo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.name = newTodo.name;
  const span = document.createElement("span");
  span.innerHTML = newTodo.text;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", DeleteTodo);
  // li > span
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
};

let HandleToDoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    name: username.innerHTML,
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // store array - local storage
  PaintToDo(newTodoObj);
  SaveToDos(); // save local storage

  //   JSON.parse(localStorage.getItem(TODOS_KEY)).map((i) => {
  //     if (i.name === username.innerHTML) PaintToDo(i);
  //   });

  // show on html
};

const showList = () => {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.map((i) => {
      if (i.name === username.innerHTML) {
        console.log(i);
        PaintToDo(i)
      };
    });
  }
};

showList();
todoForm.addEventListener("submit", HandleToDoSubmit);

// get Item
