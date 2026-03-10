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


const boxes = document.querySelectorAll(".value-box");

window.addEventListener("scroll", () => {
  boxes.forEach(box => {
    const position = box.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(position < screenHeight - 100){
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});
