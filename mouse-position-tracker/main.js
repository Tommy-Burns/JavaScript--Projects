const containerElement = document.querySelector('.container');

window.addEventListener('mousemove', (e) => {
    containerElement.innerHTML = `
    <div class="mouse-event">
            ${e.clientX}
            <h4>Mouse X Position(Px)</h4>
        </div>
        <div class="mouse-event">
            ${e.clientY}
            <h4>Mouse Y Position(Py)</h4>
    </div>
    `;
})
