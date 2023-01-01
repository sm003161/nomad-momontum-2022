const clock = document.querySelector("p#clock");

function loadTime() {
    const time = new Date();
    clock.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

loadTime();
setInterval(loadTime, 1000);