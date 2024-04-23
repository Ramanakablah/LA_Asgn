const MatchRouter = require('express').Router();
const { GetMatch, AddNewMatch, UpdateMatches, PriortizeMatches } = require('../Controllers/MatchControllers');
const { ValidateNewMatches } = require('../Utilities/Validations/Validators');

MatchRouter.get('/getMatch',GetMatch);
// MatchRouter.post('/addMatch',ValidateNewMatches,AddNewMatch);
MatchRouter.post('/addMatch',AddNewMatch);
MatchRouter.put('/updateMatch',UpdateMatches);
MatchRouter.get('/getPriorityList',PriortizeMatches)

module.exports=MatchRouter