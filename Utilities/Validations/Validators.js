const { ResponseHandler } = require("../Response/ResponseHandler");

module.exports.ValidateNewMatches = (req, res, next) => {
  console.log(
    typeof req.body.format,
    typeof req.body.status,
    typeof req.body.season.name
  );

  let format = typeof req.boby?.format === "string" && req.body.format.length>0;
  let key = typeof req.boby?.key === "string" && req.body.key !== "";
  let name = typeof req.boby?.name === "string" && req.boby.name !== "";
  let seasonname =
    typeof req.boby?.season?.name === "string" &&
    req.body.season !== undefined &&
    req.body?.season?.name !== "";
  let status = typeof req.boby?.status === "string" && req.boby?.status !== "";
  let teamsname =
    typeof req.body?.teams.a.name === "string" &&
    typeof req.body?.teams?.b?.name === "string" &&
    req.body?.teams?.a?.name !== "" &&
    req.body?.teams?.b?.name !== "";
  let venue = typeof req.body?.venue === "string" && req.body?.venue !== "";
  let showInApp = typeof req.body?.showInApp === "boolean";
  let gender = typeof req.body?.gender === "string" && req.body?.gender !== "";

  console.log(
    format,
    gender,
    status,
    seasonname,
    venue,
    showInApp,
    gender,
    name
  );
  if (
    format &&
    key &&
    name &&
    seasonname &&
    status &&
    teamsname &&
    venue &&
    showInApp &&
    gender &&
    name
  ) {
    next();
  } else {
    ResponseHandler(res, 0, 400, "Wrong Data Type", null);
  }
};
