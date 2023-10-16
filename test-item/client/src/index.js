import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store"
import NavigationStore from './store/navigation-store';
import DocumentEditorStore from './store/document-editor-store';

export const store = new Store();
export const navigationStore = new NavigationStore();
export const documentEditorStore = new DocumentEditorStore();

export const Context = createContext({
    store, navigationStore, documentEditorStore, 
})

ReactDOM.render(
    <Context.Provider value={{
        store, navigationStore, documentEditorStore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);