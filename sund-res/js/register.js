document
  .getElementById("RegisForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Nomor Telepon hanya boleh angka!");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Email harus berakhiran @gmail.com");
      return;
    }

    window.location.href = "dashboard-sund_res.html";
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
