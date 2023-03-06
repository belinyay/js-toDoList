let inputDOM = document.querySelector("#task");
inputDOM.addEventListener("submit", newElement);
let successDOM = document.querySelector("#liveToastSuccess");
let errorDOM = document.querySelector("#liveToastError");
let listDom = document.querySelector("#list");

let toDoList = [
  { id: 1, done: false, text: "3 Litre Su İç" },
  { id: 2, done: false, text: "Ödevleri Yap" },
  { id: 3, done: false, text: "En Az 3 Saat Kodlama Yap" },
  { id: 4, done: false, text: "Yemek Yap" },
  { id: 5, done: false, text: "50 Sayfa Kitap Oku" },
];

window.onload = function () {
  console.log("Hello World!");
  for (let toDo of toDoList) {
    newElement(toDo.id, toDo.done, toDo.text);
  }
};

function removeItem(elem) {
  toDoList = toDoList.filter((t) => t.id != elem.parentNode.dataset.id);
  elem.parentNode.remove();
}

function doneItem(elem) {
  let data = toDoList.find((t) => t.id == elem.parentNode.dataset.id);
  data.done = !data.done;
  if (data.done) {
    elem.parentNode.classList.add("done");
  } else {
    elem.parentNode.classList.remove("done");
  }
}

function addTask() {
  let id = toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1;
  let text = inputDOM.value;

  if (text.trim().length == 0) {
    new bootstrap.Toast(document.querySelector("#successToast")).hide();
    new bootstrap.Toast(document.querySelector("#errorToast")).show();
    return;
  }
  toDoList.push({ id: id, done: false, text: text });
  newElement(id, false, text);
  
  localStorage.setItem(toDo.id, toDo.text);
  new bootstrap.Toast(document.querySelector("#errorToast")).hide();
  new bootstrap.Toast(document.querySelector("#successToast")).show();
}

function newElement(id, done, text) {
  let liDOM = document.createElement("li");
  liDOM.setAttribute("data-id", id);
  let liDOMText = document.createElement("div");
  liDOMText.innerHTML = text;
  let liDOMButton = document.createElement("button");
  liDOMButton.classList.add("close");
  liDOMButton.classList.add("border-0");
  liDOMButton.type = "button";
  liDOMButton.innerHTML = "&times;";
  liDOMText.onclick = () => {
    doneItem(liDOMText);
  };
  liDOMButton.onclick = () => {
    removeItem(liDOMButton);
  };
  liDOM.append(liDOMText);
  liDOM.append(liDOMButton);
  listDom.append(liDOM);
}
