import React, {useState} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import './style.css'
import Header from './components/Header'//uses the string template format
import Todos from './components/TodoComponents/Todos'//
import Jokes from './components/JokeComponents/Jokes'
import Flexbox from './components/FlexboxComponents/Flexbox'
import Specificity from './components/SpecificityComponents/Specificity'
import MemeRequest from "./components/MemeComponents/MemeRequest";

function App() {



  return (
      <div className="Summer-2019-Practice">
          <Router>
              <Header/>
              <Switch>
                  <Route exact path="/todos" component={Todos} />
                  <Route exact path="/jokes" component={Jokes}/>
                  <Route exact path="/flexbox" component={Flexbox}/>
                  <Route exact path="/specificity" component={Specificity}/>
                  <Route exact path="/memes" component={MemeRequest}/>
              </Switch>

          </Router>
      </div>
  )
}

export default App;
