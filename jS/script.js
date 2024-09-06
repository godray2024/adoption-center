// Get modal element
const loginModal = document.getElementById('loginModal');
// Get login button
const loginBtn = document.getElementById('loginBtn');
// Get close button
const closeBtn = document.querySelector('.close');
// Get form and input
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const errorElement = document.getElementById('error');

// Show modal when login button is clicked
loginBtn.addEventListener('click', function () {
  loginModal.style.display = 'block';
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', function () {
  loginModal.style.display = 'none';
});

// Close modal if clicked outside of the modal content
window.addEventListener('click', function (e) {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Handle login form submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (username === '') {
    errorElement.textContent = 'Please enter a username.';
  } else {
    errorElement.textContent = '';
    alert('Welcome, ' + username + '!');
    loginModal.style.display = 'none';
  }
});
