// JavaScript for form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        // Simulate form submission
        document.getElementById('form-message').innerText = 'Thank you for contacting us, ' + name + '. We will get back to you soon!';
        document.getElementById('contact-form').reset(); // Clear the form
    }
});
