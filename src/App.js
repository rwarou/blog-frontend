import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={home}/>
      </Switch>
    </BrowserRouter>
  );
}

function home() {
  return <div>
    <h2>homehomehome</h2>
  </div>
}

export default App;
