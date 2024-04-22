const MatchesModel = require("../../Database/Schemas/MatchSchema")


module.exports.ValidateNewMatches=(req,res,next)=>{
    const Mathcesmodels  = new MatchesModel(req.body);
    console.log(req.body)
    const Validationerror = Mathcesmodels.validateSync();

    console.log({Validationerror});

    next();
}