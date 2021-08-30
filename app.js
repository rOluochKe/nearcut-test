const phoneInputField = document.querySelector('#phone')

const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ['de', 'nl', 'fr', 'es'],
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  default: [''],
})
