function adjust_navbar_to_window_size() {
    const navbar = document.getElementById("navbar");
    const navbar_list = document.getElementById("navbar_list");
    const hamburger_icon = document.getElementById("hamburger_icon");
    const window_size = window.innerWidth;

    if (window_size < 850) {
        navbar.classList.add("hidden");
        hamburger_icon.classList.remove("hidden");
        navbar_list.style.display = "none"; // Hide navbar list by default on small screens
    } else {
        navbar.classList.remove("hidden");
        navbar.classList.remove("column-layout");
        navbar_list.style.display = "flex"; // Ensure it's in a row on larger screens
        hamburger_icon.classList.add("hidden");
    }
}

function open_close_navbar_icon() {
    const navbar = document.getElementById("navbar");
    const navbar_list = document.getElementById("navbar_list");

    // Toggle visibility and layout of the navbar list
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
        navbar.classList.add("column-layout"); 
        navbar_list.style.display = "block"; // Set to block for column layout
    } else {
        navbar.classList.add("hidden");
        navbar.classList.remove("column-layout"); 
        navbar_list.style.display = "none"; // Hide navbar list
    }
}

// Call the function on page load
window.onload = adjust_navbar_to_window_size;

// Call the function whenever the window is resized
window.onresize = adjust_navbar_to_window_size;
