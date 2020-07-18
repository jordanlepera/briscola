import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './i18n'
import './css/style.css'

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line no-undef
)

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef
