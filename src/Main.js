import React from 'react';
import './App.css';
import Home from './Home'
import RepList from './RepList'
import RepInfo from './RepInfo'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={() => <Home />} />
      <Route exact path='/:userName' component={() => <RepList />} />
      <Route exact path='/:userName/:repositoryName' component={() => <RepInfo />} />
    </Switch>
  </main>
)


export default Main;
