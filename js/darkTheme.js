"use strict";

const btn = document.querySelector(".dark-theme");
const darkIcon = document.querySelector(".fa-moon");
const lightIcon = document.querySelector(".fa-sun");

if (localStorage.getItem("color-theme") === "dark") {
    document.documentElement.classList.add("dark");

    darkIcon.classList.remove("hidden");
    lightIcon.classList.add("hidden");
} else {
    document.documentElement.classList.remove("dark");

    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
}

btn.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");

        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");

        darkIcon.classList.remove("hidden");
        lightIcon.classList.add("hidden");
    }
});
