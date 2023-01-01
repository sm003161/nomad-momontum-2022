const clock = document.querySelector("p#clock");

// 시간 가져오기
function loadTime() {
    const time = new Date();
    const h = String(time.getHours()).padStart(2, 0);
    const m = String(time.getMinutes()).padStart(2, 0);
    const s = String(time.getSeconds()).padStart(2, 0);
    clock.innerHTML = `${h}:${m}:${s}`;
}

// 페이지 최초 로드 시 시간 가져오기
loadTime();

// 매초마다 시간 가져오기
setInterval(loadTime, 1000);