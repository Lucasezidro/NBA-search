import { Outlet } from 'react-router-dom'
import { Global } from './styles/global'
import NavBar from './components/NavBar'


function App() {
  return (
    <>
      <NavBar />
      <Global />
      <Outlet />
    </>
  )
}

export default App
