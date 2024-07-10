/// <reference types="../@types/jquery" />
const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');
const signUpRadio = document.getElementById('sign-up-radio');
const signInRadio = document.getElementById('sign-in-radio');
  const username = usernameInput.value;
  const password = passwordInput.value;

// Function to toggle password visibility
function togglePasswordVisibility() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

showPasswordCheckbox.addEventListener('change', togglePasswordVisibility);

$('button[type="submit"]').on("click", function(e) {
  e.preventDefault();
  console.log("Button clicked");

    if ($(signUpRadio).prop("checked") && usernameInput.value !== "" && passwordInput.value !== "") {
    // Sign Up scenario
    localStorage.setItem('name', usernameInput.value);
    localStorage.setItem('pass', passwordInput.value);
    $('.alert').addClass('d-none');
    window.location.href = `signin.html`;
  } else if (usernameInput.value === "" || passwordInput.value === "") {
    // Empty fields scenario
    $('.alert').removeClass('d-none');
    console.log('Empty fields');
  } else if ($(signInRadio).prop("checked") && usernameInput.value !== "" && passwordInput.value !== "") {
    // Sign In scenario
    const storedName = localStorage.getItem('name');
    const storedPass = localStorage.getItem('pass');
    if (storedName === usernameInput.value && storedPass === passwordInput.value) {
      window.location.href = `signin.html`;
      $('#welcome-message').text(`Welcome, ${storedName}!`)
    } else {
      alert("Wrong username or password");
    }
  }
});





