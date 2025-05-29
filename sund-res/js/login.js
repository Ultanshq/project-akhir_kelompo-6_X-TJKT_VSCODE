document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const username = document.getElementById('username').value.trim();

 
  window.location.href = 'dashboard-sund_res.html';
});
 document.addEventListener('DOMContentLoaded', function() {
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
        
        // Social login button functionality
        document.querySelectorAll('.social-login-btn').forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent.trim();
            alert(`Anda memilih login dengan ${platform}`);
            // Here you would normally redirect to the social login
          });
        });
      });
