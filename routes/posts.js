const store = require('../data')
module.exports = {
    getPosts(req, res) {           
        res.status(200).send(store.posts)
    },
    addPost(req, res) {
        store.posts.push(req.body)
        res.status(201).send()  
    },
    updatePost(req, res) {
        store.posts[req.params.id]  = req.body
        res.status(200).send()
    },
    removePost(req, res) {
        store.posts.splice(req.params.id,1)
        res.status(204).send()  
    }    
  }