export const passwordConfirmInputFunction = () => {
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

  return { confirmLabel, confirmInput, confirmMessage }
}
