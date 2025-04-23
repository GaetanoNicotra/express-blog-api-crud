// recupero i vari posts
const posts = require('../data/posts.js');

// definizione funzione index
function index(req, res) {
    // definisco il sistema di filtraggio per tag
    const tag = req.query.tags;
    let filteredTag = posts;
    if (tag) {
        filteredTag = posts.filter((tagCercato) => {
            return tagCercato.tags.includes(tag);
        })
    }
    res.json(filteredTag);
}

// definizione della funzione show
function show(req, res) {
    // restituisvo un singolo post con il tag cercato
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    console.log(post)
    // creo un if per verificare se il post cercato esiste altrimenti scrivo un messaggio d'errore
    if (post === undefined) {
        res.status(404);
        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })

    }
    res.json(post);
}

// definizionedella funzione store
function store(req, res) {
    console.log(req.body);
    // creazione id da inserire nell'elemento
    const newId = posts[posts.length - 1].id + 1
    // recupero con la detrutturazione i dati del nuovo oggetto (post)
    const { title, content, image, tags } = req.body;
    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags
    }

    // pusho il nuovo posts nell'array di ogetti originale
    posts.push(newPost);

    // invio il codice di stato
    res.status(201);
    // restitusico il post in formato json
    res.json(newPost);
    console.log(posts)
}

// definizione della funzione update
function update(req, res) {
    // recupero l'id inserito come paramentro
    const id = parseInt(req.params.id);

    // recupero il post con l'id recuperato dal parametro
    const post = posts.find(post => post.id === id);

    // verifico che il post cercato con l'id recuperato esista
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post non trovato"
        });
    }

    // se il post è stato trovato modifico le propietà che mi interessano
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // restituisco il post modificato
    res.json(post)
    console.log(posts)
}

// definizione della funzione modify
function modify(req, res) {
    res.send('Modifica parziale di un post' + ' ' + req.params.id);
}

// definizione della funzione destroy
function destroy(req, res) {
    // eliminazione del singolo post
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    posts.splice(posts.indexOf(post), 1);
    console.log(posts)
    // creo un if per verificare se il post cercato esiste altrimenti scrivo un messaggio d'errore
    if (post === undefined) {
        res.status(404);
        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    }
}

// esporto il controller
module.exports = { index, show, store, update, modify, destroy };