const loginForm = document.querySelector("div");
const loginInput = loginForm.querySelector("input");
const loginSubmit = loginForm.querySelector("button");

function login() {
    // 자주 쓰는 선택자 변수 만들기
    const inputValue = loginInput.value;

    // 사용자 이름 변수 만들기
    let userName = "";

    // Submit 이벤트
    // 사용자 이름이 없거나 2글자 이하면 alert
    if (!inputValue || inputValue.length < 2) {
        alert("Please write more than 2 letters.")
    // 아니면 저장하기 
    } else {
        userName = inputValue;
        console.log(userName);
    }
}

loginSubmit.addEventListener("click", login);