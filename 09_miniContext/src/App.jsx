import Profile from "./components/Profile"
import Login from "./components/login"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'



function App() {


  return (
    <UserContextProvider>
      <h1>Hello Cutiee</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
