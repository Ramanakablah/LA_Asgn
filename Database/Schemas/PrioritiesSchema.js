const mongoose  = require("mongoose");

const schema = mongoose.Schema;

const PrioritixerSchema = schema({
    status:{},
    season:{},
    format:{},
    venue:{},
    teams:{},
    gender:{men:10,wemen:9}
});

const PriorityModel = new mongoose.model('Priorities',PrioritixerSchema)
module.exports = PriorityModel;