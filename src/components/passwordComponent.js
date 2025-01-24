export const passwordInputFunction = () => {
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

  return { passwordLabel, passwordInput, passwordMessage }
}
