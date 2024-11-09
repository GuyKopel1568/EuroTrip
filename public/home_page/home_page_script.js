function adjust_navbar_to_window_size() {
    const navbar = document.getElementById("navbar");
    const hamburger_icon = document.getElementById("hamburger_icon");
    const window_size = window.innerWidth;

    if (window_size < 850) {
        navbar.classList.add("hidden");
        hamburger_icon.classList.remove("hidden");
    } else {
        navbar.classList.remove("hidden");
        hamburger_icon.classList.add("hidden");
    }
}

// Call the function on page load
window.onload = adjust_navbar_to_window_size;

// Call the function whenever the window is resized
window.onresize = adjust_navbar_to_window_size;
