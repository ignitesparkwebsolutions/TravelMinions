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

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images div img');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('.carousel-images div').forEach(item => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    item.style.height = (screenHeight/2) + 'px';
    item.style.width = screenWidth + 'px';
});

document.querySelectorAll('.carousel-images div img').forEach(item => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    item.style.height = (screenHeight/2) + 'px';
    const elemWidth = document.querySelector('.carousel-images div img').width;
    if (screenWidth < elemWidth) {
        item.style.width = (screenWidth - 60) + 'px';
    }
    let marginVal = ((screenWidth - elemWidth)/2)-8;
    marginVal = (marginVal < 20) ? 20 : marginVal;
    item.style.margin = '0px ' + marginVal + 'px';
});

function autoMoveSlide() {
    moveSlide(1);
    setTimeout(() => {
        autoMoveSlide();
    }, 3000);
}

setTimeout(() => {
    autoMoveSlide();
}, 3000);