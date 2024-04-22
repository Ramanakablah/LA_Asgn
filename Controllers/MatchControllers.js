const MatchesModel = require("../Database/Schemas/MatchSchema")
const { Priortize } = require("../Utilities/Methods/Algorithms/Prioritizer")

module.exports.GetAllMatches=(req,res)=>{
    try {     
        MatchesModel.find().then((response)=>{
            console.log(response)
            res.send(response)
        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports.AddNewMatch = (req,res)=>{
    try {
        let {format,key,name,season,start_date,status,teams,venvue,showInApp,gender} = req.body;
        console.log({format,key,name,season,start_date,status,teams,venvue,showInApp,gender});
        MatchesModel.create({format,key,name,season,start_date,status,teams,venvue,showInApp,gender}).then((response)=>{
            res.send(response);
        }).catch((err)=>{
            res.send(err)
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports.UpdateMatches = async (req,res)=>{
    try{
       const match = await MatchesModel.findById(req.body.matchId);
       match={...match,...req.body.changes};
       match.save();
       res.send("Updated");
    }
    catch(error){
        res.send(error)
    }
}

module.exports.PriortizeMatches =(req,res)=>{
    try {
        MatchesModel.find({showInApp:true}).sort({'start_date.iso':1}).then((response)=>{
            const Matches =  Priortize(response);
            res.send( Matches.slice(0,6))
        })
    } catch (error) {
        res.send(error)
    }
}