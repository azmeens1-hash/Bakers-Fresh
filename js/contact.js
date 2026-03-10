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
 const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){
  e.preventDefault();
  let valid = true;

  const fields = ["name","email","subject","message"];

  fields.forEach(id=>{
    const field = document.getElementById(id);
    const error = field.nextElementSibling;

    if(field.value.trim()===""){
      error.textContent="This field is required";
      valid=false;
    } else {
      error.textContent="";
    }
  });

  const email=document.getElementById("email");
  const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(!email.value.match(pattern)){
    email.nextElementSibling.textContent="Enter valid email";
    valid=false;
  }

  if(valid){
    successMessage.textContent="Message sent successfully!";
    form.reset();
  }
});

const faders=document.querySelectorAll(".fade-in");

window.addEventListener("scroll",()=>{
  faders.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("show");
    }
  });
});