function initializeApp(){

const firebaseConfig = {
    apiKey: "AIzaSyBqaPR0wVUXYnD1KUhaeTXT2RlfUWvK_n8",
    authDomain: "chrome-store-1f206.firebaseapp.com",
    databaseURL: "https://chrome-store-1f206-default-rtdb.firebaseio.com",
    projectId: "chrome-store-1f206",
    storageBucket: "chrome-store-1f206.appspot.com",
    assmessagingSenderId: "66744701444",
    appId: "1:66744701444:web:570a5ed9a2105663859b51"
  };

  //initialize firebase
 firebase.initializeApp(firebaseConfig);
 var database = firebase.database();



  //referance your database
  var contactFormDB = firebase.database().ref("contactForm");
  document.getElementById('contactForm').addEventListener('submit',submitForm);


  function submitForm(e){  //call submit
    e.preventDefault();  //default action
  

    const emailid = getElementById('emailid');//function return value
     saveMessage(emailid);   //call the fun
    //enable alert
    document.querySelector(".alert").Style.display = "block";
    

    //remove the alert
   setTimeout(()=>{
    document.querySelector(".alert").Style.display = "none";
   },3000);

   //reset the form
   document.getElementById('contactForm').reset();         

   // console.log(emailid);  //checking
  }
//save the msg in the firebase
     newContactForm.set({
         emailid:emailid //object
      });


 const saveMessage = (emailid) =>{
    var newContactForm = contactFormDB.push();  //new ref
  }

  if(error){
    console.error('Error saving email:',error);
  }else{
    console.log('Email saved successfully!');
  }


  //value of field
  const getElementVal =(id)=>{
         return document.getElementById(id).value;
  }
}


