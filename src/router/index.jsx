import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import App from './App.jsx'
import home from '../pages/home/home.jsx'

const RouterList = [
  {
    component: home,
    path: '/'
  }
]
const RouterMap = () => (
  <BrowserRouter>
    <App>
      <Switch>
        {RouterList.map((item,index )=> (
          <Route
            key={index}
            exact={true}
            path={item.path}
            component={item.component}
          />
        ))}
      </Switch>
    </App>
  </BrowserRouter>
)

export default RouterMap