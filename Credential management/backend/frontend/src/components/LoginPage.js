import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';

//this is the first page the user is met with 
function Login(){
    const navigate = useNavigate()

    //states
    let [user, userUpdate] = useState('');
    let [pwd, pwdUpdate] = useState('');
    let [success, successUpdate] = useState('');

    function userChange(e){
        userUpdate(e.currentTarget.value)
    }
    function pwdChange(e){
        pwdUpdate(e.currentTarget.value)
    }

    //this function handles the submits
    const handleSubmit = (e) => {
      e.preventDefault();
      //calls login in function
      login(user, pwd)
    }

    //this function calls the login api and logs the user in if they have the right input details
    const login = async(username, password) => {
      await fetch('/CoolCloths/login', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify({
          user: username,
          pwd: password
      })
      }).then(result => result.json())
      .then(res => {
        successUpdate(res.success);
        console.log(res.success);
      }).catch(err => {console.log('Unable to fetch data:', err)});
    }
    //if the user enters the wrong input details they will be redirected to the notwelcome page else welcome page
    if(success !== undefined) {
      if(success === true) {
        navigate('/welcome')
      }
      if(success === false) {
        navigate('/notwelcome')
      }
    }

    return(
      <div id='wholepage'>
        <div id='login'>
        <h1><u>Login</u></h1>
        <form onSubmit={handleSubmit}>
            <input placeholder='User name' onChange={(e) => userChange(e)} id='user' name='user'/><br/>
            <input placeholder='Password' onChange={(e) => pwdChange(e)} id='pwd' name='pwd'/><br/><br/>
            <button type='submit'>Login</button>
          <div>
            <h4><Link to='/registration'>Register</Link></h4>
          </div>
        </form>
        </div>
      </div>
    )
}

export default Login;