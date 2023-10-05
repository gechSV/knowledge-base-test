import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store"
import NavigationStore from './store/navigation-store';
import TextEditorStore from './components/DocumentEditor/OLDtext-editor-logic';


export const store = new Store();
export const navigationStore = new NavigationStore();
export const textEditorStore = new TextEditorStore();

export const Context = createContext({
    store, navigationStore, textEditorStore
})

ReactDOM.render(
    <Context.Provider value={{
        store, navigationStore, textEditorStore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);