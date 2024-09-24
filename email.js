// sending email
//const emailContainerPage = document.querySelectorById("contact-us")
const form = document.querySelector("form");
// const allFormField = document.querySelectorAll('.form-control');
var userName = document.getElementById('validationCustomUsername').value;
var userEmail = document.getElementById('validationCustomUserEmail').value;
var userSubject = document.getElementById('validationCustomSubject').value;
var userMessage = document.getElementById('validationTextarea').value;
// var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject' + subject + '<br/> message' + message;
var body = 'test';

form.addEventListener('submit', e=> {
  e.preventDefault();
  sendEmail();
});

// function sendEmail() {
  function sendEmail(){
    
    let templateParams ={
      name: userName.value,
      email: userEmail.value,
      message: userMessage.value,
      subject: userSubject.value
    };
    //const serviceID = service_e0119ev;
    const serviceID = 'service_y8ks4m8';
    const templateID = 'template_qfz2e8r';

    emailjs.send(serviceID, templateID, templateParams)
           .then(res => console.log('SUCCESS!', res.status, res.text))
           .catch(err => console.log('FAILED...' , err))
  };
//   Email.send({
//       Host: "smtp.seznam.cz",
//       Username : "<sender’s email address>",
//       Password : "<email password>",
//       To : 'mistr.pneu@seznam.cz',
//       From : "<sender’s email address>",
//       Subject : "<email subject>",
//       Body : "<email body>",
//   })
//   .then(function(message){
//       alert("mail sent successfully")
//   });
// }

// document.querySelector(".imageWrapper").addEventListener("scroll", (e) => {
//   console.log(e.target.scrollTop)
// })

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY)
//   moveTop(wrapper)
//   }
// )

// function moveTop (imgWrapper){
//    imgWrapper.scrollTop
//}

