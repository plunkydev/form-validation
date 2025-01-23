const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const postalCodeRegex = /^[0-9]{4,6}$/

const validateEmail = (input, message, classInput) => {
  if (input.value === '') {
    message.textContent = 'Mensaje'
    message.classList.remove('message', 'messageSuccess', 'messageError')
    message.classList.add('message')
    input.classList.remove('borderSuccess', 'borderError', classInput)
    input.classList.add(classInput)
  } else {
    if (emailRegex.test(input.value)) {
      message.textContent = 'Email válido'
      message.classList.remove('message', 'messageError')
      message.classList.add('messageSuccess')
      input.classList.remove('borderError', 'borderSuccess', classInput)
      input.classList.add('borderSuccess')
    } else {
      message.textContent = 'Email no válido'
      message.classList.remove('message', 'messageSuccess')
      message.classList.add('messageError')
      input.classList.remove('borderSuccess', 'borderError', classInput)
      input.classList.add('borderError')
    }
  }
}

const validateOptionInputs = (input, message, classInput) => {
  if (input.value === '') {
    message.textContent = 'Seleccione un Pais'
    message.classList.remove('message', 'messageSuccess', 'messageError')
    message.classList.add('messageError')
    input.classList.remove('borderSuccess', 'borderError', classInput)
    input.classList.add('borderError')
  } else {
    message.textContent = 'Pais seleccionado'
    message.classList.remove('message', 'messageError')
    message.classList.add('messageSuccess')
    input.classList.remove('borderError', 'borderSuccess', classInput)
    input.classList.add('borderSuccess')
  }
}

const validatePostalCode = (input, message, classInput) => {
  if (input.value === '') {
    message.textContent = 'Mensaje'
    message.classList.remove('message', 'messageSuccess', 'messageError')
    message.classList.add('message')
    input.classList.remove('borderSuccess', 'borderError', classInput)
    input.classList.add(classInput)
  } else {
    if (postalCodeRegex.test(input.value)) {
      message.textContent = 'Código postal válido'
      message.classList.remove('message', 'messageError')
      message.classList.add('messageSuccess')
      input.classList.remove('borderError', 'borderSuccess', classInput)
      input.classList.add('borderSuccess')
    } else {
      message.textContent = 'El código postal debe tener entre 4 y 6 dígitos numéricos'
      message.classList.remove('message', 'messageSuccess')
      message.classList.add('messageError')
      input.classList.remove('borderSuccess', 'borderError', classInput)
      input.classList.add('borderError')
    }
  }
}

const validatePassword = (input, message, classInput) => {
  if (input.value === '') {
    message.textContent = 'La contraseña debe tener mayusculas, minusculas, numeros y al menos 8 caracteres'
    message.classList.remove('message', 'messageSuccess', 'messageError')
    message.classList.add('message')
    input.classList.remove('borderSuccess', 'borderError', classInput)
    input.classList.add(classInput)
  } else {
    if (passwordRegex.test(input.value)) {
      message.textContent = 'Contraseña válida'
      message.classList.remove('message', 'messageError')
      message.classList.add('messageSuccess')
      input.classList.remove('borderError', 'borderSuccess', classInput)
      input.classList.add('borderSuccess')
    } else {
      message.textContent = 'La contraseña debe tener mayusculas, minusculas, numeros y al menos 8 caracteres'
      message.classList.remove('message', 'messageSuccess')
      message.classList.add('messageError')
      input.classList.remove('borderSuccess', 'borderError', classInput)
      input.classList.add('borderError')
    }
  }
}

const validatePasswordConfirm = (confirmInput, inputPassword, message, classInput) => {
  if (confirmInput.value === '') {
    message.textContent = 'Mensaje'
    message.classList.remove('message', 'messageSuccess', 'messageError')
    message.classList.add('message')
    confirmInput.classList.remove('borderSuccess', 'borderError', classInput)
    confirmInput.classList.add(classInput)
  } else {
    if (confirmInput.value === inputPassword.value) {
      message.textContent = 'Contraseñas coinciden'
      message.classList.remove('message', 'messageError')
      message.classList.add('messageSuccess')
      confirmInput.classList.remove('borderError', 'borderSuccess', classInput)
      confirmInput.classList.add('borderSuccess')
    } else {
      message.textContent = 'Las contraseñas no coinciden'
      message.classList.remove('message', 'messageSuccess')
      message.classList.add('messageError')
      confirmInput.classList.remove('borderSuccess', 'borderError', classInput)
      confirmInput.classList.add('borderError')
    }
  }
}

export { validateEmail, validateOptionInputs, validatePostalCode, validatePassword, validatePasswordConfirm }
