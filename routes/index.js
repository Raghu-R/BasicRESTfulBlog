//import functions
const posts = require('./posts')
const comments = require('./comments')

module.exports = {
    getPosts(req, res){
        posts.getPosts(req, res)
    },
    addPost(req, res){
        posts.addPost(req, res)
    },
    updatePost(req, res){
        posts.updatePost(req, res)
    },
    removePost(req, res){
        posts.removePost(req, res)
    },
    getComments(req, res) {        
        comments.getComments(req,res)
    },
    addComment(req, res) {
        comments.addComment(req, res)
    },
    updateComment(req, res) {
        comments.updateComment(req,res)
    },
    removeComment(req, res) {
        comments.removeComment(req,res)
    }
}

