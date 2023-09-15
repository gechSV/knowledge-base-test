import React, { useContext, useEffect} from 'react';
import './App.css';
import { Context } from './index';
import LoginForm from './components/LoginForm/LoginForm';
import { observer } from 'mobx-react-lite';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ContentContainer from './components/ContentContainer/ContentContainer';

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
      <NavigationBar/>
      <ContentContainer/>
    </div>
  );
}
  

export default observer(App);
