export const button = (type, classList, textContent) => {
  const button = document.createElement('button')
  button.type = type
  button.classList = classList
  button.textContent = textContent

  return { button }
}
