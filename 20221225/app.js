const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const welcomeMessage = document.querySelector("#welcomeMessage");

function login(event) {
    // 자동 Refresh 막기
    event.preventDefault();

    // input 값 console.log 하기
    // console.log(loginInput.value);

    // input 값 변수화
    const userName = loginInput.value;

    // input 숨기고 h1 표시하기
    loginForm.classList.add("hidden");
    welcomeMessage.className = "show";

    // welcomeMessage 표시하기
    welcomeMessage.innerText = `Hello, ${userName}!`;
}

loginForm.addEventListener("submit", login);