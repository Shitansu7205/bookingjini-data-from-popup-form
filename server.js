
require('dotenv').config()
const cors = require('cors')
const express = require('express')



const bodyParser = require('body-parser')
const app = express()
const router = require('./router/auth-routers')
const port = process.env.PORT || 8000

app.use(cors()); // Enable CORS for all routes





// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use('/api/auth', router)


app.listen(port, () => console.log('server is running on port 8000'))
