document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
    );

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach((item) =>
                item.classList.remove("carousel__item--selected")
            );
            buttons.forEach((button) =>
                button.classList.remove("carousel__button--selected")
            );

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });

    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
    // let aha = 0







    var counter = 0
    var value = 1

    function changeCarousel() {
        if (counter <= 1) {
            counter += value
        } else if (counter = 2) {
            counter = 0
        }

        // items[counter].classList.add("carousel__item--selected");
        // buttons[counter].classList.add("carousel__button--selected");

        setTimeout(changeCarousel, 5000)

        console.log(counter)
    }
    changeCarousel()

});