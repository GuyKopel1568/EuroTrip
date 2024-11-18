/* General Navbar Styles */
#navbar {
    position: absolute;
    top: 0;
    width: calc(100% - 5vw);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vw;
    z-index: 100;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.034);
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    transition: all 0.3s ease;
  }
  
  #navbar_list {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  #navbar_list li {
    margin: 0;
  }
  
  #navbar_list li a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
  }
  
  #hamburger_icon {
    display: none; /* Hidden by default for large screens */
    cursor: pointer;
    z-index: 200;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  /* Responsive Design for Smaller Screens */
  @media screen and (max-width: 768px) {
    #hamburger_icon {
      display: block; /* Show hamburger icon */
    }
  
    #navbar_list {
      display: none; /* Hide the navbar list initially */
      flex-direction: column;
      position: absolute;
      top: 4rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0.8);
      padding: 1rem;
      border-radius: 10px;
    }
  
    #navbar_list.active {
      display: flex; /* Show the navbar list when active */
    }
  
    #navbar_list li {
      margin: 0.5rem 0; /* Add spacing between menu items */
    }
  
    #navbar_list li a {
      color: white; /* White text on mobile */
    }
  }
  