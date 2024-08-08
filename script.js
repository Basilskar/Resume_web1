function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*==animation while scroll==*/
const sr = ScrollReveal();
sr.reveal('#profile', {
 duration: 3000, // Animation duration (in milliseconds)
 origin: 'left', // Slide in from the left
 distance: '100px', // Distance to slide
});
sr.reveal('#experience', {
 duration: 3000, // Animation duration (in milliseconds)
 origin: 'left', // Slide in from the left
 distance: '100px', // Distance to slide
});
sr.reveal('#contact', {
 duration: 3000, // Animation duration (in milliseconds)
 origin: 'left', // Slide in from the left
 distance: '100px', // Distance to slide
});
sr.reveal('#projects', {
 duration: 3000, // Animation duration (in milliseconds)
 origin: 'left', // Slide in from the left
 distance: '100px', // Distance to slide
});
sr.reveal('#about', {
 duration: 5000, // Animation duration (in milliseconds)
 origin: 'left', // Slide in from the left
 distance: '10px', // Distance to slide
});

/*==Dark mode==*/

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const icon = document.querySelector('#myIcon i');
const image = document.querySelector('#em img'); 
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    /*--icon toggle of iconscout--*/
    icon.classList.toggle('uil-sun');
    icon.classList.toggle('uil-moon');

});

/*--for typed text--*/

var typed = new Typed('#element', {
  strings: ['Basil Skaria '],
  typeSpeed: 200,
  showCursor:false
});



        
        


