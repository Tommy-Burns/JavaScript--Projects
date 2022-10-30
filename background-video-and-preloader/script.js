const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const icon = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
	if (btn.classList.contains("pause")) {
		btn.classList.remove("pause");
		video.play();
		icon.classList.add("fa-pause");
		icon.classList.remove("fa-play");
	} else {
		btn.classList.add("pause");
		video.pause();
		icon.classList.remove("fa-pause");
		icon.classList.add("fa-play");
	}
});

window.addEventListener("load", () => {
	preloader.style.zIndex = "-2";
});
