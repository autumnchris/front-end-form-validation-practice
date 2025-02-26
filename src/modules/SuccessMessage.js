class SuccessMessage {
  // DOM methods
  renderSuccessMessage(message, location) {
    const successMessage = document.createElement('p');
    successMessage.classList.add('message', 'success-message');
    successMessage.innerHTML = `<span class="fa-solid fa-circle-check fa-lg fa-fw" aria-hidden="true"></span> ${message}`;
    document.querySelector(location).appendChild(successMessage);
  }

  removeSuccessMessage(location) {
    const successMessage = document.querySelector(`${location} .success-message`);
    successMessage ? document.querySelector(location).removeChild(successMessage) : null;
  }
}

export default SuccessMessage;