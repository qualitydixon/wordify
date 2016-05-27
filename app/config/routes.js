import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MainContainer from '../containers/MainContainer'
import Home from '../components/Home'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

module.exports = routes
