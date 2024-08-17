document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (event) => {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            event.preventDefault();
        }
    });
});
