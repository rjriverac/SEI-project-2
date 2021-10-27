import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterDetail from './components/CharacterDetail'
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
          <Route exact path="/characters/:id" component={CharacterDetail}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App