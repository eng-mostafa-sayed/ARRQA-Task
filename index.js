function toggleNav() {
  var nav = document.getElementById("nav");
  nav.classList.add("scrolled");
}

window.addEventListener("scroll", toggleNav);
