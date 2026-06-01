
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    const mobileMenuButton = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');

    // Toggle dropdown menus
    dropdownButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = button.parentElement.nextElementSibling;
            dropdown.classList.toggle('show');
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // Close dropdowns if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-item-dropdown')) {
            document.querySelectorAll('.dropdown-content.show').forEach(dd => dd.classList.remove('show'));
            dropdownButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        }
    });

    // Mobile menu toggle
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mainMenu.classList.toggle('open');
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Keyboard focus for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-focus');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-focus');
    });
});
