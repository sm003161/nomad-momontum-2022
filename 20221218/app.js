/* 221218 기본 Eventlistener 테스트
const h1 = document.querySelector("h1");

const toolbox = {
    clickHandler: function() {
        h1.style.color = "tomato";
        h1.innerHTML = "Clicked!"
    },

    hoverHandler: function() {
        h1.innerHTML = "On me!";
    },

    leaveHandler: function() {
        h1.innerText = "Gone!"
    },

    resizingHandler: function() {
        document.body.style.backgroundColor = "lightyellow";
    },

    copyHandler: function() {
        alert("Copied!");
    },

    offlineHandler: function() {
        alert("Connection is lost!")
    }
}


h1.addEventListener("click", toolbox.clickHandler);
h1.addEventListener("mouseenter", toolbox.hoverHandler);
h1.addEventListener("mouseleave", toolbox.leaveHandler);

window.addEventListener("resize", toolbox.resizingHandler);
window.addEventListener("copy", toolbox.copyHandler);
window.addEventListener("offline", toolbox.offlineHandler);

*/



/* 221218 Eventlistener 와 if 를 복합적으로 사용하기 1
const h1 = document.querySelector("h1");

const toolbox = {
    handleTitleClick: function() {
        // 변수 만들기
        const currentColor = h1.style.color;
        let newColor;
        
        // 조건 설정하기
        // 현재 색상이 검정색이면
        if (currentColor === "#333333") {
            // 토마토로 바꿔주기
            newColor = "tomato";
        } else {
            // 아니면 검정색으로 바꾸기
            newColor = "#333333";
        }
        // 바꾼 후에 저장하기
        h1.style.color = newColor;
    }
}

h1.addEventListener("click", toolbox.handleTitleClick);
*/



/* 221218 Eventlistener 와 if 를 복합적으로 사용하기 2
const h1 = document.querySelector("h1");

function classChecker() {
    // 조건 설정하기
    // h1 에 on 클래스가 없으면
    if (!h1.classList.contains("on")) {
        // on 클래스 추가하기
        h1.classList.add("on");
    } else {
        // on 이면 클래스 제거하기
        h1.classList.remove("on");
    }
}

h1.addEventListener("click", classChecker);
*/



/* 221218 Eventlistener 와 if 를 복합적으로 사용하기 3
const h1 = document.querySelector("h1");

function classChecker() {
    const on = "on"
    // 조건 설정하기
    // h1 에 on 클래스가 없으면
    if (!h1.classList.contains(on)) {
        // on 클래스 추가하기
        h1.classList.add(on);
    } else {
        // on 이면 클래스 제거하기
        h1.classList.remove(on);
    }
}

h1.addEventListener("click", classChecker);
*/



/* 221218 Eventlistener 와 if 를 복합적으로 사용하기 4 */
// 누구에게 : 적용 대상 변수화하기
const h1 = document.querySelector("h1");

// function 만들기
function classChecker() {
    // 무엇을 : 적용 클래스 변수화하기
    const on = "on"
    // 어떻게 : 적용 대상에 on 클래스 토글 이벤트 생성하기
    h1.classList.toggle(on)
}

// 언제 : 대상에 click 이벤트 발생 시 function 실행하기
h1.addEventListener("click", classChecker);