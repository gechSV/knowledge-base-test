import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store"
import NavigationStore from './store/navigation-store';


export const store = new Store();
export const navigationStore = new NavigationStore();

export const Context = createContext({
    store, navigationStore
})

ReactDOM.render(
    <Context.Provider value={{
        store, navigationStore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);