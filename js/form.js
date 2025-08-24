function validateForm() {
    let fullNameInput = document.getElementById("full-name");
    let emailInput = document.getElementById("email");
    let birthdateInput = document.getElementById("birthdate");
    let genderMaleInput = document.getElementById("gender-male");
    let genderFemaleInput = document.getElementById("gender-female");
    let tncInput = document.getElementById("tnc");

    let errorElement = document.getElementById("error");

    let fullNameValue = fullNameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let birthdateValue = birthdateInput.value;

    errorElement.innerText = "";
    errorElement.style.color = "red";

    if(fullNameValue === "") {
        errorElement.innerText = "Please enter your full name.";
    }
    else if(emailValue === "") {
        errorElement.innerText = "Please enter your email address.";
    }
    else if (emailValue.indexOf("@") === -1) {
        errorElement.innerText = "Email must contain '@' character.";
    }
    else if (emailValue.indexOf(".") === -1) {
        errorElement.innerText = "Email must contain '.' character.";
    }
    else if(birthdateValue === "") {
        errorElement.innerText = "Please select your birthdate.";
    }
    else {
        let selectedDate = new Date(birthdateValue);
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            errorElement.innerText = "Birthdate cannot be in the future.";
        }
        else if(!genderMaleInput.checked && !genderFemaleInput.checked) {
            errorElement.innerText = "Please choose your gender.";
        }
        else if(!tncInput.checked) {
            errorElement.innerText = "Please accept the terms and conditions.";
        }
        else {
            errorElement.style.color = "green";
            errorElement.innerText = "Form submitted successfully!";

            fullNameInput.value = "";
            emailInput.value = "";
            birthdateInput.value = "";

            genderMaleInput.checked = false;
            genderFemaleInput.checked = false;

            tncInput.checked = false;
        }
    }
}