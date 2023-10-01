import {useState, useEffect} from 'react'
import './main.css'
import CreatePopup from './popups/CreatePopup';

//users with normal permissions will be met with this page
function NormalUser(){
    let [user, userUpdate] = useState();

    //States of news management div 1 - 5 
    let [nm_div1, nm_divUpdate1] = useState([]);
    let [nm_div2, nm_divUpdate2] = useState([]);
    let [nm_div3, nm_divUpdate3] = useState([]);
    let [nm_div4, nm_divUpdate4] = useState([]);
    let [nm_div5, nm_divUpdate5] = useState([]);

    //fetchs to news management api 
    useEffect(() =>{
        fetch('/news_management/div1')
        .then(result => result.json())
        .then(res => {
            nm_divUpdate1(res)
            console.log(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/news_management/div2')
        .then(result => result.json())
        .then(res => {
            nm_divUpdate2(res)
            console.log(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/news_management/div3')
        .then(result => result.json())
        .then(res => {
            nm_divUpdate3(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/news_management/div4')
        .then(result => result.json())
        .then(res => {
            nm_divUpdate4(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/news_management/div5')
        .then(result => result.json())
        .then(res => {
            nm_divUpdate5(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    // //States of software reviews div 1 - 5 
    let [sr_div1, sr_divUpdate1] = useState();
    let [sr_div2, sr_divUpdate2] = useState();
    let [sr_div3, sr_divUpdate3] = useState();
    let [sr_div4, sr_divUpdate4] = useState();
    let [sr_div5, sr_divUpdate5] = useState();

    //fetches to software  review api
    useEffect(() =>{
        fetch('/software_reviews/div1')
        .then(result => result.json())
        .then(res => {
            sr_divUpdate1(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[]);

    useEffect(() =>{
        fetch('/software_reviews/div2')
        .then(result => result.json())
        .then(res => {
            sr_divUpdate2(res)
            console.log(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/software_reviews/div3')
        .then(result => result.json())
        .then(res => {
            sr_divUpdate3(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/software_reviews/div4')
        .then(result => result.json())
        .then(res => {
            sr_divUpdate4(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/software_reviews/div5')
        .then(result => result.json())
        .then(res => {
            sr_divUpdate5(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    // //States of opinion publishing div 1 - 5 
    let [op_div1, op_divUpdate1] = useState();
    let [op_div2, op_divUpdate2] = useState();
    let [op_div3, op_divUpdate3] = useState();
    let [op_div4, op_divUpdate4] = useState();
    let [op_div5, op_divUpdate5] = useState();

    //fetches to opinion publishing api
    useEffect(() =>{
        fetch('/opinion_publishing/div1')
        .then(result => result.json())
        .then(res => {
            op_divUpdate1(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[]);

    useEffect(() =>{
        fetch('/opinion_publishing/div2')
        .then(result => result.json())
        .then(res => {
            op_divUpdate2(res)
            console.log(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/opinion_publishing/div3')
        .then(result => result.json())
        .then(res => {
            op_divUpdate3(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/opinion_publishing/div4')
        .then(result => result.json())
        .then(res => {
            op_divUpdate4(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/opinion_publishing/div5')
        .then(result => result.json())
        .then(res => {
            op_divUpdate5(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])
        
    
    // //States of hardware reviews div 1 - 5 
    let [hr_div1, hr_divUpdate1] = useState();
    let [hr_div2, hr_divUpdate2] = useState();
    let [hr_div3, hr_divUpdate3] = useState();
    let [hr_div4, hr_divUpdate4] = useState();
    let [hr_div5, hr_divUpdate5] = useState();

    //fetches to hardware reviews api
    useEffect(() =>{
        fetch('/hardware_reviews/div1')
        .then(result => result.json())
        .then(res => {
            hr_divUpdate1(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[]);

    useEffect(() =>{
        fetch('/hardware_reviews/div2')
        .then(result => result.json())
        .then(res => {
            hr_divUpdate2(res)
            console.log(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/hardware_reviews/div3')
        .then(result => result.json())
        .then(res => {
            hr_divUpdate3(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/hardware_reviews/div4')
        .then(result => result.json())
        .then(res => {
            hr_divUpdate4(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])

    useEffect(() =>{
        fetch('/hardware_reviews/div5')
        .then(result => result.json())
        .then(res => {
            hr_divUpdate5(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[])
        
    //login
    useEffect(() =>{
        fetch('/CoolCloths/login')
        .then(result => result.json())
        .then(res => {
            userUpdate(res)
        }).catch(error => console.log('Unable to fetch data:', error));
    },[]);

    //the user will be met with certain pages if they are part of that division and OU
    if(user !== undefined && nm_div1 !== undefined) {
        if(user.ou.includes('News Management') && user.div.includes('div1')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='newsmanagement'>
            <h2>News Management - Division 1</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  nm_div1.map((cred) => 
                    <tr style={{border:'2px solid black'}} key={cred.Name + cred.Username}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && nm_div2 !== undefined) {
        if(user.ou.includes('News Management') && user.div.includes('div2')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='newsmanagement'>
            <h2>News Management - Division 2</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  nm_div2.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )} 
    }

    if(user !== undefined && nm_div3 !== undefined) {
        if(user.ou.includes('News Management') && user.div.includes('div3')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='newsmanagement'>
            <h2>News Management - Division 3</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  nm_div3.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && nm_div4 !== undefined) {
        if(user.ou.includes('News Management') && user.div.includes('div4')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='newsmanagement'>
            <h2>News Management - Division 4</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  nm_div4.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && nm_div5 !== undefined) {
        if(user.ou.includes('News Management') && user.div.includes('div5')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='newsmanagement'>
            <h2>News Management - Division 5</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  nm_div5.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    // software reviews section

    if(user !== undefined && sr_div1 !== undefined) {
        if(user.ou.includes('Software Reviews') && user.div.includes('div1')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='softwarereviews'>
            <h2>Software Reviews - Division 1</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  sr_div1.map((cred) => 
                    <tr style={{border:'2px solid black'}} key={cred.Name + cred.Username}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && sr_div2 !== undefined) {
        if(user.ou.includes('Software Reviews') && user.div.includes('div2')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='softwarereviews'>
            <h2>Software Reviews - Division 2</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  sr_div2.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )} 
    }

    if(user !== undefined && sr_div3 !== undefined) {
        if(user.ou.includes('Software Reviews') && user.div.includes('div3')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='softwarereviews'>
            <h2>Software Reviews - Division 3</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  sr_div3.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && sr_div4 !== undefined) {
        if(user.ou.includes('Software Reviews') && user.div.includes('div4')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='softwarereviews'>
            <h2>Software Reviews - Division 4</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  sr_div4.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && sr_div5 !== undefined) {
        if(user.ou.includes('Software Reviews') && user.div.includes('div5')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='softwarereviews'>
            <h2>Software Reviews - Division 5</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  sr_div5.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    //opinion publishing section

    if(user !== undefined && op_div1 !== undefined) {
        if(user.ou.includes('Opinion Publishing') && user.div.includes('div1')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='opinionpublishing'>
            <h2>Opinion Publishing - Division 1</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  op_div1.map((cred) => 
                    <tr style={{border:'2px solid black'}} key={cred.Name + cred.Username}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && op_div2 !== undefined) {
        if(user.ou.includes('Opinion Publishing') && user.div.includes('div2')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='opinionpublishing'>
            <h2>Opinion Publishing - Division 2</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  op_div2.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )} 
    }

    if(user !== undefined && op_div3 !== undefined) {
        if(user.ou.includes('Opinion Publishing') && user.div.includes('div3')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='opinionpublishing'>
            <h2>Opinion Publishing - Division 3</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  op_div3.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && op_div4 !== undefined) {
        if(user.ou.includes('Opinion Publishing') && user.div.includes('div4')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='opinionpublishing'>
            <h2>Opinion Publishing - Division 4</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  op_div4.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && sr_div5 !== undefined) {
        if(user.ou.includes('Opinion Publishing') && user.div.includes('div5')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='opinionpublishing'>
            <h2>Opinion Publishing - Division 5</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  op_div5.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    //hardware reviews section

    if(user !== undefined && hr_div1 !== undefined) {
        if(user.ou.includes('Hardware Reviews') && user.div.includes('div1')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='hardwarereviews'>
            <h2>Hardware Reviews - Division 1</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  hr_div1.map((cred) => 
                    <tr style={{border:'2px solid black'}} key={cred.Name + cred.Username}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && op_div2 !== undefined) {
        if(user.ou.includes('Hardware Reviews') && user.div.includes('div2')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='hardwarereviews'>
            <h2>Hardware Reviews - Division 2</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  hr_div2.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )} 
    }

    if(user !== undefined && hr_div3 !== undefined) {
        if(user.ou.includes('Hardware Reviews') && user.div.includes('div3')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='hardwarereviews'>
            <h2>Hardware Reviews - Division 3</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  hr_div3.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && hr_div4 !== undefined) {
        if(user.ou.includes('Hardware Reviews') && user.div.includes('div4')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='hardwarereviews'>
            <h2>Hardware Reviews - Division 4</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  hr_div4.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }

    if(user !== undefined && hr_div5 !== undefined) {
        if(user.ou.includes('Hardware Reviews') && user.div.includes('div5')){
          return(
            <div id='wholePage'>
            <CreatePopup/>
            <div id='hardwarereviews'>
            <h2>Hardware Reviews - Division 1</h2>
            <table style={{border:'2px solid black', borderCollapse:'collapse'}}>
            <tbody>
              <tr style={{border:'2px solid black', padding:'10px'}}>
                  <th style={{border:'2px solid black'}}>Username</th>
                  <th style={{border:'2px solid black'}}>Name</th>
                  <th style={{border:'2px solid black'}}>Email</th>
                  <th style={{border:'2px solid black'}}>Ou</th>
                  <th style={{border:'2px solid black'}}>Division</th>
                  <th style={{border:'2px solid black'}}>Role</th>
              </tr>
                {
                  hr_div5.map((cred) => 
                    <tr style={{border:'2px solid black'}}>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Username}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Name}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Email}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Ou}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Division}</td>
                      <td style={{border:'2px solid black', padding:'10px'}}>{cred.Role}</td>
                    </tr>
                  )
                }
                </tbody>
            </table>
            </div>
          </div>
        )}
    }
}

export default NormalUser;