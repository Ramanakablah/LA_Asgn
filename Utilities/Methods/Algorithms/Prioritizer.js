const PriorityModel = require("../../../Database/Schemas/PrioritiesSchema");
const { DatearrayParser } = require("./Dtaes");

module.exports.Priortize = async (arr, name = "India") => {
  let Priority_Map = await PriorityModel.find()
  Priority_Map = Priority_Map[0];
  arr.sort((a, b) => {
    let aPri = 0,
      bPri = 0;
    aPri += isNaN(Priority_Map.venue[a.venue])?0:Priority_Map.venue[a.venue];
    aPri += isNaN(Priority_Map.status[a.status])?0:Priority_Map.status[a.status];
    aPri += isNaN(Priority_Map.format[a.format])?0:Priority_Map.format[a.format];
    aPri += isNaN(Priority_Map.teams[a.teams.a.name] + Priority_Map.teams[a.teams.b.name])?0:Priority_Map.teams[a.teams.a.name] + Priority_Map.teams[a.teams.b.name];
    aPri += isNaN(Priority_Map.season[a.season.name])?0:Priority_Map.season[a.season.name]
    bPri += isNaN(Priority_Map.venue[a.venue])?0:Priority_Map.venue[a.venue];
    bPri += isNaN(Priority_Map.status[b.status])?0:Priority_Map.status[b.status];
    bPri += isNaN(Priority_Map.format[b.format])?0:Priority_Map.format[b.format];
    bPri += isNaN(Priority_Map.teams[b.teams.b.name] + Priority_Map.teams[b.teams.a.name])?0:Priority_Map.teams[b.teams.b.name] + Priority_Map.teams[b.teams.a.name];
    bPri += isNaN(Priority_Map.season[b.season.name])?0:Priority_Map.season[b.season.name]

    const datesarrayA = DatearrayParser(a.start_date.iso);
    const datesarrayB = DatearrayParser(b.start_date.iso);

    if(a.gender==="men"){
      aPri+=10;
    }

    if(b.gender==="men"){
      bPri+=10
    }

    if (datesarrayA[3] > 21) {
      aPri += 10;
    }
    if (datesarrayB[3] > 21) {
      bPri += 10;
    }

    console.log({ aPri }, { bPri })
    return (bPri - aPri);
  });
  return arr;
};



// Ind=10 Pak= 5
// Ind=10 Aus= 8