// dichiaro il middleware per la gestione degli errori

function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not found",
        message: "Pagina non trovata"
    });
}

// esporto il middleware
module.exports = notFound;