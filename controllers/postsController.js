// recupero i vari posts
const posts = require('../data/posts.js');

// definizione funzione index
function index(req, res) {
    const tag = req.query.tags;
    let filteredTag = posts;
    if (tag) {
        filteredTag = posts.filter((tagCercato) => {
            return tagCercato.tags.includes(tag);
        })
    }
    res.json(filteredTag);
}

// definizionedella funzione show
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    console.log(post)
    

if(post === undefined){
    res.status(404);
    res.json({
        error: 'Not found',
        message: 'Post non trovato'
    })

}
res.json(post);
}

// definizionedella funzione store
function store(req, res) {
    res.send('Inserimento di un nuovo post');
}

// definizione della funzione update
function update(req, res) {
    res.send('Modifica totale del post' + ' ' + req.params.id);
}

// definizione della funzione modify
function modify(req, res) {
    res.send('Modifica parziale di un post' + ' ' + req.params.id);
}

// definizione della funzione destroy
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    posts.splice(posts.indexOf(post), 1);
    console.log(posts)
    if(post === undefined){
        res.status(404);
        res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
}}

// esporto il controller
module.exports = { index, show, store, update, modify, destroy };