import { validateEmail, validateOptionInputs, validatePostalCode, validatePassword, validatePasswordConfirm } from '../validate/formValidate.js'
import { emailInputFunction } from '../components/emailComponent.js'
import { fieldSetComponent } from '../components/fieldSetComponent.js'
import { selectElementFunction } from '../components/selectComponent.js'
import { postalCodeInputFunction } from '../components/postalCodeComponent.js'
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
  const { countryLabel, countrySelect, countryMessage } = selectElementFunction(['Argentina', 'Brasil', 'Chile', 'Colombia', 'Uruguay'], 'Seleccione un país')

  // Input para el código postal
  const { postalLabel, postalInput, postalMessage } = postalCodeInputFunction()

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
