import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventrory from './components/Inventory/Inventrory';
import NotMatch from './components/NotMatch/NotMatch';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path = ' /'>
          <Shop></Shop>
          </Route>
          <Route path = '/shop'>
            <Shop></Shop>
          </Route>
          <Route path = '/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path = '/inventory'>
            <Inventrory></Inventrory>
          </Route>
          <Route path = "*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
