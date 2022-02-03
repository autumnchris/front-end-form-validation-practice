import countryList from 'country-list';

const PracticeForm = (() => {
  let checkboxStatus = false;

  function renderForm() {
    document.querySelector('main').innerHTML = `<form class="practice-form" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" autofocus required />
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <div class="select-wrapper">
          <select name="country" id="country" required></select>
        </div>
      </div>
      <div class="form-group">
        <label for="zip-code">US Zip Code</label>
        <input type="text" name="zipCode" inputmode="numeric" id="zip-code" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirm-password" required />
      </div>
      <div class="form-group">
        <label class="check-label" for="show-password">Show Password
          <input type="checkbox" name="showPassword" tabindex="-1" id="show-password" ${checkboxStatus ? 'checked' : ''} />
          <span class="checkmark" tabindex="0" data-input-id="show-password"></span>
        </label>
      </div>
      <div class="button-group">
        <button type="submit" class="button submit-button">Submit</button>
      </div>
    </form>`;

    renderListOfCountries();
  }

  function renderListOfCountries() {
    const options = document.querySelector('.select-wrapper select').innerHTML = countryList.getData().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map((country, index) => {
      return `<option value="${country.code.toLowerCase()}" id="country-${index + 1}">${country.name}</option>`;
    }).join('');
    const selectedOption = document.createElement('option');
    selectedOption.setAttribute('value', 'placeholder');
    selectedOption.setAttribute('id', 'placeholder');
    selectedOption.setAttribute('disabled', 'true');
    selectedOption.setAttribute('selected', 'true');
    selectedOption.innerHTML = 'Select your country';
    document.getElementById('country').innerHTML = options;
    document.getElementById('country').insertBefore(selectedOption, document.querySelector('#country #country-1'));
  }

  function validateForm(event, formData) {
    event.preventDefault();
    removeErrorMessage();
    removeSuccessMessage();

    if (!formData.email.trim()) {
      renderErrorMessage('An email address is required to submit the form.');
    }
    else if (document.getElementById('email').validity.typeMismatch) {
      renderErrorMessage('The Email field must contain a valid email address.');
    }
    else if (formData.country === 'placeholder') {
      renderErrorMessage('A country must be selected in order to submit the form.');
    }
    else if (!formData.zipCode.trim()) {
      renderErrorMessage('A US zip code is required to submit the form.');
    }
    else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(formData.zipCode)) {
      renderErrorMessage('The Zip Code field must contain a valid US zip code.');
    }
    else if (!formData.password.trim()) {
      renderErrorMessage('A password is required to submit the form.');
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#^+=-><}{)(~])[A-Za-z0-9@$!%*?&#^+=-><}{)(~]{5,12}$/.test(formData.password)) {
      renderErrorMessage('Password must be 5 to 12 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.');
    }
    else if (formData.password !== formData.confirmPassword) {
      renderErrorMessage('Password fields do not match.');
    }
    else {
      renderSuccessMessage();
    }
  }

  function handleCheckbox(event) {

    if (event.keyCode === 32) {
      event.preventDefault();
      document.getElementById(event.target.dataset.inputId).checked = !document.getElementById(event.target.dataset.inputId).checked;
    }

    if (event.keyCode === 32 || event.type === 'click') {
      checkboxStatus = !checkboxStatus;
      showPassword(checkboxStatus);
    }
  }

  function showPassword(isChecked) {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    if (isChecked) {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text';
    }
    else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password';
    }
  }

  function renderErrorMessage(messageText) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('message', 'error-message');
    errorMessage.innerHTML = `<span class="fa fa-exclamation-circle fa-lg fa-fw"></span> ${messageText}`;
  
    document.querySelector('.practice-form').appendChild(errorMessage);
  }

  function removeErrorMessage() {
    const errorMessage = document.querySelector('.practice-form .error-message');
    errorMessage ? document.querySelector('.practice-form').removeChild(errorMessage) : null;
  }

  function renderSuccessMessage() {
    const successMessage = document.createElement('p');
    successMessage.classList.add('message', 'success-message');
    successMessage.innerHTML = '<span class="fa fa-check-circle fa-lg fa-fw"></span> Form was successfully submitted!';
  
    document.querySelector('.practice-form').appendChild(successMessage);
  }

  function removeSuccessMessage() {
    const successMessage = document.querySelector('.practice-form .success-message');
    successMessage ? document.querySelector('.practice-form').removeChild(successMessage) : null;
  }

  return {
    renderForm,
    validateForm,
    handleCheckbox
  };
})();

export { PracticeForm };