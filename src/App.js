import Header from './modules/Header';
import Footer from './modules/Footer';
import PracticeForm from './modules/PracticeForm';

class App {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.practiceForm = new PracticeForm();
    this.renderApp();
    this.events();
  }

  // Event listeners
  events() {
    document.addEventListener('click', event => {
      const element = event.target;
      element.matches('.practice-form-wrapper .check-label input[type=checkbox]') ? this.practiceForm.handleCheckbox(event) : null;
    });

    document.addEventListener('keydown', event => {
      const element = event.target;
      element.matches('.practice-form-wrapper .checkmark') ? this.practiceForm.handleCheckbox(event) : null;
    });

    document.addEventListener('submit', event => {
      const element = event.target;
      element.matches('.practice-form-wrapper form') ? this.practiceForm.handleSubmit(event, {
        email: document.getElementById('email').value,
        country: document.getElementById('country').value,
        password: document.getElementById('password').value,
        confirmPassword: document.getElementById('confirm-password').value
      }) : null;
    });
  }

  // DOM methods
  renderApp() {
    this.header.renderHeader('#app');
    this.renderMain('#app');
    this.footer.renderFooter('#app');
    this.practiceForm.renderPracticeForm('main');
  }

  renderMain(location) {
    const main = document.createElement('main');
    document.querySelector(location).appendChild(main);
  }
}

export default App;