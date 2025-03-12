// TODO: Query for button with an id "theme-button"

let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");
let count = 3;

const addSignature = (person) => {
  // Create a new paragraph element for the signature
  const newSignature = document.createElement("p");

  // Format the new signature using person's information
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} ${person.message}`;

  // Find the signatures section on the page and append the new signature
  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);

  // Remove the old counter
  const oldCounter = document.getElementById("counter");
  oldCounter.remove();

  // Increase the count
  count = count + 1;

  // Create a new counter HTML p tag
  const newCounter = document.createElement("p");
  newCounter.id = "counter";
  newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  // Append the new counter to the petition div
  const petitionDiv = document.getElementById("petition");
  petitionDiv.appendChild(newCounter);
}

// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  // Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add("error");
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove("error");
    }
  }

  const email = document.getElementById('email');
  if(!email.value.includes('.com')){
    containsErrors = true;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (!containsErrors) {
    let person = {
      name: petitionInputs[0].value,
      hometown: petitionInputs[1].value,
      message: petitionInputs[2].value,
    };
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".About-revelable, .data-revelable, .impact-revelable, .overcome-revelable, .petition-revelable");

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const toggleModal = (person) =>{
  
  // Select the modal and modal content elements
    const modal = document.getElementById("thanks-modal");
    const modalContent = document.getElementById("thanks-content-modal");

    // Set the display style property of the entire modal to flex
    modal.style.display = "flex";

  // Hide after 4 seconds (4000 milliseconds)
  setTimeout(() => {
    console.log("Hiding modal...");
    modal.style.display = "none";
    console.log("Modal hidden.");
  }, 4000);

  // Select the close button inside the modal
  const closeButton = document.getElementById("close-modal-button");

  if (!closeButton) {
    console.error("Close button not found.");
    return; // Exit function if close button is not found
  }

  // Function to close the modal
  const closeModal = () => {
    console.log("Closing modal manually...");
    modal.style.display = "none";
  };

  // Add event listener to the close button
  closeButton.addEventListener("click", closeModal);

  // Call scaleImage function every 0.5 seconds to animate the image
  const intervalId = setInterval(scaleImage, 500);
}

// Variable to control the scale factor of the image
let scaleFactor = 1;

// Select the image within the modal
const modalImage = document.getElementById("cute.gif");

// Function to scale the image
const scaleImage = () => {
  // Toggle the scale factor between 1 and 0.8
  scaleFactor = (scaleFactor === 1) ? 0.8 : 1;

  // Apply the scale factor to the image
  modalImage.style.transform = `scale(${scaleFactor})`;
}

