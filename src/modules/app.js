import { PracticeForm } from './practice-form';

const App = (() => {

  function renderApp() {
    document.getElementById('app').innerHTML = `
      <header>
        <h1>Front-End Form Validation Practice</h1>
      </header>
      <main></main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

    PracticeForm.renderForm();

    document.addEventListener('click', event => {
      const element = event.target;
      element.matches('.practice-form .form-group input[type=checkbox]') ? PracticeForm.handleCheckbox(event) : null;
    });

    document.addEventListener('keydown', event => {
      const element = event.target;
      element.matches('.practice-form .form-group .checkmark') ? PracticeForm.handleCheckbox(event) : null;
    });

    document.addEventListener('submit', event => {
      const element = event.target;
      element.matches('.practice-form') ? PracticeForm.validateForm(event, {
        email: document.getElementById('email').value,
        country: document.getElementById('country').value,
        zipCode: document.getElementById('zip-code').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value
      }) : null;
    });
  }

  return {
    renderApp
  };
})();

export { App };