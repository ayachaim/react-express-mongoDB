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
import reducers from './reducers'

import newBossinfo from './container/bossinfo/bossinfo.js';

const store = createStore(reducers,compose(
  applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
 
 
))
ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
          <div>
          <NewAuth></NewAuth>
          
            <Route path='/bossinfo' component={newBossinfo}></Route>
            <Route path='/qianchenginfo'></Route>
            <Route path = '/login'component = {newLogin}></Route> 
            <Route path = '/register'component = {newRegister}></Route> 
          
        </div>
        </BrowserRouter> 
      </Provider>),
      document.getElementById('root')
    )
