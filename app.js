// importo express
const express = require('express');

// inizzializzo express nella variabile app
const app = express();

// definisco la porta del server
const port = 3000;

// importo gli assets statici
app.use(express.static('public'));

// importo le rotte dal router
const postsRouter = require('./router/postsRouter.js');

// importazione dei middlewares per la gestione delle rotte non registrate 
// e per la gestione degli errori
const errorsHandler = require('./middlewares/errorsHandlare.js');
const notFound = require('./middlewares/notFound.js');

// uso il body parser
app.use(express.json());

// utilizzo il router
app.use('/posts', postsRouter);

// definisco la rotta base
app.get('/', (req, res) => {
    res.send('Homepage')
});

// registrazione dei middlewares per la gestione delle rotte non registrate
// e per la gestione degli errori.
app.use(errorsHandler);
app.use(notFound);

// metto in ascolto il server di eventuali richieste
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`)
});