const express = require('express');

const router = express.Router();

// importo il file con i posts
const posts = require('../data/posts.js');

// importo il file controller con i posts
const postsController = require('../controllers/postsController.js');

// definisco le singole rotte:

// rotta che mostra tutti posts (index)
router.get('/', postsController.index);

// rotta che mostra un posts (show)
router.get('/:id', postsController.show);

// rotta inserisce un nuovo post (store)
router.post('/', postsController.store);

// rotta che modifica totalmente un post (update)
router.put('/:id', postsController.update);

// rotta che modifica parzialmente un post (modify)
router.patch('/:id', postsController.modify);

// rotta che elimina un post (destroy)
router.delete('/:id', postsController.destroy);

// esporto le rotte
module.exports = router;
