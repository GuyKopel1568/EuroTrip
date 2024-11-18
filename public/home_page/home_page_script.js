function adjust_navbar_to_window_size() {
    const navbar = document.getElementById("navbar");
    const navbar_list = document.getElementById("navbar_list");
    const hamburger_icon = document.getElementById("hamburger_icon");
    const window_size = window.innerWidth;
  
    if (window_size < 850) {
      navbar.classList.add("hidden");
      hamburger_icon.classList.remove("hidden");
      navbar_list.style.display = "none";
    } else {
      navbar.classList.remove("hidden");
      navbar.classList.remove("column-layout");
      navbar_list.style.display = "flex";
      hamburger_icon.classList.add("hidden");
    }
  }
  
  function open_close_navbar_icon() {
    const navbar = document.getElementById("navbar");
    const navbar_list = document.getElementById("navbar_list");
  
    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
      navbar.classList.add("column-layout");
      navbar_list.style.display = "block";
    } else {
      navbar.classList.add("hidden");
      navbar.classList.remove("column-layout");
      navbar_list.style.display = "none";
    }
  }
  
  window.onload = adjust_navbar_to_window_size;
  window.onresize = adjust_navbar_to_window_size;
  