// recupero i vari posts
const posts = require('../data/posts.js');

// definizione funzione index
function index (req, res){
    res.json(posts);
}

// definizionedella funzione show
function show (req, res){
    res.send('posts con id' + ' ' + req.params.id);
}

// definizionedella funzione store
function store (req, res){
    res.send('Inserimento di un nuovo post');
}

// definizione della funzione update
function update (req, res){
    res.send('Modifica totale del post' + ' ' + req.params.id);
}

// definizione della funzione modify
function modify(re, res){
    res.send('Modifica parziale di un post' + ' ' + req.params.id);
}

// definizione della funzione destroy
function destroy(req,res){
    res.send(`Cancellazione di un post' ${req.params.id}`);
}

// esporto il controller
module.exports = {index, show, store, update, modify, destroy}