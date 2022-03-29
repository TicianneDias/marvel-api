import React from 'react'
import Characters from './components/Characters/Characters'
import NavBar from './components/NavBar/NavBar'
import GlobalStyle from './style/global'


const App = () => {

  

  return (
    <>
    <NavBar/>
    
    <Characters />
    <GlobalStyle/>
    </>
  )
}

export default App