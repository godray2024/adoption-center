// Contact Form

document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form element
    var contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      // Handle the form submission
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
      
        // Get the form data
        var name = document.getElementById('contactName').value;
        var email = document.getElementById('contactEmail').value;
        var message = document.getElementById('contactMessage').value;
      
        // Store the contact information in local storage
        localStorage.setItem('contactName', name);
        localStorage.setItem('contactEmail', email);
        localStorage.setItem('contactMessage', message);
      
        // Log the values to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
      
        // Clear the form fields after submission
        contactForm.reset();
      });
    }
});