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

