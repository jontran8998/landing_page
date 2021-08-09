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

// remove classList of an element function
const removeClassList = (li, classList) => {
  return li.classList.remove(classList)
}

// add classList of an element function
const addClassList = (li, classList) => {
  return li.classList.add(classList)
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav menu
const navBuild = (sections) => {
  // Loop over the array of sections
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
    // Scroll to anchor ID using scrollTO event
    navLink.addEventListener('click', () => {
      section.scrollIntoView({behavior: 'smooth'})
    })

    // Get nav menu name
    const text = document.createTextNode(`${section.dataset.nav}`);

    // Appending elements
    navLink.appendChild(text);
    navLi.appendChild(navLink);
    navbarList.appendChild(navLi);
  }
};




// Add class 'active' to 'section' and 'nav menu' when near top of viewport
const activeChange = (sections) => {
  window.addEventListener('scroll', () => {
    let current = '';
    for (section of sections) {
      // assign the distance from section to the top of the page
      const sectionTop = section.offsetTop;
      // assign the height of section
      const sectionHeight = section.clientHeight;
      // get current postion when scrolling
      if (pageYOffset >= (sectionTop - sectionHeight / 3) ) {
        current = section.getAttribute('id')
      }  
    }

    // add and remove active class to particular section
    sections.forEach(section => {
      removeClassList(section, 'your-active-class');
      if (section.id.includes(current) && current.length > 0) {
        addClassList(section, 'your-active-class')
      }
    })

    // add and remove active class to particular nav menu
    const navLi = document.querySelectorAll('nav ul li a')
    navLi.forEach(li => {
      removeClassList(li, 'active-class');
      if (li.id.includes(current) && current.length > 0) {
        addClassList(li, 'active-class')
      }
    })

  })
}




/**
 * End Main Functions
 * Begin Events
 * 
*/


// Check if section is null or not
if (sections.length != 0) {

  // Build menu 
  navBuild(sections)

  // Set sections as active
  activeChange(sections)
}
   

