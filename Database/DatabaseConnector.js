const mongoose = require('mongoose');

const ConnectorFunction = ()=>{
    mongoose.connect(process.env.MONGO_URI).then((res)=>{
        console.log("Connected to Database")
    })
};

module.exports = ConnectorFunction;