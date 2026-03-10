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
  const reveals = document.querySelectorAll(
    ".reveal, .slide-left, .slide-right"
  );

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);