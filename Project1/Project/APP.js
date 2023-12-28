document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let counter = 1;

    function slide() {
        slider.style.transform = `translateX(${-counter * 100}%)`;
        counter++;
        if (counter === document.querySelectorAll('.slide').length) {
            counter = 0;
        }
    }

    setInterval(slide, 3000); 
});


function PasswordChecker() {
    password = document.getElementById("passwords").value;
    passwordconfirm = document.getElementById("passwordconfirm").value;
    passwordConfirmText = document.getElementById("passwordConfirmText");
    passwordLevel = document.getElementById("passwordLevel");

    if (password.length >= 8) {
        passwordLevel.innerText = "ძლიერი";
        passwordLevel.style.color = "green";
    } else if (password.length >= 5) {
        passwordLevel.innerText = "საშუალო";
        passwordLevel.style.color = "orange";
    } else {
        passwordLevel.innerText = "სუსტი ";
        passwordLevel.style.color = "red";
    }

    if (password === passwordconfirm) {
        passwordConfirmText.innerText = "პაროლები ემთხვევა";
        passwordConfirmText.style.color = "green";
    } else {
        passwordConfirmText.innerText = "პაროლები არ ემთხვევა";
        passwordConfirmText.style.color = "red";
    }
}

function GmailChecker() {
    var emailInput = document.getElementById("Gmail");
    var validateMail = document.getElementById("ValideMail");

    if (emailInput.value.includes("@gmail.com")) {
        validateMail.innerText = "Valid email";
        validateMail.style.color = "green";
    } else {
        validateMail.innerText = "Invalid email";
        validateMail.style.color = "red";
    }
}



