function createForm () {
  // Crear el formulario
  const form = document.createElement('form')
  form.id = 'registrationForm'
  form.className = 'form'
  form.setAttribute('name', 'registrationForm')
  form.setAttribute('method', 'post')

  // Input para el email
  const emailLabel = document.createElement('label')
  emailLabel.setAttribute('for', 'email')
  emailLabel.textContent = 'Email:'

  const emailInput = document.createElement('input')
  emailInput.id = 'email'
  emailInput.className = 'input email'
  emailInput.setAttribute('type', 'email')
  emailInput.setAttribute('name', 'email')
  emailInput.setAttribute('required', true)

  form.appendChild(emailLabel)
  form.appendChild(emailInput)

  // Fieldset para país y código postal
  const fieldsetCountry = document.createElement('fieldset')
  const legendCountry = document.createElement('legend')
  legendCountry.textContent = 'País y Código Postal'
  fieldsetCountry.appendChild(legendCountry)

  // Select para los países
  const countryLabel = document.createElement('label')
  countryLabel.setAttribute('for', 'country')
  countryLabel.textContent = 'País:'

  const countrySelect = document.createElement('select')
  countrySelect.id = 'country'
  countrySelect.className = 'input country'
  countrySelect.setAttribute('name', 'country')
  countrySelect.setAttribute('required', true);

  ['Colombia', 'Venezuela', 'Ecuador', 'Perú', 'Chile'].forEach(country => {
    const option = document.createElement('option')
    option.setAttribute('value', country.toLowerCase())
    option.textContent = country
    countrySelect.appendChild(option)
  })

  // Input para el código postal
  const postalLabel = document.createElement('label')
  postalLabel.setAttribute('for', 'postalCode')
  postalLabel.textContent = 'Código Postal:'

  const postalInput = document.createElement('input')
  postalInput.id = 'postalCode'
  postalInput.className = 'input postal-code'
  postalInput.setAttribute('type', 'text')
  postalInput.setAttribute('name', 'postalCode')
  postalInput.setAttribute('required', true)
  postalInput.setAttribute('pattern', '\\d{4,6}') // Validar entre 4 y 6 dígitos

  fieldsetCountry.appendChild(countryLabel)
  fieldsetCountry.appendChild(countrySelect)
  fieldsetCountry.appendChild(postalLabel)
  fieldsetCountry.appendChild(postalInput)
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
  passwordInput.className = 'input password'
  passwordInput.setAttribute('type', 'password')
  passwordInput.setAttribute('name', 'password')
  passwordInput.setAttribute('required', true)
  passwordInput.setAttribute('minlength', '8')

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

  fieldsetPassword.appendChild(passwordLabel)
  fieldsetPassword.appendChild(passwordInput)
  fieldsetPassword.appendChild(confirmLabel)
  fieldsetPassword.appendChild(confirmInput)
  form.appendChild(fieldsetPassword)

  // Botón de enviar
  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.className = 'btn-submit'
  submitButton.textContent = 'Enviar'
  form.appendChild(submitButton)

  // Agregar el formulario al cuerpo del documento
  return form
}

// Llamar a la función para crear el formulario

export { createForm }
