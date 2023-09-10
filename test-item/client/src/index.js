import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store"

import './fonts/Roboto/static/RobotoMono-Light.ttf'
import './fonts/Roboto/static/RobotoMono-Bold.ttf'
import './fonts/Roboto/static/RobotoMono-LightItalic.ttf'
import './fonts/Roboto/static/RobotoMono-Italic.ttf'
import './fonts/Roboto/static/RobotoMono-Regular.ttf'


export const store = new Store();

export const Context = createContext({
    store,
})

ReactDOM.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);