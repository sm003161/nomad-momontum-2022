const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginSubmit = loginForm.querySelector("button");
const link = document.querySelector("a");

function login(event) {
    // 자동 Refresh 막기
    event.preventDefault();

    // input 값 console.log 하기
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", login);