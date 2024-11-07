"use strict";

const btn = document.querySelector(".dark-theme");
const darkIcon = document.querySelector(".fa-moon");
const lightIcon = document.querySelector(".fa-sun");

const addDarkMode = () => {
    document.documentElement.classList.add("dark");

    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
};

const removeDarkMode = () => {
    document.documentElement.classList.remove("dark");

    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
};

if (localStorage.getItem("color-theme") === "dark") {
    addDarkMode();
} else if (localStorage.getItem("color-theme") === "light") {
    removeDarkMode();
} else {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        addDarkMode();
    } else {
        removeDarkMode();
    }
}

btn.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("color-theme", "light");

        removeDarkMode();
    } else {
        localStorage.setItem("color-theme", "dark");

        addDarkMode();
    }
});
