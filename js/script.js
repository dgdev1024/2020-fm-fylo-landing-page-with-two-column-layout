/* DOM Elements */
const heroSignupForm = document.querySelector('#hero-signup-form');
const heroEmailElement = document.querySelector('#hero-email-element');
const heroEmailInput = document.querySelector('#hero-email-address');
const heroEmailError = document.querySelector('#hero-email-error');

const bottomSignupForm = document.querySelector('#bottom-signup-form');
const bottomEmailElement = document.querySelector('#bottom-email-element');
const bottomEmailInput = document.querySelector('#bottom-email-address');
const bottomEmailError = document.querySelector('#bottom-email-error');

/* Email Address Regex */
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Set Error Message */
const setErrorMessage = (element, message = '') => {
  const { classList } = element;
  if (classList.contains('fm-input-element') === false) {
    return;
  }

  if (message === '') {
    classList.remove('error');
  } else {
    classList.add('error');
  }

  const errorField = element.getElementsByClassName('fm-input-error')[0];
  errorField.innerHTML = message;
};

/* Email Validation */
const validateEmail = (element, email) => {
  if (typeof email !== 'string' || email === '') {
    setErrorMessage(element, 'Please enter an email address.');
  } else if (emailRegex.test(email) === false) {
    setErrorMessage(element, 'Please enter a valid email address.');
  } else {
    setErrorMessage(element);
  }
};

/* Input Submission */
const onHeroEmailInputSubmit = (ev) => {
  ev.preventDefault();
  validateEmail(heroEmailElement, heroEmailInput.value);
}

const onBottomEmailInputSubmit = (ev) => {
  ev.preventDefault();
  validateEmail(bottomEmailElement, bottomEmailInput.value);
}

/* Window Onload */
window.onload = () => {
  heroSignupForm.addEventListener('submit', onHeroEmailInputSubmit);
  bottomSignupForm.addEventListener('submit', onBottomEmailInputSubmit);
}
