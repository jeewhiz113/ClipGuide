import React from 'react';
import Navbar from './components/Navbar'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

import './App.css';

const store = createStore(authReducer,  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <h1>Hello World</h1>
        <Navbar />
      </Provider>
      
    </div>
  );
}

export default App;

//Tomorrow: create a router that takes the user to the profile page.  In the profile page, the user can add a new question, then a modal pops up and ask the user for the topic
