const store = require('../data')
module.exports ={
    getComments(req,res){
        res.status(200).send(store.posts[req.params.id].comments)
    },
    addComment(req, res) {
        store.posts[req.params.id].comments.push(req.body)
        res.status(201).send()  
    },
    updateComment(req, res) {
        store.posts[req.params.id].comments[req.params.commentId]  = req.body
        res.status(200).send()
    },
    removeComment(req, res) {
        store.posts[req.params.id].comments.splice(req.params.commentId,1)
        res.status(204).send()  
    }  
}