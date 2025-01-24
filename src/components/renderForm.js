import { validateEmail, validateOptionInputs, validatePostalCode, validatePassword, validatePasswordConfirm } from '../validate/formValidate.js'
import { emailInputFunction } from '../components/emailComponent.js'
import { fieldSetComponent } from '../components/fieldSetComponent.js'
import { selectElementFunction } from '../components/selectComponent.js'
import { postalCodeInputFunction } from '../components/postalCodeComponent.js'
import { passwordInputFunction } from '../components/passwordComponent.js'
import { passwordConfirmInputFunction } from '../components/passwordConfirmConponent.js'
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
  const { fieldset: fieldsetCountry } = fieldSetComponent('País y código postal')

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
  const { fieldset: fieldsetPassword } = fieldSetComponent('Contraseña')

  // Input para la contraseña
  const { passwordLabel, passwordInput, passwordMessage } = passwordInputFunction()

  // Input para confirmar contraseña
  const { confirmLabel, confirmInput, confirmMessage } = passwordConfirmInputFunction()

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
