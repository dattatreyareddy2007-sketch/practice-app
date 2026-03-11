//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Demo from './components/Demo';
import PropsDemo1 from './PropsDemo1';
import PropsDemo2 from './PropsDemo2';


function App() 
{ 
  let a=100,name="klu",name2="kncjiweu"
  let emp = {"id":100,"name":"klu","gender":"male"}
    return (
    <div>
     <h1>Practice app</h1>
     <h2>This is output of App component</h2>
     <Demo/>
     <PropsDemo1 a={a} txt={name} emp={emp}/>
     <PropsDemo2 a={a} name2={name2} details={emp} />
    </div>
  )
}

export default App
