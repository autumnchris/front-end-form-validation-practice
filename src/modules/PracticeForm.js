import countryList from 'country-list';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

class PracticeForm {
  constructor() {
    this.errorMessage = new ErrorMessage();
    this.successMessage = new SuccessMessage();
    this.checkboxStatus = false;
  }

  handleSubmit(event, formData) {
    event.preventDefault();
    this.errorMessage.removeErrorMessage('.practice-form-wrapper');
    this.successMessage.removeSuccessMessage('.practice-form-wrapper');
    formData.email = formData.email.trim();
    formData.password = formData.password.trim();
    formData.confirmPassword = formData.confirmPassword.trim();

    if (!formData.email) {
      this.errorMessage.renderErrorMessage('An email address is required to submit the form.', '.practice-form-wrapper');
    }
    else if (document.getElementById('email').validity.typeMismatch) {
      this.errorMessage.renderErrorMessage('The Email field must contain a valid email address.', '.practice-form-wrapper');
    }
    else if (formData.country === 'placeholder') {
      this.errorMessage.renderErrorMessage('A country must be selected in order to submit the form.', '.practice-form-wrapper');
    }
    else if (!formData.password) {
      this.errorMessage.renderErrorMessage('A password is required to submit the form.', '.practice-form-wrapper');
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#^+=-><}{)(~])[A-Za-z0-9@$!%*?&#^+=-><}{)(~]{5,12}$/.test(formData.password)) {
      this.errorMessage.renderErrorMessage('Password must be 5 to 12 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.', '.practice-form-wrapper');
    }
    else if (formData.password !== formData.confirmPassword) {
      this.errorMessage.renderErrorMessage('Password fields do not match.', '.practice-form-wrapper');
    }
    else {
      this.successMessage.renderSuccessMessage('Form was successfully submitted!', '.practice-form-wrapper');
    }
  }

  handleCheckbox(event) {

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      document.getElementById(event.target.dataset.inputId).checked = !document.getElementById(event.target.dataset.inputId).checked;
    }

    if (event.key === 'Enter' || event.key === ' ' || event.type === 'click') {
      this.checkboxStatus = !this.checkboxStatus;
      this.showPassword(this.checkboxStatus);
    }
  }

  // DOM methods
  showPassword(isChecked) {
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

  renderListOfCountries() {
    const options = document.querySelector('.practice-form-wrapper .select-wrapper select').innerHTML = countryList.getData().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())).map((country, index) => {
      return `<option value="${country.code.toLowerCase()}" id="country-${index + 1}">${country.name}</option>`;
    }).join('');
    const selectedOption = document.createElement('option');
    selectedOption.setAttribute('value', 'placeholder');
    selectedOption.setAttribute('id', 'country-placeholder');
    selectedOption.setAttribute('disabled', 'true');
    selectedOption.setAttribute('selected', 'true');
    selectedOption.innerHTML = 'Select your country';
    document.getElementById('country').innerHTML = options;
    document.getElementById('country').insertBefore(selectedOption, document.querySelector('#country #country-1'));
  }

  renderPracticeForm(location) {
    const practiceForm = document.createElement('div');
    practiceForm.classList.add('practice-form-wrapper');
    practiceForm.innerHTML = `
      <form novalidate>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" autocomplete="email" autocapitalize="off" autofocus required />
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <div class="select-wrapper">
            <select name="country" id="country" autocomplete="off" required></select>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" autocomplete="off" autocapitalize="off" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirm-password" autocomplete="off" autocapitalize="off" required />
        </div>
        <div class="form-group">
          <label class="check-label" for="show-password">Show Password
            <input type="checkbox" name="showPassword" tabindex="-1" id="show-password" autocomplete="off" ${this.checkboxStatus ? 'checked' : ''} />
            <span class="checkmark" tabindex="0" data-input-id="show-password"></span>
          </label>
        </div>
        <div class="button-group">
          <button type="submit" class="button submit-button">Submit</button>
        </div>
      </form>
    `;
    document.querySelector(location).appendChild(practiceForm);
    this.renderListOfCountries();
  }
}

export default PracticeForm;