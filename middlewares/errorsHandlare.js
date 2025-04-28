// dichiaro il middlware per il controllo delle rotte non registrate

function errorsHandler(err, req,res, next){
    res.status(500);
    res.json({
        error: err.message,
    });
}

// esporto il middleware
module.exports= errorsHandler;