function match(input) {
    if (input.value != document.getElementById('password').value) {
        input.setCustomValidity('Password must match.');
    } else {
        input.setCustomValidity('');
    }
}
function pwd(input) {
    if (input.value.includes(' ')) {
        input.setCustomValidity('Must not contain spaces.');
    } else if (input.value.length < 6) {
        input.setCustomValidity('Minimum length is 6 characters.');
    } else {
        input.setCustomValidity('');
    }
}
