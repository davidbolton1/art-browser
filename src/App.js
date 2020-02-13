import React from 'react';
import './App.css';
import ArtSearch from './containers/ArtSearchContainer';
import {createStore, applyMiddleware} from 'redux';
import {art} from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

// Middlware manipulates actions before they get to the reducer

// thunk lets you write actions that return functions instead of objects
// can write multiple step dispatches

const store = createStore(art, applyMiddleware(ReduxThunk));
store.subscribe(() => {
    console.table(store.getState());
})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ArtSearch />
    </div>
    </Provider>
  );
}

export default App;
