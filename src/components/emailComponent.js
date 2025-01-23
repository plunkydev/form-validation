export const emailInputFunction = () => {
  const emailLabel = document.createElement('label')
  emailLabel.setAttribute('for', 'email')
  emailLabel.textContent = 'Email:'

  const emailInput = document.createElement('input')
  emailInput.id = 'email'
  emailInput.className = 'email'
  emailInput.setAttribute('type', 'email')
  emailInput.setAttribute('name', 'email')
  emailInput.setAttribute('required', true)

  const emailMessage = document.createElement('span')
  emailMessage.id = 'emailMessage'
  emailMessage.className = 'message'
  emailMessage.textContent = 'Mensaje'

  return { emailLabel, emailInput, emailMessage }
}
