import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {

 
  
  return (
    <>
      <h1>Project 2</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
