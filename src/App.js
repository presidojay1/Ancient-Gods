import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FirstPage from './Components/FirstPage/FirstPage';
import Solana from './Components/NavBar/Solana/Solana';
import Error from './Error';
function App() {
  return (
    <Router>
     <Switch>
       <Route exact path='/'>
          <div className='App'>    
            <FirstPage />
          </div>
        </Route>
        <Route exact path='/Solana'>
            <Solana />
        </Route>
        <Route exact path='*'>
            <Error />
        </Route>
        
     </Switch>
    </Router>
  );
}

export default App;
