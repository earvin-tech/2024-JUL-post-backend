const express = require("express")

const {getPosts} = require("../controllers/postControllers")

const postRouter = express.Router()

// GET - /posts
postRouter.get("/", (request, response) => {
        const posts = getPosts()
        response.json(posts)
    })

// default exports
module.exports = postRouter