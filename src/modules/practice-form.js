import countryList from 'country-list';
import emailValidator from 'email-validator';
import passwordValidator from 'password-validator';

const PracticeForm = (() => {

  function renderForm() {
    document.querySelector('main').innerHTML = `<form class="practice-form" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" autofocus />
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <div class="select-wrapper">
          <select name="country" id="country"></select>
        </div>
      </div>
      <div class="form-group">
        <label for="zip-code">US Zip Code</label>
        <input type="text" name="zipCode" id="zip-code" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirm-password" />
      </div>
      <div class="button-group">
        <input type="submit" class="button submit-button" value="Submit" />
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
    else if (formData.country === 'placeholder') {
      renderErrorMessage('A country must be selected in order to submit the form.');
    }
    else if (!formData.zipCode.trim()) {
      renderErrorMessage('A US zip code is required to submit the form.');
    }
    else if (!formData.password.trim()) {
      renderErrorMessage('A password is required to submit the form.');
    }
    else if (!emailValidator.validate(formData.email)) {
      renderErrorMessage('The Email field must contain a valid email address.');
    }
    else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(formData.zipCode)) {
      renderErrorMessage('The Zip Code field must contain a valid US zip code.');
    }
    else if (!validatePassword(formData.password)) {
      renderErrorMessage('Password must be 5 to 12 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.');
    }
    else if (formData.password !== formData.confirmPassword) {
      renderErrorMessage('Password fields do not match.');
    }
    else {
      renderSuccessMessage();
    }
  }

  function validatePassword(passwordInput) {
    const schema = new passwordValidator();
    schema
      .is().min(5)
      .is().max(12)
      .has().uppercase()
      .has().lowercase()
      .has().digits()
      .has().symbols()
      .has().not().spaces();
    return schema.validate(passwordInput);
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
    validateForm
  };
})();

export { PracticeForm };