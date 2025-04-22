// recupero i vari posts
const posts = require('../data/posts.js');

// definizione funzione index
function index (req, res){
    res.json(posts);
}