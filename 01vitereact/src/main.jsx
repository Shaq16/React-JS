import { StrictMode } from 'react'
import React from "react"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:'_blank'
//     },
//     children:'google web'
// }

const reactElement = React.createElement(
  'a',                              
  { href: 'https://google.com', target: '_blank' },
  'Google Website'               
);


createRoot(document.getElementById('root')).render(
   reactElement
)
