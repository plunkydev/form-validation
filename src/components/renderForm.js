import { validateEmail, validateOptionInputs, validatePostalCode, validatePassword, validatePasswordConfirm } from '../validate/formValidate.js'
import { emailInputFunction } from '../components/emailComponent.js'
import { fieldSetComponent } from '../components/fieldSetComponent.js'
import { selectElementFunction } from '../components/selectComponent.js'
import { postalCodeInputFunction } from '../components/postalCodeComponent.js'
import { passwordInputFunction } from '../components/passwordComponent.js'
import { passwordConfirmInputFunction } from '../components/passwordConfirmConponent.js'
import { button } from '../components/buttonComponent.js'

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

  // Fieldset para país y código postal
  const { fieldset: fieldsetCountry } = fieldSetComponent('País y código postal')

  // Select para los países
  const { countryLabel, countrySelect, countryMessage } = selectElementFunction(['Argentina', 'Brasil', 'Chile', 'Colombia', 'Uruguay'], 'Seleccione un país')

  // Input para el código postal
  const { postalLabel, postalInput, postalMessage } = postalCodeInputFunction()

  fieldsetCountry.append(countryLabel, countrySelect, countryMessage, postalLabel, postalInput, postalMessage)

  // Fieldset para contraseña
  const { fieldset: fieldsetPassword } = fieldSetComponent('Contraseña')

  // Input para la contraseña
  const { passwordLabel, passwordInput, passwordMessage } = passwordInputFunction()

  // Input para confirmar contraseña
  const { confirmLabel, confirmInput, confirmMessage } = passwordConfirmInputFunction()

  fieldsetPassword.append(passwordLabel, passwordInput, passwordMessage, confirmLabel, confirmInput, confirmMessage)

  // Botón de enviar
  const { button: submitButton } = button('submit', 'btn-submit', 'Enviar')
  const { button: resetButton } = button('reset', 'btn-reset', 'Limpiar')

  resetButton.addEventListener('click', (e) => {
    e.preventDefault()
    form.reset()
    validateEmail(emailInput, emailMessage, 'email')
    const countryMessage = document.getElementById('countryMessage')
    countryMessage.textContent = 'Seleccione un País'
    countryMessage.classList.remove('message', 'messageSuccess', 'messageError')
    countryMessage.classList.add('message')
    const countrySelect = document.getElementById('country')
    countrySelect.value = 'Seleccione un país'
    countrySelect.classList.remove('borderError', 'borderSuccess', 'country')
    countrySelect.classList.add('country')
    validatePassword(passwordInput, passwordMessage, 'password')
    validatePostalCode(postalInput, postalMessage, 'postalCode')
    validatePasswordConfirm(confirmInput, passwordInput, confirmMessage, 'confirm-password')
  })

  // Agregar validación en tiempo real-------------------------------------------------------------------------------------------------------------

  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
  })

  emailInput.addEventListener('input', () => {
    validateEmail(emailInput, emailMessage, 'email')
  })

  // Validación al cambiar la selección
  countrySelect.addEventListener('change', () => {
    validateOptionInputs(countrySelect, countryMessage, 'country')
  })

  // Validación al salir del campo si no se seleccionó nada
  countrySelect.addEventListener('blur', () => {
    validateOptionInputs(countrySelect, countryMessage, 'country')
  })

  passwordInput.addEventListener('input', () => {
    validatePassword(passwordInput, passwordMessage, 'password')
  })

  confirmInput.addEventListener('input', () => {
    validatePasswordConfirm(confirmInput, passwordInput, confirmMessage, 'confirm-password')
  })

  postalInput.addEventListener('input', () => {
    validatePostalCode(postalInput, postalMessage, 'postalCode')
  })

  form.append(emailLabel, emailInput, emailMessage, fieldsetCountry, fieldsetPassword, resetButton, submitButton)

  // Retornar el formulario
  return form
}

export { createForm }
