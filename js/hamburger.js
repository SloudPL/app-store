const showMenu = (listNavbar) => {
    listNavbar.classList.remove("hidden");
};

const hideMenu = (listNavbar) => {
    listNavbar.classList.add("hidden");
};

const listNavbar = document.querySelector(".list-navbar");
const hamburger = document.querySelector(".hamburger");

document.addEventListener("click", (event) => {
    if (
        !hamburger.contains(event.target) &&
        !listNavbar.contains(event.target)
    ) {
        hideMenu(listNavbar);
    }
});

hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    if (listNavbar.classList.contains("hidden")) {
        showMenu(listNavbar);
    } else {
        hideMenu(listNavbar);
    }
});
