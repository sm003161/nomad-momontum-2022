const toDoForm = document.querySelector("form#to-do-form");
const toDoInput = toDoForm.querySelector("input#to-do-input");
const toDoList = document.querySelector("ul#to-do-list");
let toDoItem = "";

// 화면에 toDoItem 가져오기
function showAnItem(toDoItem) {
    // li & span 생성하기
    const itemRow = document.createElement("li");
    const itemText = document.createElement("span");
    
    // DOM 위치 잡아주기
    itemRow.appendChild(itemText);
    toDoList.appendChild(itemRow);

    // item 이름 가져오기
    itemText.innerText = toDoItem;
}

// Submit 이벤트
function toDoSubmit(event) {
    // submit 시 Refresh 막기
    event.preventDefault();

    // 값을 toDoItem 으로 저장하기
    toDoItem = toDoInput.value;

    // input 비우기
    toDoInput.value = "";

    showAnItem(toDoItem);
}

toDoForm.addEventListener("submit", toDoSubmit);