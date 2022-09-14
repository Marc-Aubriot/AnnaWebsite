//scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    };
  }
};

window.addEventListener("scroll", reveal);

reveal();

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

//bouton submit
async function checkSubmitForm(event) {
  event.preventDefault();

  const contactForm = document.getElementById("my-form");
  const nameForm = document.forms["my-form"]["name"].value;
  const emailForm = document.forms["my-form"]["email"].value;
  const subjectForm = document.forms["my-form"]["subject"].value;
  const messageForm = document.forms["my-form"]["message"].value;
  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");

  if ( nameForm == "" || emailForm == "" || subjectForm == "" || messageForm == "" ) {
    submitText.innerHTML = "Vous devez remplir tous les champs pour valider le formulaire.";
    return;
  };

  fetch(event.target.action, {
    method: form.method,
    body: data,

  })
  .then(response => {
    if (response.ok) {
      submitText.innerHTML = "Merci pour votre message !";
      contactForm.reset();
    } else {
      submitText.innerHTML  = "Oups, un problème est survenu...";
    }
  })
  .catch(error => {
    submitText.innerHTML  = "Oups, un problème est survenu...";
  });

}