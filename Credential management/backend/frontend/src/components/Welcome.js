import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './success.css'

//this component welcomes the user apon a successful login
function Welcome(){
    let [user, userUpdate] = useState()

    useEffect(() =>{
        fetch('/CoolCloths/login')
        .then(result => result.json())
        .then(res => {
            userUpdate(res)
            console.log(res)
        }).catch(error => {console.log('Unable to fetch data:', error)});
    },[]);

    if(user !== undefined){
        if(user.role === 'normal'){
            return(
                <div id='welcome'>
                  <h1>Welcome {user.username}</h1>
                  <Link to='/NormalPage'>Continue</Link>
                </div>
            )
        }
        if(user.role === 'management'){
            return(
              <div id='welcome'>
                <h1>Welcome {user.username}</h1>
                <Link to='/ManagementPage'>Continue</Link>
             </div>
            )
            
        }
        if(user.role === 'admin'){
            return(
                <div id='welcome'>
                    <h1>Welcome {user.username}</h1>
                  <Link to='/AdminPage'>Continue</Link>
                </div>
            )
        }
    }
    else{
        return(
          <div>
            <p>Loading..</p>
          </div>
        )
    }

}

export default Welcome;