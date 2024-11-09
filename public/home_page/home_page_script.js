function adjust_navbar_to_window_size() {
    const navbar = document.getElementById("navbar");
    const window_size = window.innerWidth;
    console.log(window_size);   
    if(window_size < 850){
        navbar.classList.add("hidden");
    }else{
        navbar.classList.remove("hidden");
    }
}

// Call the function on page load
window.onload = adjust_navbar_to_window_size;

// Call the function whenever the window is resized
window.onresize = adjust_navbar_to_window_size;
