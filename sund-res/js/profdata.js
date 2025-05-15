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
   function loadProfile() {
      document.getElementById('nameDisplay').innerText = localStorage.getItem('profileName') || 'Belum diisi';
      document.getElementById('phoneDisplay').innerText = localStorage.getItem('profilePhone') || 'Belum diisi';
      document.getElementById('emailDisplay').innerText = localStorage.getItem('profileEmail') || 'Belum diisi';
    }

    function toggleEdit(field) {
      const display = document.getElementById(field + 'Display');
      const button = document.getElementById('edit' + capitalize(field) + 'Btn');

      if (button.innerText === 'Ubah') {
        const currentValue = display.innerText;
        display.innerHTML = `<input type="text" id="${field}Input" value="${currentValue === 'Belum diisi' ? '' : currentValue}" />`;
        button.innerText = 'Simpan';
      } else {
        const input = document.getElementById(field + 'Input').value.trim();
        if (input === '') {
          alert('Tidak boleh kosong');
          return;
        }
        localStorage.setItem(
          field === 'name' ? 'profileName' :
          field === 'phone' ? 'profilePhone' :
          'profileEmail',
          input
        );
        display.innerText = input;
        button.innerText = 'Ubah';
      }
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    window.onload = loadProfile;