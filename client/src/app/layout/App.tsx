import NavBar from "./NavBar"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <NavBar imageSrc="/images/ski-logo.png" imageAlt="Company logo, Man skiing" />
      <Outlet />
    </>
  )
}
export default App
