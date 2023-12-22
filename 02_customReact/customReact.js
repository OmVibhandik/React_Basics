function customRendor(reactElement,mainContainer){
    const domElement=document.createElement(document.type)
    domElement.innerHTML = reactElement.children
    
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to vist google'
}

const mainContainer=document.querySelector('#root')

customRendor(reactElement,mainContainer)

