const showDropdown = (id) => {
    const dropdown = document.querySelector(`#${id}`);

    if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    }
};

const hideDropdown = (id) => {
    const dropdown = document.querySelector(`#${id}`);

    if (!dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");
    }
};

const clickDropdown = (id) => {
    const dropdown = document.querySelector(`#${id}`);

    if (!dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");
    } else if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
    }
};
