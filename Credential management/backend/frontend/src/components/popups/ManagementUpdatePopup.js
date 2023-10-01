import React,{useState} from 'react';
import ManagementModal from './CreateModal.js';
const buttonStyle = {
    position: 'fixed',
    zIndex: 1,
    margin: '80px',
    padding: '80px'
}
//this component will update a users credential only from a managertorial position though
function ManagementUpdatePopup(){
  //states
  let [isOpen, setOpen] = useState(false);

  let [username, updateUsername] =  useState('')
  let [name, updateName] =  useState('')
  let [newusername, updatenewUsername] =  useState('')
  let [newname, updatenewName] =  useState('')
  let [email, updateEmail] =  useState('')
  let [password, updatePassword] =  useState('')

  //handles submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //calls register
    register(username, name, newusername, newname, email, password);
    setOpen(false);
 }; 
 //makes request to manager update api if successfull updates a users credentials
  const register = async (username, name, newusername, newname, email, password) => {
    await fetch('/credential/updateManagement', {
    method: 'POST',
    body: JSON.stringify({
      Username:username,
      Name: name,
      Newusername: newusername,
      NewName: newname,
      Email: email,
      Password: password
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    }).then(() => {alert('New user created!')})
    };
    return(
      <>
        <div style={buttonStyle}>
          <button onClick={() => setOpen(true)} style={{fontSize:'25px', marginTop:'100px', marginBottom:'100px'}}>Update</button>

          <ManagementModal open = {isOpen} onClose={() => setOpen(false)}>
          <h3>Update Credentials</h3>
          <form onSubmit={handleSubmit}>
          <h4>Old Username: </h4> 
          <input name="username" onChange={(e) => updateUsername(e.currentTarget.value)} required/><br/>
          <h4>Old Name: </h4> 
          <input name="name" onChange={(e) => updateName(e.currentTarget.value)} required/><br/>
          <h4>New username: </h4> 
          <input name="newusername" onChange={(e) => updatenewUsername(e.currentTarget.value)}/><br/>
          <h4>New Name: </h4> 
          <input name="newname" onChange={(e) => updatenewName(e.currentTarget.value)}/><br/>
          <h4>New Email: </h4> 
          <input onChange={(e) => updateEmail(e.currentTarget.value)} name="email" /><br/>
          <h4>New Password: </h4> 
          <input onChange={(e) => updatePassword(e.currentTarget.value)} name="password" /><br/><br/>
          <button>Submit</button>
        </form>
        </ManagementModal>
        </div>
      </>
    )
}

export default ManagementUpdatePopup;