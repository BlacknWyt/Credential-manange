import {Link} from 'react-router-dom'
import './success.css'

//if the user enters incorrect login details they will be met with this page
function NotWelcome(){
    return(
        <div id='notwelcome'>
            <h2>Seems looks like you've entered the wrong details..</h2>
            <div>
                <Link to='/'>Try again?</Link><br/><br/>
                <Link to='/registration'>Register</Link>
            </div>
        </div>
    )
}

export default NotWelcome;