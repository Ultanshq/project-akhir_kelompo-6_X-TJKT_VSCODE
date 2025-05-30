// Initialize feather icons
    document.addEventListener('DOMContentLoaded', function() {
        // Replace feather icons if available
        if (typeof feather !== "undefined") {
            feather.replace();
        }

        // Toggle dropdown menu in navbar
        const menuButton = document.getElementById("menu-button");
        const dropdown = document.getElementById("dropdown");

        if (menuButton && dropdown) {
            menuButton.addEventListener("click", (e) => {
                e.stopPropagation();
                dropdown.classList.toggle("show");
                menuButton.classList.toggle("active");
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", function(event) {
                if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
                    dropdown.classList.remove("show");
                    menuButton.classList.remove("active");
                }
            });
        }

        // Sidebar navigation
        const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
        const sections = document.querySelectorAll('.settings-section');

        if (sidebarLinks.length > 0 && sections.length > 0) {
            sidebarLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    // Remove 'active' from all links and sections
                    sidebarLinks.forEach(l => l.classList.remove('active'));
                    sections.forEach(section => section.classList.remove('active'));

                    // Add 'active' to clicked link
                    link.classList.add('active');

                    // Show corresponding section
                    const sectionId = link.getAttribute('data-section') + '-section';
                    const activeSection = document.getElementById(sectionId);
                    if (activeSection) {
                        activeSection.classList.add('active');
                        
                        // Store the active section in localStorage
                        localStorage.setItem('activeSettingsSection', sectionId);
                    }
                });
            });

            // Check for saved active section
            const savedSection = localStorage.getItem('activeSettingsSection');
            if (savedSection) {
                const savedLink = document.querySelector(`.sidebar-menu a[data-section="${savedSection.replace('-section', '')}"]`);
                if (savedLink) {
                    savedLink.click();
                }
            }
        }

        // Form handlers with validation
        const handleFormSubmit = (formId, successMessage) => {
            const form = document.getElementById(formId);
            if (form) {
                form.addEventListener("submit", function(e) {
                    e.preventDefault();
                    
                    // Simple form validation
                    let isValid = true;
                    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
                    
                    requiredInputs.forEach(input => {
                        if (!input.value.trim()) {
                            input.style.borderColor = 'var(--danger-color)';
                            isValid = false;
                        } else {
                            input.style.borderColor = '';
                        }
                    });

                    if (isValid) {
                        // In a real app, you would send data to server here
                        alert(successMessage);
                    } else {
                        alert('Please fill in all required fields.');
                    }
                });
            }
        };

        // Initialize form handlers
        handleFormSubmit("profile-form", "Profile changes saved successfully.");
        handleFormSubmit("notifications-form", "Notification preferences updated.");
        handleFormSubmit("security-form", "Security settings updated.");
        handleFormSubmit("appearance-form", "Appearance preferences saved.");
        handleFormSubmit("language-form", "Language settings updated.");
        handleFormSubmit("privacy-form", "Privacy preferences saved.");

        // Dark mode toggle functionality
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const darkModeStatus = document.getElementById('dark-mode-status');
        
        if (darkModeToggle && darkModeStatus) {
            // Check for saved preference
            const savedDarkMode = localStorage.getItem('darkMode') === 'true';
            
            // Apply saved preference
            if (savedDarkMode) {
                document.body.classList.add('dark-mode');
                darkModeToggle.checked = true;
                darkModeStatus.textContent = 'Enabled';
            }
            
            // Toggle dark mode
            darkModeToggle.addEventListener('change', function() {
                document.body.classList.toggle('dark-mode');
                const isDarkMode = document.body.classList.contains('dark-mode');
                darkModeStatus.textContent = isDarkMode ? 'Enabled' : 'Disabled';
                
                // Save preference
                localStorage.setItem('darkMode', isDarkMode);
            });
        }

        // Theme selector functionality
        const themeOptions = document.querySelectorAll('.theme-option');
        if (themeOptions.length > 0) {
            // Check for saved theme
            const savedTheme = localStorage.getItem('theme');
            
            // Apply saved theme
            if (savedTheme) {
                document.querySelector(`.theme-option[data-theme="${savedTheme}"]`)?.classList.add('active');
            }
            
            // Handle theme selection
            themeOptions.forEach(option => {
                option.addEventListener('click', function() {
                    themeOptions.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    
                    const theme = this.getAttribute('data-theme');
                    localStorage.setItem('theme', theme);
                    
                    // In a real app, you would apply the theme here
                    console.log(`Theme changed to ${theme}`);
                });
            });
        }

        // Logout button functionality
        const logoutSection = document.getElementById('logout-section');
        if (logoutSection) {
            const logoutBtn = logoutSection.querySelector('.btn-primary');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (confirm('Are you sure you want to logout?')) {
                        // In a real app, you would handle logout here
                        alert('You have been logged out.');
                        window.location.href = 'landing-page.html';
                    }
                });
            }
        }

        // Delete account button functionality
        const deleteAccountBtn = document.querySelector('.btn-outline i.fa-trash')?.closest('button');
        if (deleteAccountBtn) {
            deleteAccountBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                    // In a real app, you would handle account deletion here
                    alert('Your account has been scheduled for deletion.');
                }
            });
        }
    });
