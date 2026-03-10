toggleBtn.onclick = () => {
  sidebar.classList.toggle("active");
};


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});


document.getElementById("orderSearch").addEventListener("keyup", function(){
  let value = this.value.toLowerCase();
  let rows = document.querySelectorAll("#orderTable tr");

  rows.forEach(row=>{
    row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
  });
});


const modal = document.getElementById("productModal");
document.getElementById("openModal").onclick = ()=> modal.style.display="flex";
document.getElementById("closeModal").onclick = ()=> modal.style.display="none";


document.getElementById("addProduct").onclick = function(){
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const stock = document.getElementById("productStock").value;

  const container = document.getElementById("productContainer");

  const card = document.createElement("div");
  card.className="product-card";
  card.innerHTML=`
    <img src="https://images.unsplash.com/photo-1605478904038-2c2c1b6a4d3b">
    <h4>${name}</h4>
    <p>₹${price}</p>
    <span>Stock: ${stock}</span>
    <div>
      <button class="btn">Edit</button>
      <button class="btn">Delete</button>
    </div>
  `;
  container.appendChild(card);
  modal.style.display="none";
};


document.getElementById("darkMode").onclick = ()=>{
  document.body.classList.toggle("dark");
};
document.addEventListener("DOMContentLoaded", function(){

  const ctx = document.getElementById("salesChart");

  if(!ctx) return; 

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      datasets: [{
        label: "Sales (₹)",
        data: [1200,1900,3000,2500,2200,3200,4100],
        backgroundColor: "#8b5e3c"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

});

