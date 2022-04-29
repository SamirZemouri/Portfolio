const icons = document.querySelector('.icon');
let navbar = document.querySelector(".open-bg")

icons.addEventListener('click', (event) => {
  icons.classList.toggle("open");

  // ----------- background nav de la même couleur que le menu déroulé. ----------- //

  // if ((navbar.style.background == 'transparent') || (navbar.style.background == '')) {
  //   navbar.style.background = '#fff';
  //   console.log("toto");

  // }
  // else if (navbar.style.background == 'rgb(255, 255, 255)') {
  //   navbar.style.background = 'transparent';
  //   console.log("coucou");
  // }

});

// const hovery = document.querySelectorAll(".hover");
// console.log(hovery);

// hovery.forEach(elements => {

//   elements.addEventListener('mouseenter', e => {
//     console.log(elements);
//     elements.style.background = 'linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6)), url(./assets/Images/Projet_Restaurant.png)';

//   })

//   elements.addEventListener('mouseleave', e => {
//     elements.style.background = 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0)), url(./assets/Images/Projet_Restaurant.png)';

//   })
  
// })
