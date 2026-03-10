function toggleTheme(){
  document.body.classList.toggle("dark");
}
 if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  } else{
    localStorage.setItem("theme","light");
  }



window.onload = function(){
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
  }
}
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);