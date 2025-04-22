// importo express
const express = require('express');

// inizzializzo express nella variabile app
const app = express();

// definisco la porta del server
const port = 3000;

// recupero le rotte
const postsRouter = require('./router/posts.js')

// utilizzo il router
app.use('/posts', postsRouter);

// definisco la rotta base
app.get('/', (req, res) => {
    res.send('Homepage')
});

// metto in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
})