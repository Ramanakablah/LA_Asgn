const mongoose  = require("mongoose");

const schema = mongoose.Schema;

const PrioritixerSchema = schema({
    status:{},
    season:{},
    format:{},
    venue:{},
    teams:{},
    gender:{}
});

const PriorityModel = new mongoose.model('Priorities',PrioritixerSchema)
module.exports = PriorityModel;