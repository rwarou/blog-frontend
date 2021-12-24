import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Dashboard } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
