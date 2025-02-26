const toggleButton = document.getElementById('toggle-contact');
const optionsContainer = document.getElementById('contact-options');
let isOpen = false;

toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
        optionsContainer.classList.remove('hidden');
        // Add animation for fade in
        setTimeout(() => {
            optionsContainer.querySelector('.bg-black').classList.add('opacity-50');
            optionsContainer.querySelector('.modal-content').classList.add('opacity-100');
        }, 50);
    } else {
        closeModal();
    }
});

// Close modal function
function closeModal() {
    isOpen = false;
    optionsContainer.classList.add('hidden');
    optionsContainer.querySelector('.bg-black').classList.remove('opacity-50');
    optionsContainer.querySelector('.modal-content').classList.remove('opacity-100');
}

// Close when clicking outside
document.addEventListener('click', (event) => {
    const contactButton = document.getElementById('contact-button');
    if (!contactButton.contains(event.target) && isOpen) {
        closeModal();
    }
});

// Close on escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) {
        closeModal();
    }
});