// Example form validation function
function validateForm() {
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var name = document.getElementById('name').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Date validation (example: must be after today)
    var today = new Date();
    var inputDate = new Date(date);
    if (inputDate <= today) {
        alert('Please enter a date in the future.');
        return false;
    }

    // Name validation (example: only alphabets and spaces)
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name (only alphabets and spaces).');
        return false;
    }

    return true;
}
