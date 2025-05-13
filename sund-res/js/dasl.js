document.getElementById("search-icon").addEventListener("click", function () {
  const query = document.getElementById("search-box").value.toLowerCase().trim();

  if (!query) {
    alert("Silakan masukkan kata kunci pencarian.");
    return;
  }

  const cards = document.querySelectorAll(".kotak-mknn");
  let ditemukan = false;

  cards.forEach((card) => {
    const nama = card.querySelector("h3").textContent.toLowerCase().trim();

    // Cek apakah nama makanan diawali dengan query
    if (nama.startsWith(query)) {
      card.style.display = "block";
      ditemukan = true;
    } else {
      card.style.display = "none";
    }
  });

  if (!ditemukan) {
    alert("Tidak ada makanan yang cocok dengan pencarian.");
  }
});

// Toggle menu burger
const menuIcon = document.getElementById("menu-icon");
const dropdown = document.getElementById("dropdown");

menuIcon.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
});

// Tutup dropdown jika klik di luar menu
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
