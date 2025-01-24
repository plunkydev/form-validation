import './style.css'
import { createForm } from './components/renderForm.js'
import { formFloatMessage } from './components/formFloatMessage.js'

const mainContainer = document.querySelector('.mainContainer')
const body = document.querySelector('body')
body.appendChild(formFloatMessage('', '', 'none'))
mainContainer.appendChild(createForm())
