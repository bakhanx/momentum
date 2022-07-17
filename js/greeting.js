const enterInput = document.getElementById("input-enter");
const enterBtn = document.getElementById("btn-enter");
const greetingForm = document.getElementById("greeting");
const greetingText = document.getElementById("greeting-text");
const greetingName = document.getElementById("greeting-name");
const greetingMsg = document.getElementById("greeting-message");
const logoutBtn = document.getElementById("btn-logout");
const GREETING_KEY = "names";

let names = [];
let isLogin = false;

let SaveNames = () => {
  localStorage.setItem(GREETING_KEY, JSON.stringify(names));
};

const display_login = () => {
  enterBtn.style.display = "none";
  enterInput.style.display = "none";
  greetingText.style.display = "inline";
  logoutBtn.style.display = "inline";
  todoForm.style.display = "block";
  isLogin = true;
  console.log(isLogin);
};
const display_nonlogin = () => {
  enterBtn.style.display = "inline";
  enterInput.style.display = "inline";
  greetingText.style.display = "none";
  logoutBtn.style.display = "none";
  todoForm.style.display = "none";
  isLogin = false;
  console.log(isLogin);
};

// init
if (!isLogin) display_nonlogin();

const handleLoginSubmit = (e) => {
  e.preventDefault();
  if (
    localStorage.getItem(GREETING_KEY) &&
    JSON.parse(localStorage.getItem(GREETING_KEY)).find(
      (i) => i.name === enterInput.value
    )
  )
    greetingName.innerHTML = enterInput.value;
  else {
    const newName = enterInput.value;
    enterInput.value = "";
    const newNameObj = {
      name: newName,
      id: Date.now(),
    };
    names.push(newNameObj);
    greetingName.innerHTML = newNameObj.name;
    SaveNames();
  }

  display_login();
  todoList.style.display = "block";
  showList();

};

const handleLogout = () => {
  greetingName.innerHTML = "";
  todoList.style.display = "none";
  while(todoList.hasChildNodes()){
    todoList.removeChild(todoList.firstChild);
  }
  display_nonlogin();
};

greetingForm.addEventListener("submit", handleLoginSubmit);
logoutBtn.addEventListener("click", handleLogout);
