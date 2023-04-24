import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './pages/Search/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path='/' element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
