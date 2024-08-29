document.querySelectorAll('.entry-title').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        const content = button.nextElementSibling;
        content.classList.toggle('show', !expanded);
        const icon = button.querySelector('.toggle-icon');
        icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});

