import { VFC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { pathTemplates, routeMap } from './routes'

const App: VFC = () => {
  return (
    <Router>
      <Switch>
        {pathTemplates.map((pathTemplate, index) => {
          const { Component } = routeMap[pathTemplate]
          return (
            <Route key={index} path={pathTemplate} exact>
              <Component />
            </Route>
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
