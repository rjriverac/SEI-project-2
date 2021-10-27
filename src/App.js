import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterDetail from './components/CharacterDetail'
import CharacterIndex from './components/CharacterIndex'
import EpisodeIndex from './components/EpisodeIndex'
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
          <Route exact path="/episodes" component={EpisodeIndex}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App