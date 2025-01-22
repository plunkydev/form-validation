import './style.css'
import { createForm } from './components/renderForm.js'

const mainContainer = document.querySelector('.mainContainer')
mainContainer.appendChild(createForm())
