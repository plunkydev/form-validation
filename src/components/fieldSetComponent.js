export const fieldSetComponent = (placeholder = '') => {
  const fieldset = document.createElement('fieldset')
  const legend = document.createElement('legend')
  legend.textContent = placeholder
  fieldset.appendChild(legend)
  return { fieldset }
}
