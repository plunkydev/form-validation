import { validateEmail, validateOptionInputs, validatePostalCode, validatePassword, validatePasswordConfirm } from '../validate/formValidate.js'
import { emailInputFunction } from '../components/emailComponent.js'
import { fieldSetComponent } from '../components/fieldSetComponent.js'
function createForm () {
  // Crear el formulario
  const form = document.createElement('form')
  form.id = 'registrationForm'
  form.className = 'form'
  form.setAttribute('name', 'registrationForm')
  form.setAttribute('method', 'post')
  form.setAttribute('action', '#')
  form.setAttribute('novalidate', true)

  // Input para el email
  const { emailLabel, emailInput, emailMessage } = emailInputFunction()
  form.appendChild(emailLabel)
  form.appendChild(emailInput)
  form.appendChild(emailMessage)

  // Fieldset para país y código postal
  const { fieldsetCountry } = fieldSetComponent('País y código postal')

  // Select para los países
  const countryLabel = document.createElement('label')
  countryLabel.setAttribute('for', 'country')
  countryLabel.textContent = 'País:'

  const countrySelect = document.createElement('select')
  countrySelect.id = 'country'
  countrySelect.className = 'country'
  countrySelect.setAttribute('name', 'country')
  countrySelect.setAttribute('required', true)

  // Agregar una opción por defecto como placeholder
  const placeholderOption = document.createElement('option')
  placeholderOption.setAttribute('value', '')
  placeholderOption.setAttribute('disabled', true)
  placeholderOption.setAttribute('selected', true)
  placeholderOption.textContent = 'Seleccione un país'
  countrySelect.appendChild(placeholderOption);

  // Agregar las opciones de países
  ['Colombia', 'Venezuela', 'Ecuador', 'Perú', 'Chile'].forEach(country => {
    const option = document.createElement('option')
    option.setAttribute('value', country.toLowerCase())
    option.textContent = country
    countrySelect.appendChild(option)
  })

  const countryMessage = document.createElement('span')
  countryMessage.id = 'countryMessage'
  countryMessage.className = 'message'
  countryMessage.textContent = 'Debe seleccionar un país'

  // Input para el código postal
  const postalLabel = document.createElement('label')
  postalLabel.setAttribute('for', 'postalCode')
  postalLabel.textContent = 'Código Postal:'

  const postalInput = document.createElement('input')
  postalInput.id = 'postalCode'
  postalInput.className = 'postalCode'
  postalInput.setAttribute('type', 'text')
  postalInput.setAttribute('name', 'postalCode')
  postalInput.setAttribute('required', true)
  postalInput.setAttribute('minlength', '4')
  postalInput.setAttribute('maxlength', '6')

  const postalMessage = document.createElement('span')
  postalMessage.id = 'postalMessage'
  postalMessage.className = 'message'
  postalMessage.textContent = 'Mensaje'

  fieldsetCountry.appendChild(countryLabel)
  fieldsetCountry.appendChild(countrySelect)
  fieldsetCountry.appendChild(countryMessage)
  fieldsetCountry.appendChild(postalLabel)
  fieldsetCountry.appendChild(postalInput)
  fieldsetCountry.appendChild(postalMessage)
  form.appendChild(fieldsetCountry)

  // Fieldset para contraseña
  const fieldsetPassword = document.createElement('fieldset')
  const legendPassword = document.createElement('legend')
  legendPassword.textContent = 'Contraseña'
  fieldsetPassword.appendChild(legendPassword)

  // Input para la contraseña
  const passwordLabel = document.createElement('label')
  passwordLabel.setAttribute('for', 'password')
  passwordLabel.textContent = 'Contraseña:'

  const passwordInput = document.createElement('input')
  passwordInput.id = 'password'
  passwordInput.className = 'password'
  passwordInput.setAttribute('type', 'password')
  passwordInput.setAttribute('name', 'password')
  passwordInput.setAttribute('required', true)
  passwordInput.setAttribute('minlength', '8')

  const passwordMessage = document.createElement('span')
  passwordMessage.id = 'passwordMessage'
  passwordMessage.className = 'message'
  passwordMessage.textContent = 'La contraseña debe tener mayusculas, minusculas, numeros y al menos 8 caracteres'

  // Input para confirmar contraseña
  const confirmLabel = document.createElement('label')
  confirmLabel.setAttribute('for', 'confirmPassword')
  confirmLabel.textContent = 'Confirmar Contraseña:'

  const confirmInput = document.createElement('input')
  confirmInput.id = 'confirmPassword'
  confirmInput.className = 'input confirm-password'
  confirmInput.setAttribute('type', 'password')
  confirmInput.setAttribute('name', 'confirmPassword')
  confirmInput.setAttribute('required', true)
  confirmInput.setAttribute('minlength', '8')

  const confirmMessage = document.createElement('span')
  confirmMessage.id = 'confirmMessage'
  confirmMessage.className = 'message'

  fieldsetPassword.appendChild(passwordLabel)
  fieldsetPassword.appendChild(passwordInput)
  fieldsetPassword.appendChild(passwordMessage)
  fieldsetPassword.appendChild(confirmLabel)
  fieldsetPassword.appendChild(confirmInput)
  fieldsetPassword.appendChild(confirmMessage)
  form.appendChild(fieldsetPassword)

  // Botón de enviar
  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.className = 'btn-submit'
  submitButton.textContent = 'Enviar'
  form.appendChild(submitButton)

  // Agregar validación en tiempo real-------------------------------------------------------------------------------------------------------------

  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
  })

  emailInput.addEventListener('input', () => {
    validateEmail(emailInput, emailMessage, 'email')
  })

  function validateCountrySelection () {
    validateOptionInputs(countrySelect, countryMessage, 'country')
  }

  // Validación al cambiar la selección
  countrySelect.addEventListener('change', validateCountrySelection)

  // Validación al salir del campo si no se seleccionó nada
  countrySelect.addEventListener('blur', validateCountrySelection)

  passwordInput.addEventListener('input', () => {
    validatePassword(passwordInput, passwordMessage, 'password')
  })

  confirmInput.addEventListener('input', () => {
    validatePasswordConfirm(confirmInput, passwordInput, confirmMessage, 'confirm-password')
  })

  postalInput.addEventListener('input', () => {
    validatePostalCode(postalInput, postalMessage, 'postalCode')
  })

  // Retornar el formulario
  return form
}

export { createForm }
