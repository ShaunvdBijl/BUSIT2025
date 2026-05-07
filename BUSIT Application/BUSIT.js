// Function to validate form inputs
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            alert(`Please fill out the ${input.previousElementSibling.innerText}`);
        }
    });

    return isValid;
}

// Event listener for the Request Crop Advice form
document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.querySelector('form[action="request_crops.php"]');
    
    if (requestForm) {
        requestForm.addEventListener('submit', (event) => {
            if (!validateForm(requestForm)) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                alert('Your request has been submitted successfully!');
            }
        });
    }
});

   // Event listener for the Request Crop Advice form
document.addEventListener('DOMContentLoaded', () => {
    const requestForm = document.querySelector('form[action="submit_request.php"]');
    
    if (requestForm) {
        requestForm.addEventListener('submit', (event) => {
            if (!validateForm(requestForm)) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                alert('Your request has been submitted successfully!');
            }
        });
    }
});

// Dummy validation function (you can replace this with your real validation)
function validateForm(form) {
    const location = form.querySelector('#location');
    return location && location.value.trim() !== '';
}

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