const express = require('express');
require('dotenv').config();
const Data = require("./Data/Data");
const ConnectorFunction = require('./Database/DatabaseConnector');
const MatchesModel = require('./Database/Schemas/MatchSchema');
const MatchRouter = require('./Router/MatchesRouters');
const PriorityModel = require('./Database/Schemas/PrioritiesSchema');
const { StatusPri, FormatPri, VenuePri , seasonPri, teamsPri, GenderPri } = require('./Data/Weightage');
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

app.get("/setPriority",(req,res)=>{
    try {
        PriorityModel.create({
            status:StatusPri,
            format:FormatPri,
            venue:VenuePri,
            season:seasonPri,
            teams:teamsPri,
            gender:GenderPri
        }).then((response)=>{
            console.log({response})
            res.send(response);
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.listen(process.env.PORT,()=>{
    console.log("Started Server at ",process.env.PORT);
})