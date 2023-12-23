import { useState } from "react"


function App() {

  const [color,setColur] = useState("olive")

  return (
      <div className="w-full h-screen duration-200" 
          style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={()=>{setColur("Red")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"red"}}
            >Red</button>
            <button
              onClick={()=>{setColur("Green")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"Green"}}
            >Green</button>
            <button 
              onClick={()=>{setColur("Blue")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"blue"}}
            >Blue</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
