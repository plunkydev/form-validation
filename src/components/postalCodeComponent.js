export const postalCodeInputFunction = () => {
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

  return { postalLabel, postalInput, postalMessage }
}
