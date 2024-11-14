const showDropdown = (dropdown) => {
    if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    }
};

const hideDropdown = (dropdown) => {
    if (!dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");
    }
};

const clickDropdown = (dropdown) => {
    dropdown.classList.toggle("hidden");
};

const btnsDropdown = document.querySelectorAll(".btns_download");
const dropdowns = document.querySelectorAll(".dropdown_card");

btnsDropdown.forEach((btn, i) => {
    const dropdown = dropdowns[i];

    if (window.innerWidth > 800) {
        btn.addEventListener("mouseenter", () => showDropdown(dropdown));
        btn.addEventListener("mouseleave", () => hideDropdown(dropdown));
    }

    btn.addEventListener("click", () => clickDropdown(dropdown));
    window.addEventListener("click", (e) => {
        if (!e.target.closest(".btns_download")) {
            hideDropdown(dropdown);
        }
    });
});

dropdowns.forEach((dropdown) => {
    if (window.innerWidth > 800) {
        dropdown.addEventListener("mouseenter", () => showDropdown(dropdown));
        dropdown.addEventListener("mouseleave", () => hideDropdown(dropdown));
    }

    dropdown.addEventListener("click", () => clickDropdown(dropdown));
});
