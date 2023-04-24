/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './pages/Search/index.tsx'
import Team from './pages/Team/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path='/' element={<Search />} />
					<Route path={'/teams'} element={<Team />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)
