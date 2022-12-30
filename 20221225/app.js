const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const welcomeMessage = document.querySelector("#welcomeMessage");

const HIDDEN_CLASSNAME = "hidden";

// 로그인 이벤트
function login(event) {
    // 자동 Refresh 막기
    event.preventDefault();

    // localStorage 에 저장하기
    const userName = loginInput.value;
    localStorage.setItem( 'user', userName );

    // 완료되면 새로고침
    window.location.reload();
}

loginForm.addEventListener("submit", login);

// localStorage 에 userName 이 있으면 input 숨기고 h1 표시하기
const savedUserName = localStorage.user;

if( savedUserName != null ){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    welcomeMessage.classList.remove(HIDDEN_CLASSNAME); 
    welcomeMessage.innerText = `Hello, ${savedUserName}!`;
}
