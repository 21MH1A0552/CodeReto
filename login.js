const users = [{ email: "test@example.com", password: "password123" }];

document.getElementById("signupForm").onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    users.push({ email, password });
    alert("Signup successful! Please check your email for verification.");
    window.location.href = "login.html";
};