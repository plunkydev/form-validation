export const selectElementFunction = (options, placeholder) => {
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
  placeholderOption.textContent = placeholder
  countrySelect.appendChild(placeholderOption)

  // Agregar las opciones
  options.forEach(country => {
    const option = document.createElement('option')
    option.setAttribute('value', country.toLowerCase())
    option.textContent = country
    countrySelect.appendChild(option)
  })

  const countryMessage = document.createElement('span')
  countryMessage.id = 'countryMessage'
  countryMessage.className = 'message'
  countryMessage.textContent = 'Debe seleccionar un país'

  return { countryLabel, countrySelect, countryMessage }
}
