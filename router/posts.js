const express = require ('express');

const router = express.Router();

// importo il file con i posts
const posts = require('../data/posts.js')
// definizione delle singole rotte

// rotta che mostra tutti posts (index)
router.get('/', (req, res) => {
    res.json(posts)
});

// rotta che mostra un posts (show)
router.get('/:id', (req, res) => {
   res.send('posts con id' + ' ' + req.params.id)
});

// rotta inserisce un nuovo post (store)
router.post('/', (req, res) => {
    res.send('Inserimento di un nuovo post');
});

// rotta che modifica totalmente un post (update)
router.put('/:id', (req, res) => {
    res.send('Modifica totale del post' + ' ' + req.params.id);
});

// rotta che modifica parzialmente un post (modify)
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale di un post' + ' ' + req.params.id);
});

// rotta che elimina un post (destroy)
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione di un post' ${req.params.id}`);
});

// esporto le rotte
module.exports = router;
