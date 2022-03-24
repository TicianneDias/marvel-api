import React from 'react'
import Characters from './components/Characters/Characters'
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import GlobalStyle from './style/global'


const App = () => {

  

  return (
    <>
    <NavBar/>
    <SearchBar/>
    <Characters />
    <GlobalStyle/>
    </>
  )
}

export default App