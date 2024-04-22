const MatchRouter = require('express').Router();
const { GetAllMatches, AddNewMatch, UpdateMatches, PriortizeMatches } = require('../Controllers/MatchControllers');
const { ValidateNewMatches } = require('../Utilities/Validations/Validators');

MatchRouter.get('/getAllMatches',GetAllMatches);
MatchRouter.post('/addMatch',AddNewMatch);
MatchRouter.put('/updateMatch',UpdateMatches);
MatchRouter.get('/getPriorityList',PriortizeMatches)

module.exports=MatchRouter