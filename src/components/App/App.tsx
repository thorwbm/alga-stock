import React from 'react'

import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import HomeView from '../../views/HomeView'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
