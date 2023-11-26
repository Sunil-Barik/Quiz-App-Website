const firebaseConfig = {
  apiKey: "AIzaSyAziMB5xRd74yBqEE8xY3yMgS6deIT7QU0",
  authDomain: "contactform-3550a.firebaseapp.com",
  databaseURL: "https://contactform-3550a-default-rtdb.firebaseio.com",
  projectId: "contactform-3550a",
  storageBucket: "contactform-3550a.appspot.com",
  messagingSenderId: "685595354050",
  appId: "1:685595354050:web:a703ae6f73d00e2474ec5b"
};

firebase.initializeApp(firebaseConfig);
var contactForm = firebase.database().ref("contactForm");
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e){

e.preventDefault();

var name = getElementVal("name");
var password = getElementVal("password");
saveMessages(name, password);
}

const saveMessages = (name, password) =>{
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    password: password,
  });
};

const getElementVal = (id) => {

  return document.getElementById(id).value;
   
}