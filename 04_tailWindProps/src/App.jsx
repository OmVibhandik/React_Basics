import './App.css'
import Card from "./components/Card"


function App() {

  // let myObj = {
  //    gender : "boy",
  //    age: 19
  // }

  // let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Testing Tailwind</h1>
      <Card username='Cutiee' buttonText = "Come inside Me!"/>
      <Card username='Sweetie'/>
    </>
  )
}

export default App
