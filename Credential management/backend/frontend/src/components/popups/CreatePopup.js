import React,{useState} from 'react';
import CreateModal from './CreateModal.js';
const buttonStyle = {
    position: 'fixed',
    zIndex: 1,
    margin: '80px',
    padding: '80px'
}
//this componenet will create a new user and add the to database
function CreatePopup(){
  //states
  let [isOpen, setOpen] = useState(false);

  let [username, updateUsername] =  useState('')
  let [name, updateName] =  useState('')
  let [email, updateEmail] =  useState('')
  let [password, updatePassword] =  useState('')

  let [ou1, updateOU1] =  useState('')
  let [ou2, updateOU2] =  useState('')
  let [ou3, updateOU3] =  useState('')
  let [ou4, updateOU4] =  useState('')

  let [div1, updateDiv1] =  useState('')
  let [div2, updateDiv2] =  useState('')
  let [div3, updateDiv3] =  useState('')
  let [div4, updateDiv4] =  useState('')
  let [div5, updateDiv5] =  useState('')

  //handles submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //if the var exists they will be added to the arr
    let div = [];
    if(div1){
      div.push(div1);
    }
    if(div2){
      div.push(div2)
    }
    if(div3){
      div.push(div3)
    }
    if(div4){
      div.push(div4)
    }
    if(div5){
      div.push(div5)
    }

    //if the var exists they will be added to the arr
    let ou = [];
    if(ou1){
      ou.push(ou1);
    }
    if(ou2){
      ou.push(ou2)
    }
    if(ou3){
      ou.push(ou3)
    }
    if(ou4){
      ou.push(ou4)
    }
    //calls register function
    register(username, name, email, ou, div, password);
    setOpen(false);
 }; 

 //this function makes a request to the register api and creates new user if successful
  const register = async (username, name, email, ou, div, password) => {
    await fetch('/CoolCloths/Register', {
    method: 'POST',
    body: JSON.stringify({
      Username:username,
      Name: name,
      Email: email,
      Password: password,
      Ou:ou,
      Div: div
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    }).then(() => console.log(username, name, email, ou, div, password))
    };
    return(
      <>
        <div style={buttonStyle}>
          <button onClick={() => setOpen(true)} style={{fontSize:'25px'}}>Create</button>

          <CreateModal open = {isOpen} onClose={() => setOpen(false)}>
          <h3>Create new Credentials</h3>
          <form onSubmit={handleSubmit}>
          <h4>Username: </h4> 
          <input name="username" onChange={(e) => updateUsername(e.currentTarget.value)} required/><br/>
          <h4>Name: </h4> 
          <input name="name" onChange={(e) => updateName(e.currentTarget.value)} required/><br/>
          <h4>Email: </h4> 
          <input onChange={(e) => updateEmail(e.currentTarget.value)} name="email" required/><br/>
          <h4>OU</h4>
          <select name="ou" style={{textAlign:'center'}} onChange={(e) => updateOU1(e.target.value)} required>
            <option value=''>--</option>
            <option value='News Management'>News Management</option>
            <option value="Software Reviews">Software Reviews</option>
            <option vaue="Hardware Reviews">Hardware Reviews</option>
            <option value="Opinion Publishing">Opinion Publishing</option>
          </select>
          <select name="ou" style={{textAlign:'center'}} onChange={(e) => updateOU2(e.target.value)}>
            <option value=''>--</option>
            <option value='News Management'>News Management</option>
            <option value="Software Reviews">Software Reviews</option>
            <option vaue="Hardware Reviews">Hardware Reviews</option>
            <option value="Opinion Publishing">Opinion Publishing</option>
          </select>
          <select name="ou" style={{textAlign:'center'}} onChange={(e) => updateOU3(e.target.value)}>
            <option value=''>--</option>
            <option value='News Management'>News Management</option>
            <option value="Software Reviews">Software Reviews</option>
            <option vaue="Hardware Reviews">Hardware Reviews</option>
            <option value="Opinion Publishing">Opinion Publishing</option>
          </select>
          <select name="ou" style={{textAlign:'center'}} onChange={(e) => updateOU4(e.target.value)}>
            <option value=''>--</option>
            <option value='News Management'>News Management</option>
            <option value="Software Reviews">Software Reviews</option>
            <option vaue="Hardware Reviews">Hardware Reviews</option>
            <option value="Opinion Publishing">Opinion Publishing</option>
          </select><br/>
          <h4>Division</h4>
          <select name="div1" style={{textAlign:'center'}} onChange={(e) => updateDiv1(e.target.value)} required>
            <option value=''>--</option>
            <option value='div1'>1</option>
            <option value='div2'>2</option>
            <option value='div3'>3</option>
            <option value='div4'>4</option>
            <option value='div5'>5</option>
          </select>
          <select name="div2" style={{textAlign:'center'}} onChange={(e) => updateDiv2(e.target.value)}>
            <option value=''>--</option>
            <option value='div1'>1</option>
            <option value='div2'>2</option>
            <option value='div3'>3</option>
            <option value='div4'>4</option>
            <option value='div5'>5</option>
          </select>
          <select name="div3" style={{textAlign:'center'}} onChange={(e) => updateDiv3(e.target.value)}>
            <option value=''>--</option>
            <option value='div1'>1</option>
            <option value='div2'>2</option>
            <option value='div3'>3</option>
            <option value='div4'>4</option>
            <option value='div5'>5</option>
          </select>
          <select name="div4" style={{textAlign:'center'}} onChange={(e) => updateDiv4(e.target.value)}>
            <option value=''>--</option>
            <option value='div1'>1</option>
            <option value='div2'>2</option>
            <option value='div3'>3</option>
            <option value='div4'>4</option>
            <option value='div5'>5</option>
          </select>
          <select name="div5" style={{textAlign:'center'}} onChange={(e) => updateDiv5(e.target.value)}>
            <option value=''>--</option>
            <option value='div1'>1</option>
            <option value='div2'>2</option>
            <option value='div3'>3</option>
            <option value='div4'>4</option>
            <option value='div5'>5</option>
          </select><br/>
          <h4>Password: </h4> 
          <input onChange={(e) => updatePassword(e.currentTarget.value)} name="password" required/><br/><br/>
          <button>Submit</button>
        </form>
        </CreateModal>
        </div>
      </>
    )
}

export default CreatePopup;