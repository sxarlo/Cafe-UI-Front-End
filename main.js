 function tab(tabId) {
    // Step 1: Get all tab contents
    const allTabs = document.querySelectorAll(".tab-menu-content");

    // Step 2: Hide all of them by adding the 'hidden' class
    allTabs.forEach(tab => tab.classList.add("hidden"));

    // Step 3: Show the clicked tab by removing the 'hidden' class
    document.getElementById(tabId).classList.remove("hidden");
  }



  // Hamburger Menu Function

  let hamburger = document.getElementById('hamburger');
  let navContainer = document.getElementById('nav-links-container');

  hamburger.addEventListener('click', function () {
    navContainer.classList.toggle('active');
  })