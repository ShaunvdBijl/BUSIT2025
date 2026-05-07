// Unified form validation helper
function validateFormInputs(form) {
    const inputs = form.querySelectorAll('input, textarea');
    const locationField = form.querySelector('#location');

    const allFilled = [...inputs].every(input => input.value.trim() !== '');
    const locationFilled = locationField ? locationField.value.trim() !== '' : true;

    return allFilled && locationFilled;
}

function showFieldError(input, message) {
    const errorEl = document.createElement('span');
    errorEl.className = 'field-error';
    errorEl.textContent = message;
    input.insertAdjacentElement('afterend', errorEl);
}

function clearFieldErrors(form) {
    const existingErrors = form.querySelectorAll('.field-error');
    existingErrors.forEach(error => error.remove());
}

function getFirstInvalidField(form) {
    const inputs = [...form.querySelectorAll('input, textarea')];
    return inputs.find(input => input.value.trim() === '') || null;
}

function attachFormSubmitHandler(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.addEventListener('submit', (event) => {
        clearFieldErrors(form);

        const invalidField = getFirstInvalidField(form);
        if (invalidField) {
            event.preventDefault();
            showFieldError(invalidField, 'Please fill in this field.');
            invalidField.focus();
            return;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    attachFormSubmitHandler('form[action="request_crops.php"]');
    attachFormSubmitHandler('form[action="submit_request.php"]');
});

const VR_TUTORIAL_DURATION_MS = 4000;

function startVrSimulation() {
    const vrTutorialElement = document.getElementById('vr-tutorial');
    const vrSceneElement = document.getElementById('vr-scene');

    vrTutorialElement.style.display = 'block';

    setTimeout(() => {
        vrTutorialElement.style.display = 'none';
        vrSceneElement.style.display = 'block';
    }, VR_TUTORIAL_DURATION_MS);
}

document.addEventListener('DOMContentLoaded', () => {
    window.startVrSimulation = startVrSimulation;
});


//Sign up page
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new user record
    const newUserRecord = { username, email, password };

    // Retrieve registered users from local storage
    let registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    const isUsernameTaken = registeredUsers.some(
        existingUser => existingUser.username === username
    );
    if (isUsernameTaken) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Add the new user to the array
    registeredUsers.push(newUserRecord);

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(registeredUsers));

    // Clear the form
    document.getElementById('signupForm').reset();

    // Alert the user of successful sign-up
    alert('Sign-up successful!');
})