import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/header.css'
import { Route, Switch } from 'wouter'
import { Game2048 } from './components/game2048'
import { Page404 } from './pages/page404/page404'
import { ScorePage } from './pages/scores/scorePage'
import { Initializer } from './components/initializer/initializer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Initializer />
    <Switch>
      <Route path='/'>
        <Game2048 />
      </Route>
      <Route path='/score'>
        <ScorePage />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  </>
)
