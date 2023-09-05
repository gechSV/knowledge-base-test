import { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import './style.css'
import { observer } from 'mobx-react-lite';

export const LoginForm = () => {
  const {store} = useContext(Context);

  useEffect(() => {
  }, [store])

  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  // const [authErrMes, setAuthErrMes] = useState();

  console.log('12321312321312')
  return (
    <section className="login-section">
        <div className='login-form'>

            <div className='input-container'>
              <input 
                id='email' className='input' type='email' placeholder=' ' 
                onChange={e => setMail(e.target.value)}/>
              <div className='cut' style={{'width': "75px"}}></div>
              <label htmlFor="email" className="placeholder">Email</label>
            </div>

            <div className='input-container' style={{"marginTop": "20px"}}>
              <input 
                id='password' className='input' type='password' placeholder=' '
                onChange={e => setPassword(e.target.value)}/>
              <div className='cut' style={{'width': "115px"}}></div>
              <label htmlFor="firstname" className="placeholder">Password</label>
            </div>

            <button className='login-button' onClick = {() => store.login(email, password)}>Вход</button>

            <p className='error-lable'>{ store.authStatusError ? `1` : `2` }</p> 
        </div>
    </section>
  );
}
  
export default observer(LoginForm);
