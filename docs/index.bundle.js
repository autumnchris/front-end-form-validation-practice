(()=>{"use strict";var __webpack_modules__={332:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./node_modules/country-list/country-list.js\nvar country_list = __webpack_require__(660);\n;// CONCATENATED MODULE: ./src/modules/Practice-Form.js\n\n\nvar PracticeForm = function () {\n  var checkboxStatus = false;\n\n  function renderForm() {\n    document.querySelector('main').innerHTML = \"<form class=\\\"practice-form\\\" novalidate>\\n      <div class=\\\"form-group\\\">\\n        <label for=\\\"email\\\">Email</label>\\n        <input type=\\\"email\\\" name=\\\"email\\\" id=\\\"email\\\" autofocus required />\\n      </div>\\n      <div class=\\\"form-group\\\">\\n        <label for=\\\"country\\\">Country</label>\\n        <div class=\\\"select-wrapper\\\">\\n          <select name=\\\"country\\\" id=\\\"country\\\" required></select>\\n        </div>\\n      </div>\\n      <div class=\\\"form-group\\\">\\n        <label for=\\\"zip-code\\\">US Zip Code</label>\\n        <input type=\\\"text\\\" name=\\\"zipCode\\\" inputmode=\\\"numeric\\\" id=\\\"zip-code\\\" required />\\n      </div>\\n      <div class=\\\"form-group\\\">\\n        <label for=\\\"password\\\">Password</label>\\n        <input type=\\\"password\\\" name=\\\"password\\\" id=\\\"password\\\" required />\\n      </div>\\n      <div class=\\\"form-group\\\">\\n        <label for=\\\"confirm-password\\\">Confirm Password</label>\\n        <input type=\\\"password\\\" name=\\\"confirmPassword\\\" id=\\\"confirm-password\\\" required />\\n      </div>\\n      <div class=\\\"form-group\\\">\\n        <label class=\\\"check-label\\\" for=\\\"show-password\\\">Show Password\\n          <input type=\\\"checkbox\\\" name=\\\"showPassword\\\" tabindex=\\\"-1\\\" id=\\\"show-password\\\" \".concat(checkboxStatus ? 'checked' : '', \" />\\n          <span class=\\\"checkmark\\\" tabindex=\\\"0\\\" data-input-id=\\\"show-password\\\"></span>\\n        </label>\\n      </div>\\n      <div class=\\\"button-group\\\">\\n        <button type=\\\"submit\\\" class=\\\"button submit-button\\\">Submit</button>\\n      </div>\\n    </form>\");\n    renderListOfCountries();\n  }\n\n  function renderListOfCountries() {\n    var options = document.querySelector('.select-wrapper select').innerHTML = country_list.getData().sort(function (a, b) {\n      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());\n    }).map(function (country, index) {\n      return \"<option value=\\\"\".concat(country.code.toLowerCase(), \"\\\" id=\\\"country-\").concat(index + 1, \"\\\">\").concat(country.name, \"</option>\");\n    }).join('');\n    var selectedOption = document.createElement('option');\n    selectedOption.setAttribute('value', 'placeholder');\n    selectedOption.setAttribute('id', 'placeholder');\n    selectedOption.setAttribute('disabled', 'true');\n    selectedOption.setAttribute('selected', 'true');\n    selectedOption.innerHTML = 'Select your country';\n    document.getElementById('country').innerHTML = options;\n    document.getElementById('country').insertBefore(selectedOption, document.querySelector('#country #country-1'));\n  }\n\n  function validateForm(event, formData) {\n    event.preventDefault();\n    removeErrorMessage();\n    removeSuccessMessage();\n\n    if (!formData.email.trim()) {\n      renderErrorMessage('An email address is required to submit the form.');\n    } else if (document.getElementById('email').validity.typeMismatch) {\n      renderErrorMessage('The Email field must contain a valid email address.');\n    } else if (formData.country === 'placeholder') {\n      renderErrorMessage('A country must be selected in order to submit the form.');\n    } else if (!formData.zipCode.trim()) {\n      renderErrorMessage('A US zip code is required to submit the form.');\n    } else if (!/(^\\d{5}$)|(^\\d{5}-\\d{4}$)/.test(formData.zipCode)) {\n      renderErrorMessage('The Zip Code field must contain a valid US zip code.');\n    } else if (!formData.password.trim()) {\n      renderErrorMessage('A password is required to submit the form.');\n    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#^+=-><}{)(~])[A-Za-z0-9@$!%*?&#^+=-><}{)(~]{5,12}$/.test(formData.password)) {\n      renderErrorMessage('Password must be 5 to 12 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol.');\n    } else if (formData.password !== formData.confirmPassword) {\n      renderErrorMessage('Password fields do not match.');\n    } else {\n      renderSuccessMessage();\n    }\n  }\n\n  function handleCheckbox(event) {\n    if (event.keyCode === 32) {\n      event.preventDefault();\n      document.getElementById(event.target.dataset.inputId).checked = !document.getElementById(event.target.dataset.inputId).checked;\n    }\n\n    if (event.keyCode === 32 || event.type === 'click') {\n      checkboxStatus = !checkboxStatus;\n      showPassword(checkboxStatus);\n    }\n  }\n\n  function showPassword(isChecked) {\n    var passwordInput = document.getElementById('password');\n    var confirmPasswordInput = document.getElementById('confirm-password');\n\n    if (isChecked) {\n      passwordInput.type = 'text';\n      confirmPasswordInput.type = 'text';\n    } else {\n      passwordInput.type = 'password';\n      confirmPasswordInput.type = 'password';\n    }\n  }\n\n  function renderErrorMessage(messageText) {\n    var errorMessage = document.createElement('p');\n    errorMessage.classList.add('message', 'error-message');\n    errorMessage.innerHTML = \"<span class=\\\"fa fa-exclamation-circle fa-lg fa-fw\\\" aria-hidden=\\\"true\\\"></span> \".concat(messageText);\n    document.querySelector('.practice-form').appendChild(errorMessage);\n  }\n\n  function removeErrorMessage() {\n    var errorMessage = document.querySelector('.practice-form .error-message');\n    errorMessage ? document.querySelector('.practice-form').removeChild(errorMessage) : null;\n  }\n\n  function renderSuccessMessage() {\n    var successMessage = document.createElement('p');\n    successMessage.classList.add('message', 'success-message');\n    successMessage.innerHTML = '<span class=\"fa fa-check-circle fa-lg fa-fw\" aria-hidden=\"true\"></span> Form was successfully submitted!';\n    document.querySelector('.practice-form').appendChild(successMessage);\n  }\n\n  function removeSuccessMessage() {\n    var successMessage = document.querySelector('.practice-form .success-message');\n    successMessage ? document.querySelector('.practice-form').removeChild(successMessage) : null;\n  }\n\n  return {\n    renderForm: renderForm,\n    validateForm: validateForm,\n    handleCheckbox: handleCheckbox\n  };\n}();\n\n\n;// CONCATENATED MODULE: ./src/modules/App.js\n\n\nvar App = function () {\n  function renderApp() {\n    document.getElementById('app').innerHTML = \"\\n      <header>\\n        <h1>Front-End Form Validation Practice</h1>\\n      </header>\\n      <main></main>\\n      <footer>Created by <a href=\\\"https://autumnchris.github.io/portfolio\\\" target=\\\"_blank\\\">Autumn Bullard</a> &copy; \".concat(new Date().getFullYear(), \"</footer>\");\n    PracticeForm.renderForm();\n    document.addEventListener('click', function (event) {\n      var element = event.target;\n      element.matches('.practice-form .form-group input[type=checkbox]') ? PracticeForm.handleCheckbox(event) : null;\n    });\n    document.addEventListener('keydown', function (event) {\n      var element = event.target;\n      element.matches('.practice-form .form-group .checkmark') ? PracticeForm.handleCheckbox(event) : null;\n    });\n    document.addEventListener('submit', function (event) {\n      var element = event.target;\n      element.matches('.practice-form') ? PracticeForm.validateForm(event, {\n        email: document.getElementById('email').value,\n        country: document.getElementById('country').value,\n        zipCode: document.getElementById('zip-code').value,\n        password: document.getElementById('password').value,\n        confirmPassword: document.getElementById('confirm-password').value\n      }) : null;\n    });\n  }\n\n  return {\n    renderApp: renderApp\n  };\n}();\n\n\n;// CONCATENATED MODULE: ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html\n/* harmony default export */ const cjsname_name_ext_src = (__webpack_require__.p + \"index.html\");\n;// CONCATENATED MODULE: ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/favicon.ico\n/* harmony default export */ const favicon = (__webpack_require__.p + \"favicon.ico\");\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\nApp.renderApp();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUJBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC1mb3JtLXZhbGlkYXRpb24tcHJhY3RpY2UvLi9zcmMvbW9kdWxlcy9QcmFjdGljZS1Gb3JtLmpzP2I5NTkiLCJ3ZWJwYWNrOi8vZnJvbnQtZW5kLWZvcm0tdmFsaWRhdGlvbi1wcmFjdGljZS8uL3NyYy9tb2R1bGVzL0FwcC5qcz84MWEyIiwid2VicGFjazovL2Zyb250LWVuZC1mb3JtLXZhbGlkYXRpb24tcHJhY3RpY2UvLi9zcmMvaW5kZXguaHRtbD83M2NmIiwid2VicGFjazovL2Zyb250LWVuZC1mb3JtLXZhbGlkYXRpb24tcHJhY3RpY2UvLi9zcmMvZmF2aWNvbi5pY28/YWU3MCIsIndlYnBhY2s6Ly9mcm9udC1lbmQtZm9ybS12YWxpZGF0aW9uLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzP2Q5YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvdW50cnlMaXN0IGZyb20gJ2NvdW50cnktbGlzdCc7XG5cbnZhciBQcmFjdGljZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGVja2JveFN0YXR1cyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmlubmVySFRNTCA9IFwiPGZvcm0gY2xhc3M9XFxcInByYWN0aWNlLWZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBhdXRvZm9jdXMgcmVxdWlyZWQgLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImNvdW50cnlcXFwiPkNvdW50cnk8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0LXdyYXBwZXJcXFwiPlxcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XFxcImNvdW50cnlcXFwiIGlkPVxcXCJjb3VudHJ5XFxcIiByZXF1aXJlZD48L3NlbGVjdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiemlwLWNvZGVcXFwiPlVTIFppcCBDb2RlPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ6aXBDb2RlXFxcIiBpbnB1dG1vZGU9XFxcIm51bWVyaWNcXFwiIGlkPVxcXCJ6aXAtY29kZVxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb25maXJtLXBhc3N3b3JkXFxcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBpZD1cXFwiY29uZmlybS1wYXNzd29yZFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwic2hvdy1wYXNzd29yZFxcXCI+U2hvdyBQYXNzd29yZFxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInNob3dQYXNzd29yZFxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBpZD1cXFwic2hvdy1wYXNzd29yZFxcXCIgXCIuY29uY2F0KGNoZWNrYm94U3RhdHVzID8gJ2NoZWNrZWQnIDogJycsIFwiIC8+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjaGVja21hcmtcXFwiIHRhYmluZGV4PVxcXCIwXFxcIiBkYXRhLWlucHV0LWlkPVxcXCJzaG93LXBhc3N3b3JkXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2xhYmVsPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1ncm91cFxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ1dHRvbiBzdWJtaXQtYnV0dG9uXFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9mb3JtPlwiKTtcbiAgICByZW5kZXJMaXN0T2ZDb3VudHJpZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3RPZkNvdW50cmllcygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Qtd3JhcHBlciBzZWxlY3QnKS5pbm5lckhUTUwgPSBjb3VudHJ5TGlzdC5nZXREYXRhKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEubmFtZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoY291bnRyeSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBcIjxvcHRpb24gdmFsdWU9XFxcIlwiLmNvbmNhdChjb3VudHJ5LmNvZGUudG9Mb3dlckNhc2UoKSwgXCJcXFwiIGlkPVxcXCJjb3VudHJ5LVwiKS5jb25jYXQoaW5kZXggKyAxLCBcIlxcXCI+XCIpLmNvbmNhdChjb3VudHJ5Lm5hbWUsIFwiPC9vcHRpb24+XCIpO1xuICAgIH0pLmpvaW4oJycpO1xuICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdGVkT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncGxhY2Vob2xkZXInKTtcbiAgICBzZWxlY3RlZE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BsYWNlaG9sZGVyJyk7XG4gICAgc2VsZWN0ZWRPcHRpb24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgc2VsZWN0ZWRPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgc2VsZWN0ZWRPcHRpb24uaW5uZXJIVE1MID0gJ1NlbGVjdCB5b3VyIGNvdW50cnknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5JykuaW5uZXJIVE1MID0gb3B0aW9ucztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeScpLmluc2VydEJlZm9yZShzZWxlY3RlZE9wdGlvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50cnkgI2NvdW50cnktMScpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShldmVudCwgZm9ybURhdGEpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlbW92ZUVycm9yTWVzc2FnZSgpO1xuICAgIHJlbW92ZVN1Y2Nlc3NNZXNzYWdlKCk7XG5cbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsLnRyaW0oKSkge1xuICAgICAgcmVuZGVyRXJyb3JNZXNzYWdlKCdBbiBlbWFpbCBhZGRyZXNzIGlzIHJlcXVpcmVkIHRvIHN1Ym1pdCB0aGUgZm9ybS4nKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgcmVuZGVyRXJyb3JNZXNzYWdlKCdUaGUgRW1haWwgZmllbGQgbXVzdCBjb250YWluIGEgdmFsaWQgZW1haWwgYWRkcmVzcy4nKTtcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhLmNvdW50cnkgPT09ICdwbGFjZWhvbGRlcicpIHtcbiAgICAgIHJlbmRlckVycm9yTWVzc2FnZSgnQSBjb3VudHJ5IG11c3QgYmUgc2VsZWN0ZWQgaW4gb3JkZXIgdG8gc3VibWl0IHRoZSBmb3JtLicpO1xuICAgIH0gZWxzZSBpZiAoIWZvcm1EYXRhLnppcENvZGUudHJpbSgpKSB7XG4gICAgICByZW5kZXJFcnJvck1lc3NhZ2UoJ0EgVVMgemlwIGNvZGUgaXMgcmVxdWlyZWQgdG8gc3VibWl0IHRoZSBmb3JtLicpO1xuICAgIH0gZWxzZSBpZiAoIS8oXlxcZHs1fSQpfCheXFxkezV9LVxcZHs0fSQpLy50ZXN0KGZvcm1EYXRhLnppcENvZGUpKSB7XG4gICAgICByZW5kZXJFcnJvck1lc3NhZ2UoJ1RoZSBaaXAgQ29kZSBmaWVsZCBtdXN0IGNvbnRhaW4gYSB2YWxpZCBVUyB6aXAgY29kZS4nKTtcbiAgICB9IGVsc2UgaWYgKCFmb3JtRGF0YS5wYXNzd29yZC50cmltKCkpIHtcbiAgICAgIHJlbmRlckVycm9yTWVzc2FnZSgnQSBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBzdWJtaXQgdGhlIGZvcm0uJyk7XG4gICAgfSBlbHNlIGlmICghL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uKltAJCElKj8mI14rPS0+PH17KSh+XSlbQS1aYS16MC05QCQhJSo/JiNeKz0tPjx9eykofl17NSwxMn0kLy50ZXN0KGZvcm1EYXRhLnBhc3N3b3JkKSkge1xuICAgICAgcmVuZGVyRXJyb3JNZXNzYWdlKCdQYXNzd29yZCBtdXN0IGJlIDUgdG8gMTIgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIGF0IGxlYXN0IG9uZSBsb3dlcmNhc2UgbGV0dGVyLCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIG51bWJlciwgYW5kIG9uZSBzeW1ib2wuJyk7XG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICByZW5kZXJFcnJvck1lc3NhZ2UoJ1Bhc3N3b3JkIGZpZWxkcyBkbyBub3QgbWF0Y2guJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlclN1Y2Nlc3NNZXNzYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3goZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC50YXJnZXQuZGF0YXNldC5pbnB1dElkKS5jaGVja2VkID0gIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5kYXRhc2V0LmlucHV0SWQpLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyIHx8IGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGNoZWNrYm94U3RhdHVzID0gIWNoZWNrYm94U3RhdHVzO1xuICAgICAgc2hvd1Bhc3N3b3JkKGNoZWNrYm94U3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93UGFzc3dvcmQoaXNDaGVja2VkKSB7XG4gICAgdmFyIHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcbiAgICB2YXIgY29uZmlybVBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1wYXNzd29yZCcpO1xuXG4gICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgY29uZmlybVBhc3N3b3JkSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckVycm9yTWVzc2FnZShtZXNzYWdlVGV4dCkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAnZXJyb3ItbWVzc2FnZScpO1xuICAgIGVycm9yTWVzc2FnZS5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGUgZmEtbGcgZmEtZndcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+IFwiLmNvbmNhdChtZXNzYWdlVGV4dCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByYWN0aWNlLWZvcm0nKS5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXJyb3JNZXNzYWdlKCkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJhY3RpY2UtZm9ybSAuZXJyb3ItbWVzc2FnZScpO1xuICAgIGVycm9yTWVzc2FnZSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmFjdGljZS1mb3JtJykucmVtb3ZlQ2hpbGQoZXJyb3JNZXNzYWdlKSA6IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJTdWNjZXNzTWVzc2FnZSgpIHtcbiAgICB2YXIgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VjY2Vzc01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICdzdWNjZXNzLW1lc3NhZ2UnKTtcbiAgICBzdWNjZXNzTWVzc2FnZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJmYSBmYS1jaGVjay1jaXJjbGUgZmEtbGcgZmEtZndcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+IEZvcm0gd2FzIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQhJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJhY3RpY2UtZm9ybScpLmFwcGVuZENoaWxkKHN1Y2Nlc3NNZXNzYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVN1Y2Nlc3NNZXNzYWdlKCkge1xuICAgIHZhciBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmFjdGljZS1mb3JtIC5zdWNjZXNzLW1lc3NhZ2UnKTtcbiAgICBzdWNjZXNzTWVzc2FnZSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmFjdGljZS1mb3JtJykucmVtb3ZlQ2hpbGQoc3VjY2Vzc01lc3NhZ2UpIDogbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyRm9ybTogcmVuZGVyRm9ybSxcbiAgICB2YWxpZGF0ZUZvcm06IHZhbGlkYXRlRm9ybSxcbiAgICBoYW5kbGVDaGVja2JveDogaGFuZGxlQ2hlY2tib3hcbiAgfTtcbn0oKTtcblxuZXhwb3J0IHsgUHJhY3RpY2VGb3JtIH07IiwiaW1wb3J0IHsgUHJhY3RpY2VGb3JtIH0gZnJvbSAnLi9QcmFjdGljZS1Gb3JtJztcblxudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gcmVuZGVyQXBwKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxoZWFkZXI+XFxuICAgICAgICA8aDE+RnJvbnQtRW5kIEZvcm0gVmFsaWRhdGlvbiBQcmFjdGljZTwvaDE+XFxuICAgICAgPC9oZWFkZXI+XFxuICAgICAgPG1haW4+PC9tYWluPlxcbiAgICAgIDxmb290ZXI+Q3JlYXRlZCBieSA8YSBocmVmPVxcXCJodHRwczovL2F1dHVtbmNocmlzLmdpdGh1Yi5pby9wb3J0Zm9saW9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5BdXR1bW4gQnVsbGFyZDwvYT4gJmNvcHk7IFwiLmNvbmNhdChuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIFwiPC9mb290ZXI+XCIpO1xuICAgIFByYWN0aWNlRm9ybS5yZW5kZXJGb3JtKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgZWxlbWVudC5tYXRjaGVzKCcucHJhY3RpY2UtZm9ybSAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPWNoZWNrYm94XScpID8gUHJhY3RpY2VGb3JtLmhhbmRsZUNoZWNrYm94KGV2ZW50KSA6IG51bGw7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICBlbGVtZW50Lm1hdGNoZXMoJy5wcmFjdGljZS1mb3JtIC5mb3JtLWdyb3VwIC5jaGVja21hcmsnKSA/IFByYWN0aWNlRm9ybS5oYW5kbGVDaGVja2JveChldmVudCkgOiBudWxsO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICBlbGVtZW50Lm1hdGNoZXMoJy5wcmFjdGljZS1mb3JtJykgPyBQcmFjdGljZUZvcm0udmFsaWRhdGVGb3JtKGV2ZW50LCB7XG4gICAgICAgIGVtYWlsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZSxcbiAgICAgICAgY291bnRyeTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKS52YWx1ZSxcbiAgICAgICAgemlwQ29kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcC1jb2RlJykudmFsdWUsXG4gICAgICAgIHBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1wYXNzd29yZCcpLnZhbHVlXG4gICAgICB9KSA6IG51bGw7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlckFwcDogcmVuZGVyQXBwXG4gIH07XG59KCk7XG5cbmV4cG9ydCB7IEFwcCB9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCI7IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9tb2R1bGVzL0FwcCc7XG5pbXBvcnQgJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vZmF2aWNvbi5pY28nO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbkFwcC5yZW5kZXJBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///332\n")},660:(__unused_webpack_module,exports,__webpack_require__)=>{eval("\n\nvar data = __webpack_require__(463)\n\n/** Precompute name and code lookups. */\nvar nameMap = {}\nvar codeMap = {}\ndata.forEach(mapCodeAndName)\n\nfunction mapCodeAndName (country) {\n  nameMap[country.name.toLowerCase()] = country.code\n  codeMap[country.code.toLowerCase()] = country.name\n}\n\nexports.overwrite = function overwrite (countries) {\n  if (!countries || !countries.length) return\n  countries.forEach(function (country) {\n    var foundIndex = data.findIndex(function (item) {\n      return item.code === country.code\n    })\n    data[foundIndex] = country\n    mapCodeAndName(country)\n  })\n}\n\nexports.getCode = function getCode (name) {\n  return nameMap[name.toLowerCase()]\n}\n\nexports.getName = function getName (code) {\n  return codeMap[code.toLowerCase()]\n}\n\nexports.getNames = function getNames () {\n  return data.map(function (country) {\n    return country.name\n  })\n}\n\nexports.getCodes = function getCodes () {\n  return data.map(function (country) {\n    return country.code\n  })\n}\n\nexports.getCodeList = function getCodeList () {\n  return codeMap\n}\n\nexports.getNameList = function getNameList () {\n  return nameMap\n}\n\nexports.getData = function getData () {\n  return data\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjYwLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQtZm9ybS12YWxpZGF0aW9uLXByYWN0aWNlLy4vbm9kZV9tb2R1bGVzL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QuanM/YTQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIGRhdGEgPSByZXF1aXJlKCcuL2RhdGEuanNvbicpXG5cbi8qKiBQcmVjb21wdXRlIG5hbWUgYW5kIGNvZGUgbG9va3Vwcy4gKi9cbnZhciBuYW1lTWFwID0ge31cbnZhciBjb2RlTWFwID0ge31cbmRhdGEuZm9yRWFjaChtYXBDb2RlQW5kTmFtZSlcblxuZnVuY3Rpb24gbWFwQ29kZUFuZE5hbWUgKGNvdW50cnkpIHtcbiAgbmFtZU1hcFtjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKV0gPSBjb3VudHJ5LmNvZGVcbiAgY29kZU1hcFtjb3VudHJ5LmNvZGUudG9Mb3dlckNhc2UoKV0gPSBjb3VudHJ5Lm5hbWVcbn1cblxuZXhwb3J0cy5vdmVyd3JpdGUgPSBmdW5jdGlvbiBvdmVyd3JpdGUgKGNvdW50cmllcykge1xuICBpZiAoIWNvdW50cmllcyB8fCAhY291bnRyaWVzLmxlbmd0aCkgcmV0dXJuXG4gIGNvdW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIChjb3VudHJ5KSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSBkYXRhLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uY29kZSA9PT0gY291bnRyeS5jb2RlXG4gICAgfSlcbiAgICBkYXRhW2ZvdW5kSW5kZXhdID0gY291bnRyeVxuICAgIG1hcENvZGVBbmROYW1lKGNvdW50cnkpXG4gIH0pXG59XG5cbmV4cG9ydHMuZ2V0Q29kZSA9IGZ1bmN0aW9uIGdldENvZGUgKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWVNYXBbbmFtZS50b0xvd2VyQ2FzZSgpXVxufVxuXG5leHBvcnRzLmdldE5hbWUgPSBmdW5jdGlvbiBnZXROYW1lIChjb2RlKSB7XG4gIHJldHVybiBjb2RlTWFwW2NvZGUudG9Mb3dlckNhc2UoKV1cbn1cblxuZXhwb3J0cy5nZXROYW1lcyA9IGZ1bmN0aW9uIGdldE5hbWVzICgpIHtcbiAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChjb3VudHJ5KSB7XG4gICAgcmV0dXJuIGNvdW50cnkubmFtZVxuICB9KVxufVxuXG5leHBvcnRzLmdldENvZGVzID0gZnVuY3Rpb24gZ2V0Q29kZXMgKCkge1xuICByZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGNvdW50cnkpIHtcbiAgICByZXR1cm4gY291bnRyeS5jb2RlXG4gIH0pXG59XG5cbmV4cG9ydHMuZ2V0Q29kZUxpc3QgPSBmdW5jdGlvbiBnZXRDb2RlTGlzdCAoKSB7XG4gIHJldHVybiBjb2RlTWFwXG59XG5cbmV4cG9ydHMuZ2V0TmFtZUxpc3QgPSBmdW5jdGlvbiBnZXROYW1lTGlzdCAoKSB7XG4gIHJldHVybiBuYW1lTWFwXG59XG5cbmV4cG9ydHMuZ2V0RGF0YSA9IGZ1bmN0aW9uIGdldERhdGEgKCkge1xuICByZXR1cm4gZGF0YVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///660\n")},463:e=>{e.exports=JSON.parse('[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"Åland Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barthélemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Curaçao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"Turkey"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var c=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](c,c.exports,__webpack_require__),c.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var n=__webpack_require__.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");c.length&&(e=c[c.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__(332)})();