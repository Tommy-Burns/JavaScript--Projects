const counterElement = document.querySelector('.counter');
const barElement = document.querySelector('.loading-bar-front');

let index = 0;


updateNumbers();

function updateNumbers() {
    counterElement.innerText = `${index} %`;
    barElement.style.width = `${index}%`;
    index++;

    if (index <= 100) {
        setTimeout(updateNumbers, 50)
    }
}
