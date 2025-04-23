// importo express
const express = require('express');

// inizzializzo express nella variabile app
const app = express();

// definisco la porta del server
const port = 3000;

// importo le rotte dal router
const postsRouter = require('./router/posts.js');

// uso il body parser
app.use(express.json());

// utilizzo il router
app.use('/posts', postsRouter);

// definisco la rotta base
app.get('/', (req, res) => {
    res.send('Homepage')
});

// metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
});