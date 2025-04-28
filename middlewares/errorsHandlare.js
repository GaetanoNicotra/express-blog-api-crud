// dichiaro il middlware per la gestione degli errori

function errorsHandler(err, req, res, next) {
    res.status(500);
    res.json({
        error: err.message,
    });
}

// esporto il middleware
module.exports = errorsHandler;