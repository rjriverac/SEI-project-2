import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterIndex from './components/CharacterIndex'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {

 
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={CharacterIndex}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
