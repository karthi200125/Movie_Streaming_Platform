import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './Redux/store.js'
import './index.css'
import { Toaster, toast } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="bottom-right" closeButton/>
      <App />
    </Provider>
  </React.StrictMode>,
)
