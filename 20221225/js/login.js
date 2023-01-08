const loginForm = document.querySelector("form#login-form");
const loginInput = loginForm.querySelector("input#user-name");
const welcomeMessage = document.querySelector("h1#welcome-message");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "user"

// 로그인 이벤트
function login(event) {
    // submit 시 Refresh 막기
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // localStorage 에 저장하기
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    operateClasses(userName);
}

// hidden class 변경하기
function operateClasses(A) {
    welcomeMessage.classList.remove(HIDDEN_CLASSNAME); 
    welcomeMessage.innerText = `Hello, ${A}!`;
}

// localStorage 에 userName 이 있으면 input 숨기고 h1 표시하기
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", login);    
} else {
    operateClasses(savedUserName);
}