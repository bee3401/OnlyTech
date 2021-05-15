const router = require("express").Router();
const Post = require("../models/postModel");

/*router.post("/", async (req, res) => {
    //retrieve the data from the request
    const {name, user, description, typeProject, lookingFor, projectStage, github} = req.body;
    
    //construct the post model
    const newPost = new Post({
        name, 
        user, 
        description,
        typeProject,
        lookingFor,
        projectStage,
        github
    });
    
    //save post model
    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
    }
    catch(err){
        console.error(err);
    }
});*/


router.post('/posts', (req, res) => {
    console.log(req.body);
    db.collection('Post').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
    })
});


router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});

module.exports = router;