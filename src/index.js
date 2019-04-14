import React from 'react'
import ReactDom from 'react-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import {
  Provider
} from 'react-redux'
import {
  BrowserRouter,
  Route, 
  Switch
} from 'react-router-dom'
import NewAuth from './component/authroute/authroute'
import './index.css'
import './config'
import newLogin from './container/login/login';
import newRegister from './container/register/register';
import newQianchenginfo from './container/newqianchenginfo/newqianchenginfo';
import reducers from './reducers'
import NewDashboard from './component/dashboard/dashboard'

import newBossinfo from './container/bossinfo/bossinfo.js';

const store = createStore(reducers,compose(
  applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
 
 
))
ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
          <div>
          <NewAuth></NewAuth>
            <Switch>
            <Route path='/bossinfo' component={newBossinfo}></Route>
            <Route path='/qianchenginfo' component={newQianchenginfo}></Route>
            <Route path = '/login' component = {newLogin}></Route> 
            <Route path = '/register' component = {newRegister}></Route> 
            <Route component={NewDashboard}></Route>
            </Switch>
        </div>
        </BrowserRouter> 
      </Provider>),
      document.getElementById('root')
    )
