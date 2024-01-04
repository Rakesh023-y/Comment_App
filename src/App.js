import logo from './logo.svg';
import './App.css';
import Main from './comment/Main';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {thunk} from 'redux-thunk';
import { reducers } from './reducer';

function App() {
  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <div className=''>
        <Provider store={store}>
      <Router>
        <div className='App'>
          <Route exact path="/" component={Main} />
        </div>
          
      </Router>
    </Provider>
      {/* <Main/>*/}
    </div> 
  );
}

export default App;
