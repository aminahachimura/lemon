function openNav(navName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) 
        
    document.getElementById(navName).style.display = "block";
  
  }

  function openNav(page) {
    // Hide all content divs
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => tab.style.display = 'none');
    
    // Show the selected tab
    document.getElementById(page).style.display = 'block';
    
    // Check if it's the 'Home' page, apply background change functionality
    if (page === 'Home') {
      document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
      document.body.onclick = changeBackground; // Enable background change on click
    } else {
      // Remove the background when not on the home page
      document.body.style.backgroundImage = 'none';
      document.body.onclick = null; // Disable background change on click
    }

    if (page === 'About') {
        document.body.style.backgroundImage = `white`;
      } else if (page === 'Story') {
        document.body.style.backgroundImage = `linear-gradient(180deg, #D2CEEC, #FFDC00)`;
      } else if (page === 'Video') {
        document.body.style.backgroundImage = `white`;
      }
    }

  // Show Home page initially
  openNav('Home');

  
