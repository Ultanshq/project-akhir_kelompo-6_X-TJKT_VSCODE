document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const username = document.getElementById('username').value.trim();

 
  window.location.href = 'dashboard-sund_res.html';
});
const menuIcon = document.getElementById("menu-icon");
const dropdown = document.getElementById("dropdown");

menuIcon.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
