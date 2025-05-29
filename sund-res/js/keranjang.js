document.addEventListener('DOMContentLoaded', function() {
      feather.replace();
      
// Initialize Feather Icons
        feather.replace();
        
        // Navbar dropdown functionality
        const menuButton = document.getElementById('menu-button');
        const dropdown = document.getElementById('dropdown');
        
        if (menuButton && dropdown) {
          menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('show');
          });
          
          // Close dropdown when clicking outside
          document.addEventListener('click', function(e) {
            if (!menuButton.contains(e.target) && !dropdown.contains(e.target)) {
              dropdown.classList.remove('show');
            }
          });
        }
      // Modal functionality
      const modal = document.getElementById('foodModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalImage = document.getElementById('modalImage');
      const modalPrice = document.getElementById('modalPrice');
      const closeModal = document.getElementById('closeModal');
      const orderNowBtn = document.getElementById('orderNow');
      const addToCartBtn = document.getElementById('addToCart');

      // Card click handlers
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Get data from the clicked card
          const title = this.querySelector('h3').textContent;
          const price = this.querySelector('.harga').textContent;
          const imageSrc = this.querySelector('img').src;
          
          // Set modal content
          modalTitle.textContent = title;
          modalPrice.textContent = price;
          modalImage.src = imageSrc;
          
          // Show modal and overlay
          overlay.style.display = 'block';
          modal.style.display = 'block';
          setTimeout(() => {
            modal.classList.add('active');
          }, 10);
          
          // Store current item data in modal for later use
          modal.dataset.title = title;
          modal.dataset.price = price.replace(/\D/g, ''); // Get numeric price only
          modal.dataset.image = imageSrc;
        });
      });

      // Close modal
      function closeModalFunc() {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
          overlay.style.display = 'none';
        }, 300);
      }

      closeModal.addEventListener('click', closeModalFunc);
      overlay.addEventListener('click', closeModalFunc);

      // Order Now button
      orderNowBtn.addEventListener('click', function() {
        const title = modal.dataset.title;
        const price = modal.dataset.price;
        const image = modal.dataset.image;
        window.location.href = `pesan.html?nama=${encodeURIComponent(title)}&harga=${price}&gambar=${encodeURIComponent(image)}`;
        closeModalFunc();
      });

      // Add to Cart button
      addToCartBtn.addEventListener('click', function() {
        alert('Item ditambahkan ke keranjang!');
        closeModalFunc();
      });

      // Initialize feather icons when modal is shown
      modal.addEventListener('shown.bs.modal', function() {
        feather.replace();
      });
    });

    function goToPembayaran(nama, harga, gambar) {
      window.location.href = `pesan.html?nama=${encodeURIComponent(nama)}&harga=${harga}&gambar=${encodeURIComponent(gambar)}`;
      return false;
    }