const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let num = 0;

btns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		const classes = event.currentTarget.classList;
		if (classes.contains("btn-danger")) {
			num--;
		} else if (classes.contains("btn-success")) {
			num++;
		} else {
			num = 0;
		}
		value.textContent = num;

		if (num > 0) {
			value.style.color = "darkgreen";
		} else if (num < 0) {
			value.style.color = "red";
		} else {
			value.style.color = "black";
		}
	});
});
