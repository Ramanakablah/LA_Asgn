const MatchesModel = require("../Database/Schemas/MatchSchema");
const { Priortize } = require("../Utilities/Methods/Algorithms/Prioritizer");
const { ResponseHandler } = require("../Utilities/Response/ResponseHandler");

module.exports.GetMatch = (req, res) => {
  try {
    const MatchId = req.query.MatchId;
    if(MatchId){
      MatchesModel.findById(MatchId).then((response)=>{
        ResponseHandler(res, 1, 200,null, response);
      }).catch((err)=>{
        ResponseHandler(res, 0,500, err, null);
      })
    }
    else{
      const condition = req.query
      console.log(condition)
      MatchesModel.find(condition)
      .then((response) => {
        ResponseHandler(res, 1, 200,null, response);
      })
      .catch((err) => {
        ResponseHandler(res, 0,500, err, null);
      });
    }
  } catch (err) {
    ResponseHandler(res, 0,500, err, null);
  }
};

module.exports.AddNewMatch = (req, res) => {
  try {
    let {
      format,
      key,
      name,
      season,
      start_date,
      status,
      teams,
      venue,
      showInApp,
      gender,
    } = req.body;
    MatchesModel.create({
      format,
      key,
      name,
      season,
      start_date,
      status,
      teams,
      venue,
      showInApp,
      gender,
    })
      .then((response) => {
        ResponseHandler(res, 1,200, null, "Match Added Successfully");
      })
      .catch((err) => {
        ResponseHandler(res, 0,500, err, null);
    });
} catch (err) {
    ResponseHandler(res, 0,500, err, null);
  }
};

module.exports.UpdateMatches = async (req, res) => {
  try {
    let match = await MatchesModel.findByIdAndUpdate(req.body.matchId,{...req.body.changes},{new:true});
    if (match === null) {
      ResponseHandler(res, 0,400, "No Match with Provided Id Exists", null);
    } else {
      ResponseHandler(res, 1,200, null, "Match Updated");
    }
  } catch (err) {
    ResponseHandler(res, 0,400, err, null);
  }
};

module.exports.PriortizeMatches = (req, res) => {
  try {
    MatchesModel.find({ showInApp: true })
      .sort({ "start_date.iso": 1 })
      .then((response) => {
        const Matches = Priortize(response);
        ResponseHandler(res, 1,200, null, Matches.slice(0, 6));
      });
  } catch (err) {
    ResponseHandler(res, 0,500, err, null);
  }
};
