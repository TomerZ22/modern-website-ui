// JavaScript to toggle dropdowns on click
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = button.parentElement.nextElementSibling;
            dropdown.classList.toggle('show');

            // Toggle aria-expanded attribute for accessibility
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // Close dropdowns if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-item-dropdown')) {
            const dropdowns = document.querySelectorAll('.dropdown-content.show');
            dropdowns.forEach(dd => dd.classList.remove('show'));

            // Reset aria-expanded attributes
            dropdownButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        }
    });


});