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

function filterPosts(category) {
  const posts = document.querySelectorAll(".blog-card");

  posts.forEach(post => {
    if (category === "all" || post.dataset.category === category) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const posts = document.querySelectorAll(".blog-card");

  posts.forEach(post => {
    const title = post.querySelector("h3").textContent.toLowerCase();
    post.style.display = title.includes(value) ? "block" : "none";
  });
});