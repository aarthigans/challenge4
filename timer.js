const timeH = document.querySelector("p");
let timeSecond = 30;

displayTime(timeSecond);

const countdown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond <= 0 || timeSecond < 1) {
    endTime();
    clearInterval(countdown);
  }
}, 500);

function displayTime(second) {
  const min = Math.floor(second / 30);
  const sec = Math.floor(second % 30);
  timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${
    sec < 10 ? "0" : ""
  }${sec}   `;
}
function endTime() {
  timeH.innerHTML = "TIME OUT";
}
