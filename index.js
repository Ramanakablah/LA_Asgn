const express = require('express');
require('dotenv').config();
const Data = require("./Data/Data");
const ConnectorFunction = require('./Database/DatabaseConnector');
const MatchesModel = require('./Database/Schemas/MatchSchema');
const MatchRouter = require('./Router/MatchesRouters');
const app = express();

ConnectorFunction();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello There')
})

app.use("/matches",MatchRouter)

app.get("/insertmany",(req,res)=>{
    try {
        MatchesModel.insertMany(Data).then((response)=>{
            res.send(response);
        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(process.env.PORT,()=>{
    console.log("Started Server at ",process.env.PORT);
})