// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQTTyDDNYxlWlY4D391qExISGk1AkHaIk",
    authDomain: "isolamemails.firebaseapp.com",
    databaseURL: "https://isolamemails-default-rtdb.firebaseio.com",
    projectId: "isolamemails",
    storageBucket: "isolamemails.appspot.com",
    messagingSenderId: "689245917281",
    appId: "1:689245917281:web:421eef9b17d6802b265a20",
    measurementId: "G-YEP9D6FGVR"
  };

  //initialize firebase 
  firebase.initializeApp(firebaseConfig);

  //reference database
  var subEmails = firebase.database().ref('subscriptionEmails');

  document.getElementById('subscriptionEmails').addEventListener("submit", submitForm);

  //submit form function
  function submitForm(e){
    e.preventDefault();

    var email = getElementVal('email');

    saveEmail(email);

    //enable alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(()=>{
      document.querySelector('.alert').style.display = "none";
    }, 5000);

    //reset form
    document.getElementById('subscriptionEmails').reset()
  }

  const saveEmail = (email)=>{
    var newSubEmails = subEmails.push();
    newSubEmails.set({
      email : email,
    });
  };

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }
