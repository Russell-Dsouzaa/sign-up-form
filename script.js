let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let inputBox = document.querySelector(".password-check");

for (const i of [password, confirmPassword]) {
    i.addEventListener("input", (event) => {
        if (password.value != confirmPassword.value) {
            password.setCustomValidity("*Passwords do not match");
            confirmPassword.setCustomValidity("no");
            inputBox.setAttribute("data-error", "*Passwords do not match");
        }
        else {
            password.setCustomValidity("");
            confirmPassword.setCustomValidity("");
            inputBox.removeAttribute("data-error");
        }
    });
}