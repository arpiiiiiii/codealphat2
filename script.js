function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function generateCaptcha() {
  const captchaText = generateRandomString(6);
  document.getElementById('captchaText').textContent = captchaText;
}

function validateCaptcha() {
  const userInput = document.getElementById('userInput').value;
  const captchaText = document.getElementById('captchaText').textContent;
  
  if (userInput === captchaText) {
    alert('CAPTCHA verification successful!');
    generateCaptcha(); // Generate a new CAPTCHA
  } else {
    alert('CAPTCHA verification failed. Please try again.');
  }
}
  
// Generate initial CAPTCHA on page load
generateCaptcha();
