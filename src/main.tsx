import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Switch } from 'wouter'
import { Game2048 } from './components/game2048'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Switch>
    <Route path='/'>
      <Game2048 />
    </Route>
  </Switch>
)
