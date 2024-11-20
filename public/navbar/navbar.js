function adjust_navbar_to_window_size() {
  const navbar = document.getElementById("navbar");
  const navbar_list = document.getElementById("navbar_list");
  const hamburger_icon = document.getElementById("hamburger_icon");
  const window_size = window.innerWidth;

  console.log("Window size:", window_size);

  if (!navbar || !navbar_list || !hamburger_icon) {
    console.error("Navbar elements not found");
    return;
  }

  // Toggle based on screen size
  if (window_size < 850) {
    console.log("Switching to hamburger view");
    navbar_list.style.display = "none"; // Hide navbar list
    hamburger_icon.style.display = "block"; // Show hamburger icon
  } else {
    console.log("Switching to full navbar view");
    navbar_list.style.display = "flex"; // Show navbar list
    hamburger_icon.style.display = "none"; // Hide hamburger icon
  }

  console.log("Hamburger Icon Style:", window.getComputedStyle(hamburger_icon).display);
}

function open_close_navbar_icon() {
  const navbar = document.getElementById("navbar");
  const navbar_list = document.getElementById("navbar_list");

  if (!navbar || !navbar_list) {
    console.error("Navbar elements not found");
    return;
  }

  if (navbar_list.style.display === "none") {
    navbar_list.style.display = "block";
    console.log("Opening navbar list");
  } else {
    navbar_list.style.display = "none";
    console.log("Closing navbar list");
  }
}

function loadNavbar() {
  fetch("/navbar/navbar.html")
    .then((response) => {
      if (!response.ok) throw new Error("Navbar HTML file not found.");
      return response.text();
    })
    .then((data) => {
      const navbarPlaceholder = document.getElementById("navbar-placeholder");
      if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = data;
        console.log("Navbar loaded successfully");
        adjust_navbar_to_window_size();
        window.onresize = adjust_navbar_to_window_size;
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

window.onload = () => {
  loadNavbar();
};
