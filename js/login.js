
    const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");


loginBtn.onclick = () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
};

signupBtn.onclick = () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
};

document.querySelectorAll(".togglePassword").forEach(icon=>{
  icon.onclick = ()=>{
    const target = document.getElementById(icon.dataset.target);
    target.type = target.type === "password" ? "text" : "password";
  };
});



loginForm.onsubmit = (e)=>{
  e.preventDefault();

  document.getElementById("loginMessage").innerText = "Login Successful! Redirecting...";

  setTimeout(()=>{
    window.location.href = "index.html";
  },1500);
};

signupForm.onsubmit = (e)=>{
  e.preventDefault();

  const pass = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("confirmPassword").value;

  if(pass.length < 6){
    document.getElementById("signupMessage").innerText = "Password must be at least 6 characters.";
    return;
  }

  if(pass !== confirm){
    document.getElementById("signupMessage").innerText = "Passwords do not match.";
    return;
  }

  document.getElementById("signupMessage").innerText = "Account Created Successfully!";
};


document.getElementById("darkToggle").onclick = ()=>{
  document.body.classList.toggle("dark");
};
