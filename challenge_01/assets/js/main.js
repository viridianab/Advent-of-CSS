let timer = document.getElementById("timer");
let statusPomodoro = document.getElementById("status");
let btnEdit = document.getElementById("btnEdit");
let btnStart = document.getElementById("btnStart");

btnStart.addEventListener("click", function () {
	if (timer.matches(".editing")) {
		timer.classList.remove("editing");
	}
    else {
		document.getElementById("icon").src = "assets/img/check.svg";
		statusPomodoro.classList.add("finished");
		btnStart.style.display = "none";
		//btnStart.innerHTML = "Stop";
	}
});

btnEdit.addEventListener("click", function () {
	if (timer.matches(".editing")) {
		timer.classList.remove("editing");
        btnStart.innerHTML = "Start";
	} else if (statusPomodoro.matches(".finished")) {
		timer.classList.remove("editing");
	}  else {
		timer.classList.add("editing");
	}
});