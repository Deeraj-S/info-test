// Function to generate a random alphanumeric string for the captcha
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate the captcha
function generateCaptcha() {
    const captchaContainer = document.getElementById('captcha');
    const captchaText = generateRandomString(6); // Change the length of the captcha as needed
    captchaContainer.textContent = captchaText;
}

// Function to check if the entered captcha is correct
function checkCaptcha() {
    const captchaText = document.getElementById('captcha').textContent;
    const userInput = document.getElementById('userInput').value;

    if (userInput === captchaText) {
        alert('Captcha is correct!');
        generateCaptcha(); // Regenerate a new captcha after successful verification
    } else {
        alert('Incorrect captcha. Please try again.');
    }
}

// Initial captcha generation on page load
generateCaptcha();
