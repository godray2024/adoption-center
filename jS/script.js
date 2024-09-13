// Login Modal

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Get the modal element
  var loginModal = document.getElementById('loginModal');

  // Get the button that opens the modal
  var btn = document.getElementById('loginBtn'); // Assuming you have a button with this ID to open the modal

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    $(loginModal).modal('show');
  };

  // Handle the "Login" button click
  var loginBtn = loginModal.querySelector('.btn-primary');
  loginBtn.onclick = function () {
    // You can add your login logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Store the login information in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the form fields after submission
    document.querySelector('form').reset();

    // Close the modal
    $(loginModal).modal('hide');
  };
});

