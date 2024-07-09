function customRender(element, container){
    const domElement = document.createElement(element.type);
    // domElement.href = element.props.href;
    // domElement.target = element.props.target;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);
    domElement.innerText= element.children;
    container.appendChild(domElement);
}



const reactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target:"_blank",
    },
    children: "Click me to visit google"
}


const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);

