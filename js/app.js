/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// Get navbarList by ID
const navbarList = document.getElementById("navbar__list");

// Get an array of multiple sections
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuild = (sections) => {
  // Loop over the list of sections to build navbar menu items
  for (section of sections) {
    // Create <li> element
    const navLi = document.createElement('li');

    // Create <a> tag
    const navLink = document.createElement('a');

    // Add href, id, classList to <a> tag
    navLink.href = `#${section.id}`;
    navLink.id = `nav_${section.id}`;
    navLink.classList = 'menu__link';

    // Add event listener to nav links for 'click' event to scroll to the corresponding section
    navLink.addEventListener('click', () => {
      section.scrollIntoView({behavior: 'smooth'})
    })

    // Get nav name
    const text = document.createTextNode(`${section.dataset.nav}`);

    // Append elements
    navLink.appendChild(text);
    navLi.appendChild(navLink);
    navbarList.appendChild(navLi);
  }
};





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Check if section is null or not
if (sections.length != 0) {
  navBuild(sections)
}
   
// Scroll to section on link click

// Set sections as active