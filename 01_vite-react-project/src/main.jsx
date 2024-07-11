// import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from "./App.jsx";

// function MyApp(){
//   return(
//     <>
//       <h1>Custom Function!!</h1>
//     </>
//   )
// }

// this is not working because of its syntax.
// const ReactElement = {
//   type: 'a',
//   props:{
//       href: "https://google.com",
//       target:"_blank",
//   },
//   children: "Click me to visit google"
// }

// const AnotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google </a>
// )

// const anotherUser = "Chai aur react";

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   ['click me to visit google',
//   anotherUser]
// )

ReactDOM.createRoot(document.getElementById("root")).render(
    <App></App>
  // MyApp()
  // <MyApp></MyApp>
  // AnotherElement
  // reactElement
);
