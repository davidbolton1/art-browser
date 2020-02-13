import React from 'react';
import './App.css';
import ArtSearch from './containers/ArtSearchContainer';
import {createStore} from 'redux';
import {art} from './reducers';
import {Provider} from 'react-redux';

const store = createStore(art);
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
