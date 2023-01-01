const clock = document.querySelector("p#clock");
const h = clock.querySelector("span#h");
const m = clock.querySelector("span#m");
const s = clock.querySelector("span#s");

/*
function hello() {
    console.log("hello");
}

// 5초마다 hello 실행하기
// setInterval(hello, 5000);

// 5초 후에 hello 실행하기
// setTimeout(hello, 5000);

// 오늘 날짜 console.log 하기
console.log(new Date);
*/

function loadTime() {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    secounds = new Date().getSeconds();
    h.innerHTML = `${hours}`;
    m.innerHTML = `${minutes}`;
    s.innerHTML = `${secounds}`;
}

loadTime();
setInterval(loadTime, 1000);