//npm modules and custom routes function
const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

//initialize 
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//posts api calls 
app.get('/posts', (req,res)=>routes.getPosts(req, res))
app.post('/posts', (req,res)=>routes.addPost(req, res))
app.put('/posts/:id', (req,res)=>routes.updatePost(req, res))
app.delete('/posts/:id', (req,res)=>routes.removePost(req, res))

//comments api calls
app.get('/posts/:id/comments', (req,res)=>routes.getComments(req, res))
app.post('/posts:id/comments', (req,res)=>routes.addComment(req, res))
app.put('/posts/:id/comments/:commentId', (req,res)=>routes.updateComment(req, res))
app.delete('/posts/:id/comments/:commentId',(req,res)=>routes.removeComment(req, res))

//port listener
app.listen(3000)
console.log('Server listening on port 3000...')