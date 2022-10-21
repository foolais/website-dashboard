const nav = document.querySelector("nav")
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")
const themeToogle = document.querySelector(".theme-toogle")

menuBtn.addEventListener("click", () => {
  nav.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  nav.style.display = "none"
})

themeToogle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables")

  themeToogle.querySelector("span").classList.toggle("active")
})
