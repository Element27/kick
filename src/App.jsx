
// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { TopBar } from "./components/Topbar"
import HomePage from "./pages/Homepage"
import OnBoarding from "./pages/OnBoarding"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"

function App() {
  // const [count, setCount] = useState(0)



  return (
    <div className="font-redhat">
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<OnBoarding />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
