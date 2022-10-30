const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
    bars.style.display = "none";
})


closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    bars.style.display = "block";
})
