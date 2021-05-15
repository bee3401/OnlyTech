const mongoose = require ("mongoose");

const postSchema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    description: {type: String, required: true},
    typeProject: {type: String, required: true},
    lookingFor: {type: String, required: true},
    projectStage: {type: Number, required: true},
    github: {type: String, required: false},
    /*image: {data: Buffer, contentType: String, requrired: false}*/
});

module.exports = Post = mongoose.model("post", postSchema);