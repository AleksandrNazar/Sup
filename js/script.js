const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButton = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function(value) {
    value.addEventListener('click', function() {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');

        modal.querySelector('.modal-window').addEventListener('click', function(e) {
            e.stopPropagation();
        })
    })
})

modalCloseButton.forEach(function(value) {
    value.addEventListener('click', function() {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})

allModals.forEach(function(value) {
    value.addEventListener('click', function() {
        this.classList.add('hidden');
    })
})

