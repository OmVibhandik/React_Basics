import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
        <h1>Calling MyApp function on main page only</h1>
    </div>
  )
}

// function customRendor(reactElement,mainContainer){
//     const domElement=document.createElement(document.type)
//     domElement.innerHTML = reactElement.children
    
//     for (const prop in reactElement.props) {
//         domElement.setAttribute(prop,reactElement.props[prop])
//     }

//     mainContainer.appendChild(domElement)
// }

const anotherElement=(
    <a href="http://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google', target: '_blank'},
    'Click me to google'
)



ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />

    // customRendor

    // anotherElement

    // reactElement

    

)
