// dichiaro il middleware per il controllo delle rotte non registrate

function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not found",
        message: "Pagina non trovata"
    });
}

// esporto il middleware
module.exports = notFound;