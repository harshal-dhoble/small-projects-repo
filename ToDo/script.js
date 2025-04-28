const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", (e) => {
  const text = todoInput.value;
  // console.log(text);
  if (text != "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("list");
    todoList.appendChild(li);
    todoInput.value = "";
  }
});
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
