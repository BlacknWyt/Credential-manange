import {Link} from 'react-router-dom'
import './success.css'

//apon successful registartion the user will be with this page
function RegisterSuccess(){
    return(
        <div id='registersuccess'>
            <h1>You have Successfully registered your account, you may now login</h1>
            <Link to='/'>Go to login page</Link>
        </div>
    )
}

export default RegisterSuccess;