var  nav = document.getElementById('navb');
    window.onscroll = function(){

    if (window.pageYOffset >100) {

    nav.style.background = "#3A3737";
    }
    else{
    nav.style.background = "transparent";
    }
}

const checkpoint = 300;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".contenedor-gif-logo-rgl").style.opacity = opacity;
});