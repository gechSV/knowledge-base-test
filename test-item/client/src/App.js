import React, { useContext, useEffect} from 'react';
import './App.css';
import { Context } from './index';
import LoginForm from './components/LoginForm/LoginForm';
import { observer } from 'mobx-react-lite';

function App(){
  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
        store.checkAuth();
    }
  }, [store])

  if(!store.isAuth){
    return(
    <div className="App">
      <header className="App-header">
        <LoginForm/>
      </header>
    </div>)
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
  

export default observer(App);
