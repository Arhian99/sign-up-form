

let firstName = document.getElementById('f-name');
let lastName = document.getElementById('l-name');
let email = document.getElementById('email');
let telephone = document.getElementById('tel');
let password = document.getElementById('pwd');
let confPassword = document.getElementById('conf-pwd');
let signupForm = document.getElementById('signup-form');

let formControls = [
    firstName,
    lastName,
    email,   
    telephone, 
    password, 
    confPassword,
];


signupForm.addEventListener('submit', (Event) => {
    let pwd = document.getElementById('pwd').value;
    let confPwd = document.getElementById('conf-pwd').value;


    if (!signupForm.reportValidity()) {
        Event.preventDefault();
    }

    else if (pwd != confPwd) {
        showError();
    }

    else {for (let control of formControls) {
        control.classList.remove('error-border');
        control.setCustomValidity('');
        control.reportValidity();
    }}
});


for (let control of formControls) {
    control.addEventListener('invalid', showError);
};

function showError(Event) {
    let targetId = Event.target.id;
    let targetName = document.querySelector(`[for=${targetId}]`).textContent;
    let targetNameLC = targetName.toLowerCase();
    let pwd = document.getElementById('pwd').value;
    let confPwd = document.getElementById('conf-pwd').value;

    if (this.validity.valueMissing) {
        this.classList.add('error-border')
        this.setCustomValidity(`This is a required field. Please enter your ${targetNameLC}`);
    }

    else if (this.validity.patternMismatch) {
        this.classList.add('error-border');
        if (targetId == 'f-name' || targetId == 'l-name') {
            this.setCustomValidity(`You entered an invalid character. Only letters in the Roman alphabet (A-Z), spaces and - allowed in the ${targetNameLC} field.`);
        }

        else if (targetId == 'tel') {
            this.classList.add('error-border')
            this.setCustomValidity(`Only number characters allowed in the ${targetNameLC} field`);
        }

        else if (targetId == 'pwd') {
            this.classList.add('error-border');
            this.setCustomValidity(`Your ${targetNameLC} must be:
            - Between 8 and 15 characters.
            - Contain at least one uppercase letter.
            - Contain at least one lowercase letter.
            - Contain at least one number.
            - Contain at least one special character (!@#$%^&*).`);
        }
    }

    else if(this.validity.typeMismatch) {
        this.classList.add('error-border');
        this.setCustomValidity(`Please enter a valid ${targetNameLC}, eg: robertoperez@email.edu`);
    }

    else if(this.validity.tooLong || this.validity.tooShort) {
        this.classList.add('error-border');
        this.setCustomValidity(`Please enter a 10-digit ${targetNameLC} eg: 1234567890`);
    }

    else if(targetId == 'conf-pwd' && pwd != confPwd) {
        this.classList.add('error-border');
        this.setCustomValidity(`Please confirm your password.`);
    }

    else {
        this.classList.remove('error-border');
        this.setCustomValidity('');
    };
}

function checkError(Event) {
    let targetId = Event.target.id;
    let targetName = document.querySelector(`[for=${targetId}]`).textContent;
    let targetNameLC = targetName.toLowerCase();
    let pwd = document.getElementById('pwd').value;
    let confPwd = document.getElementById('conf-pwd').value;

    if (this.validity.valueMissing) {
        this.classList.add('error-border')
        this.setCustomValidity(`This is a required field. Please enter your ${targetNameLC}`);
        this.reportValidity();
    }

    else if (this.validity.patternMismatch) {
        this.classList.add('error-border');
        if (targetId == 'f-name' || targetId == 'l-name') {
            this.setCustomValidity(`You entered an invalid character. Only letters in the Roman alphabet (A-Z), spaces and - allowed in the ${targetNameLC} field.`);
            this.reportValidity();
        }

        else if (targetId == 'tel') {
            this.setCustomValidity(`Only number characters allowed in the ${targetNameLC} field`);
            this.reportValidity();
        }

        else if (targetId == 'pwd') {
            this.setCustomValidity(`Your ${targetNameLC} must be:
            - Between 8 and 20 characters.
            - Contain at least one uppercase letter.
            - Contain at least one lowercase letter.
            - Contain at least one number.
            - Contain at least one special character (!@#$%^&*).`);
            this.reportValidity();
        }
    }

    else if(this.validity.typeMismatch) {
        this.classList.add('error-border');
        this.setCustomValidity(`Please enter a valid ${targetNameLC}, eg: robertoperez@email.edu`);
        this.reportValidity();
    }

    else if(this.validity.tooLong || this.validity.tooShort) {
        this.classList.add('error-border');
        this.setCustomValidity(`Please enter a 10-digit ${targetNameLC} eg: 1234567890`);
        this.reportValidity();
    }

    else if(targetId == 'conf-pwd' && pwd != confPwd) {
        this.classList.add('error-border');
        this.setCustomValidity(`Please confirm your password.`);
        this.reportValidity();
    }

    else {
        this.classList.remove('error-border');
        this.setCustomValidity('');
        this.reportValidity();
    }
}

for (let control of formControls) {
    control.addEventListener('input', checkError);
}
