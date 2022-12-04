let btnAddToCart = document.getElementsByClassName("btn-add");

for (let button of btnAddToCart) {
	button.addEventListener("click", function onClick() {
        this.classList.add("added");
		this.innerHTML = "In Cart";
	});
}