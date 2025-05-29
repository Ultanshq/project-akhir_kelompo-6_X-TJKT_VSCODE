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

  // Comment modal functionality
  const modal = document.getElementById('comment-modal');
  const openBtn = document.getElementById('open-comment');
  const closeBtn = document.getElementById('close-comment');
  const commentForm = document.getElementById('comment-form');
  const commentsContainer = document.getElementById('existing-comments');

  if (modal && openBtn && closeBtn) {
    // Function to create new comment element
    function createCommentElement(name, comment) {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment-card';
      commentElement.innerHTML = `
        <h4>${name}</h4>
        <p>"${comment}"</p>
      `;
      return commentElement;
    }

    openBtn.addEventListener('click', function() {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });

    if (commentForm && commentsContainer) {
      commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        
        if (name && comment) {
          // Create new comment
          const newComment = createCommentElement(name, comment);
          
          // Add to top of comments list
          commentsContainer.prepend(newComment);
          
          // Reset form and close modal
          commentForm.reset();
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
          
          // Show success message
          alert('Komentar Anda telah ditambahkan!');
        } else {
          alert('Harap isi semua field!');
        }
      });
    }
  }

  // Login recommendation close functionality
  const closeRec = document.querySelector('.close-recommendation');
  const loginRec = document.querySelector('.login-recommendation');
  
  if (closeRec && loginRec) {
    closeRec.addEventListener('click', function() {
      loginRec.style.display = 'none';
      document.querySelector('.buat-mesan').style.marginTop = '0';
    });
  }
});