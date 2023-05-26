let signupForm = document.getElementById("signup-form");
document.getElementById.textContent = signupForm

function validateRegistration(fullName, email, password, confirmPassword) {
  // Check if full name is empty
  if (fullName.trim() === '') {
    return 'Full name is required.';
  }

  // Check if email is empty or invalid format
  if (email.trim() === '') {
    return 'Email is required.';
  }
  if (!isValidEmail(email)) {
    return 'Invalid email format.';
  }

  // Check if password is empty or less than 8 characters
  if (password === '') {
    return 'Password is required.';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  // Check if confirm password matches password
  if (confirmPassword === '') {
    return 'Please confirm your password.';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }

  // All validations passed
  return 'Registration successful!';
}

// Helper function to validate email format using regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Example usage:
const fullName = 'Olufisayo Israel';
const email = 'deyw1055@gmail.com';
const password = 'password123';
const confirmPassword = 'password123';

const validationMessage = validateRegistration(fullName, email, password, confirmPassword);
console.log(validationMessage);
