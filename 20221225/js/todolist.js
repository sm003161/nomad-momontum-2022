const toDoForm = document.querySelector("form#to-do-form");
const toDoInput = toDoForm.querySelector("input#to-do-input");
const toDoList = document.querySelector("ul#to-do-list");
let toDoItem = "";
let toDoArray = [];

const LS_TODOS = "toDo"
const lsToDo = localStorage.getItem(LS_TODOS);
const parsedToDo = JSON.parse(lsToDo);

// 화면에서 toDoItem 제거하기
function delAnItem(event) {
    const targetBtn = event.target.parentElement;
    const targetLi = targetBtn.parentElement;
    targetLi.remove();
}

// 화면에 toDoItem 가져오기
function showAnItem(toDoItem) {
    // li & span 생성하기
    const li = document.createElement("li");
    const span = document.createElement("span");
    
    // X 버튼 만들기
    const btn = document.createElement("button");
    btn.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
    btn.addEventListener("click", delAnItem);

    // DOM 위치 잡아주기
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);

    // item 이름 가져오기
    span.innerText = toDoItem;
}

// Local Storage 에 저장하기
function saveAnItem() {
    localStorage.setItem(LS_TODOS, JSON.stringify(toDoArray));
}

// Submit 이벤트
function toDoSubmit(event) {
    // submit 시 Refresh 막기
    event.preventDefault();

    // 값을 toDoItem 으로 저장하기
    toDoItem = toDoInput.value;

    // input 비우기
    toDoInput.value = "";

    toDoArray.push(toDoItem);
    saveAnItem(toDoItem);
    showAnItem(toDoItem);
}

toDoForm.addEventListener("submit", toDoSubmit);

if(lsToDo !== null) {
    
    toDoArray = parsedToDo;
    parsedToDo.forEach(showAnItem);
}