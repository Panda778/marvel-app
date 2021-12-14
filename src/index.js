import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FilmsProvider } from './context/films-context'

ReactDOM.render(
	<BrowserRouter>
		<FilmsProvider>
			<App />
		</FilmsProvider>
	</BrowserRouter>,
	document.getElementById('root')
)
