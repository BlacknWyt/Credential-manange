const express = require('express')
const app = express()
//server starts at this port 
const PORT = 8000;

//routes to posts and gets
const posts = require('./routes/login.js')
const gets = require('./routes/getlogin.js')

//routes to get all credentials from database
const nm_creds = require('./routes/NM_Cred.js')
const sr_creds = require('./routes/SR_Cred.js')
const op_creds = require('./routes/OP_Cred.js')
const hr_creds = require('./routes/HR_Cred.js')

//routes to create and update credentials
const update_creds = require('./routes/updates.js')
const delete_creds = require('./routes/delete.js')

app.listen(PORT, () => {console.log('listening on http://localhost:8000')})

//apis in use
app.use('/CoolCloths', posts);
app.use('/CoolCloths', gets);

app.use('/news_management', nm_creds);
app.use('/software_reviews', sr_creds);
app.use('/opinion_publishing', op_creds);
app.use('/hardware_reviews', hr_creds);

app.use('/credential', update_creds);
app.use('/credential', delete_creds);






