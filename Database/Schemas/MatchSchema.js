const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const MatchSchema = new Schema({
  format: {
    type: String,
    require: true,
  },
  key: {
    type: String,
    require: true,
  },
  name: {
    type:String,
    require:true
  },
  season: {
    name: {
        type:String,
        require:true
    },
  },
  start_date: {
    iso: {
        type:Date,
        require:true
    },
  },
  status: {
    type:String,
    require:true
  },
  teams: {
    a: {
      name: {
        type:String,
        require:true
      },
    },
    b: {
      name: {
        type:String,
        require:true
      },
    },
  },
  venue: {
    type:String,
    require:true
  },
  showInApp:{
    type:Boolean,
    require:true
  },
  gender:{
    type:String,
    require:true
  },
});

const MatchesModel = mongoose.model('matches',MatchSchema)
module.exports = MatchesModel;