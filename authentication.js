
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCq5bSK2E53GfhLytCpF2c_tPragUAWpKc",
        authDomain: "form-auth-b56ff.firebaseapp.com",
        projectId: "form-auth-b56ff",
        storageBucket: "form-auth-b56ff.appspot.com",
        messagingSenderId: "778245173187",
        appId: "1:778245173187:web:ead57214da96bfc6dad776"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    // Register form submission
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const identifier = document.getElementById('register-identifier').value;
        const password = document.getElementById('register-password').value;

        if (validateEmail(identifier)) {
            createUserWithEmailAndPassword(auth, identifier, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Account created successfully!");
                    // Log the user in immediately after registration
                    return signInWithEmailAndPassword(auth, identifier, password);
                })
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Logged in successfully!");
                    // Redirect to index.html
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Error: " + errorMessage);
                });
        } else {
            // Phone number authentication
            const phoneNumber = identifier;
            const appVerifier = new RecaptchaVerifier('register-form', {
                'size': 'invisible',
                'callback': function (response) {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                }
            }, auth);

            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    const verificationCode = window.prompt('Please enter the verification code that was sent to your mobile device.');
                    return confirmationResult.confirm(verificationCode);
                })
                .then((result) => {
                    const user = result.user;
                    alert("Logged in successfully!");
                    // Redirect to index.html
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Error: " + errorMessage);
                });
        }
    });

    // Login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const identifier = document.getElementById('login-identifier').value;
        const password = document.getElementById('login-password').value;

        if (validateEmail(identifier)) {
            signInWithEmailAndPassword(auth, identifier, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Logged in successfully!");
                    // Redirect to index.html
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Error: " + errorMessage);
                });
        } else {
            // Phone number authentication
            const phoneNumber = identifier;
            const appVerifier = new RecaptchaVerifier('login-form', {
                'size': 'invisible',
                'callback': function (response) {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                }
            }, auth);

            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    const verificationCode = window.prompt('Please enter the verification code that was sent to your mobile device.');
                    return confirmationResult.confirm(verificationCode);
                })
                .then((result) => {
                    const user = result.user;
                    alert("Logged in successfully!");
                    // Redirect to index.html
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert("Error: " + errorMessage);
                });
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

