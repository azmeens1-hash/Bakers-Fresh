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



let slideIndex=0;
const slides=document.getElementById("slideTrack");
const totalSlides=slides.children.length;

setInterval(()=>{
  slideIndex=(slideIndex+1)%totalSlides;
  slides.style.transform=`translateX(-${slideIndex*100}%)`;
},3000);


const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  const update=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText;
    const inc=target/100;

    if(count<target){
      counter.innerText=Math.ceil(count+inc);
      setTimeout(update,20);
    } else{
      counter.innerText=target;
    }
  };
  update();
});
function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".reveal, .slide-left, .slide-right"
  );

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
