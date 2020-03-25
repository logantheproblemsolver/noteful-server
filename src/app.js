require( 'dotenv' ).config()
const express = require( 'express' )
const morgan = require( 'morgan' )
const cors = require( 'cors' )
const helmet = require( 'helmet' )
const { NODE_ENV } = require( './config' )
const errorHandler = require( './errorHandler' );
const folderRouter = require( './folders/folder-router' )
const noteRouter = require( './notes/note-router' )

const app = express()

app.use( morgan( ( NODE_ENV === 'production' ) 
  ? 'tiny' 
  : 'dev', 
{ skip : () => NODE_ENV === 'test' }
) )

app.use( helmet() )

app.use( cors() )

app.use('/', (req, res) => {
  res.json({status: true})
})

app.use( '/api', folderRouter )

app.use( '/api', noteRouter )

app.use('/api', (req, res) => {
  res.send('you have stumbpled upon the noteful app!')
})

app.use( errorHandler )

module.exports = app