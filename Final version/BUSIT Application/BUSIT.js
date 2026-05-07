// Unified form validation helper
function validateFormInputs(form) {
    const inputs = form.querySelectorAll('input, textarea');
    const locationField = form.querySelector('#location');

    const allFilled = [...inputs].every(input => input.value.trim() !== '');
    const locationFilled = locationField ? locationField.value.trim() !== '' : true;

    return allFilled && locationFilled;
}

function attachFormSubmitHandler(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.addEventListener('submit', (event) => {
        if (!validateFormInputs(form)) {
            event.preventDefault();
            alert('Please fill in all required form fields.');
            return;
        }
        alert('Your request has been submitted successfully!');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    attachFormSubmitHandler('form[action="request_crops.php"]');
    attachFormSubmitHandler('form[action="submit_request.php"]');
});

// Function to start the VR simulation
document.addEventListener("DOMContentLoaded", function () {
    window.startVR = function () {
        const tutorial = document.getElementById("vr-tutorial");
        const simulation = document.getElementById("vr-scene");

        // Show tutorial first
        tutorial.style.display = "block";

        // After 4 seconds, hide tutorial and show interactive VR
        setTimeout(() => {
            tutorial.style.display = "none";
            console.log("Tutorial:", tutorial);
console.log("Simulation:", simulation);
            simulation.style.display = "block";
        }, 4000);
    };
});


//Sign up page
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Retrieve existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    const userExists = users.some(existingUser  => existingUser .username === username);
    if (userExists) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Add the new user to the array
    users.push(user);

    // Store the updated users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear the form
    document.getElementById('signupForm').reset();

    // Alert the user of successful sign-up
    alert('Sign-up successful!');
})