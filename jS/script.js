// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Get the modal element
  var contactModal = document.getElementById('contactModal');

  // Get the button that opens the modal
  var btn = document.getElementById('contactBtn'); // Assuming you have a button with this ID to open the modal

  // When the user clicks the button, open the modal
  btn.onclick = function () {
      $(contactModal).modal('show');
  };

  // Handle the "Send Message" button click
  var sendMessageBtn = contactModal.querySelector('.btn-primary');
  sendMessageBtn.onclick = function () {
      // You can add your form submission logic here
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      // Log the values to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Clear the form fields after submission
      document.querySelector('form').reset();

      // Close the modal
      $(contactModal).modal('hide');
  };
});