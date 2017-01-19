const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')<% if(props.includeDB) { %>
const mongoose = require('mongoose')<% } %>

const PORT = process.env.PORT || 9000

const app = express();
const router = express.Router()



/**
 *
 * Configure App
 *
 */

app.use(morgan('-> :method   :url :status - :response-time ms'))<% if(props.includeClient) { %>
app.use(express.static(path.resolve(__dirname, '../', 'client', 'static')))<% } %>
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



/**
 *
 * Routes
 *
 */
<% if(props.includeAPI) { %>
app.use('/api', require('./api'))<% } %>

router.get('*', (req, res) => {<% if(props.includeClient) { %>
	res.sendFile(path.resolve(__dirname, '../', 'client', 'static', 'index.html'))<% } else { %>
	res.json({
		message: "Hello World !"
	})<% } %>
  	
});

app.use(router)



/**
 *
 * Launch server
 *
 */

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});<% if(props.includeDB) { %>



/**
 *
 * Connect DB
 *
 */

mongoose.connect('mongodb://localhost/<%= props.name %>', { user: '', pass: '' })

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('mongodb connection error: %s', err)
  process.exit()
})
<% } %>
