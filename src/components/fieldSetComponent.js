export const fieldSetComponent = (placeholder = '') => {
  const fieldsetCountry = document.createElement('fieldset')
  const legendCountry = document.createElement('legend')
  legendCountry.textContent = placeholder
  fieldsetCountry.appendChild(legendCountry)
  return { fieldsetCountry }
}
