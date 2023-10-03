import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from "./App.jsx";
// import Random from './random.jsx';

const anotherUser="shivam "
const randomElement = React.createElement (

  /**
   * type,
   * key,
   * ref,
   * pops
   * 
   * 
   */
  'a',
   {href: "https//:google.com" , target:" _blank"},
   'click me to visit google',
   anotherUser
   
)



ReactDOM.createRoot(document.getElementById('root')).render(
 

    randomElement
   /* <Random/>
   <App/>
   <h2>helllo react users</h2>
    <p>Lorem ipsum dolor sit.</p> */
 
)
