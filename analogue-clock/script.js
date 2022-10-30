const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');


function updateClock() {
    const currentDate = new Date();
    // setTimeout(updateClock, 1000);

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Changing time to degrees
    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (seconds / 60) * 360;

    // Manipulate the DOM
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
