const showMenu = (listNavbar, btnOpen, btnClose) => {
    listNavbar.classList.remove("hidden");
    btnOpen.classList.add("hidden");
    btnClose.classList.remove("hidden");
};

const hideMenu = (listNavbar, btnOpen, btnClose) => {
    listNavbar.classList.add("hidden");
    btnOpen.classList.remove("hidden");
    btnClose.classList.add("hidden");
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
    const btnOpen = document.querySelector(".fa-bars");
    const btnClose = document.querySelector(".fa-xmark");

    event.stopPropagation();
    if (listNavbar.classList.contains("hidden")) {
        showMenu(listNavbar, btnOpen, btnClose);
    } else {
        hideMenu(listNavbar, btnOpen, btnClose);
    }
});
