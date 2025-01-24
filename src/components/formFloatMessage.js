const formFloatMessage = (messagecurrent, color, display) => {
  const message = document.createElement('span')
  message.id = 'floating-message'
  message.className = 'floating-message'
  message.textContent = messagecurrent
  message.style.display = display
  message.style.color = color
  message.onclick = () => { message.style.display = 'none' }
  document.body.appendChild(message)
  document.body.addEventListener('click', () => { message.style.display = 'none' })
  return message
}

export { formFloatMessage }
