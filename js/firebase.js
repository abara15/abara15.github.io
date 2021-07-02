// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Grab a form
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');

// Grab input
const inputName = form.querySelector('#name');
const inputEmail = form.querySelector('#email');
const inputMsg = form.querySelector('#message');

var firebaseConfig = {
    apiKey: "AIzaSyAAUatm0wEJuJRdp2KMMzNlI0I32Sh9wac",
    authDomain: "abara-portfolio-3be9c.firebaseapp.com",
    projectId: "abara-portfolio-3be9c",
    storageBucket: "abara-portfolio-3be9c.appspot.com",
    messagingSenderId: "305147142143",
    appId: "1:305147142143:web:f29f4fbea91181057351ca",
    measurementId: "G-0XT3L3MX7Z"
};

// create a function to push
function firebasePush(n, e, m) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // push itself
    var ref = firebase.database().ref('query').push();
    ref.set({
        name: n.value,
        mail: e.value,
        msg: m.value
    })
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputName, inputEmail, inputMsg);
        
        // Clear values in form
        inputName.value = '';
        inputEmail.value = '';
        inputMsg.value = '';
        
        // shows alert if everything went well.
        return alert('Message sent successfully!');
    })
}