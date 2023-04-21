import { Outlet } from "react-router-dom"
import { Global } from "./styles/global"


function App() {
  return (
    <>
      <Global />
      <Outlet />
    </>
  )
}

export default App
