import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  
  // useState hook
  const [length,setLength] = useState(6)
  const [numberAllowed,setnumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false) 
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  // useCallback hook
  const passwordGenrator = useCallback(()=>{        // useCallback memorize the fuction by storing it in cache memory it                                               
    let pass = ""                                   // is used when we have to call any function repeatadly
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*()_+=;:"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      
      pass+=str.charAt(char)
    }
    setPassword(pass)                                 // this is used to optimise the code as change
  },[length,numberAllowed,charAllowed,setPassword])   //  in anyof this will save the password in cache memory

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,9)
    // window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect hook
  useEffect(()=>{                                      // useEffect is used for calling the fuction 
    passwordGenrator()                                 // if any of given condition changes
  },[length,numberAllowed,charAllowed,passwordGenrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3 py-2'>Password Genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-4'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />  
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='curse-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                  setnumberAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setcharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
