module.exports.Priortize = (arr, name = "India") => {
  arr.sort((a, b) => {
    let aPri = 0,
      bPri = 0;
    if (a.status === "completed" && b.status === "completed") {
    } else if (a.status === "completed") {
      bPri++;
    } else if (b.status === "completed") {
      aPri++;
    }

    if (a.status === "notcompleted" && b.status === "notcompleted") {
    } else if (a.status === "notcompleted") {
      bPri+=2;
    } else if (b.status === "notcompleted") {
      aPri+=2;
    }

    if (a.venue?.includes(name)) {
      aPri += 1;
    }

    if (b.venue?.includes(name)) {
      bPri += 1;
    }

      if (a.teams.a.name.includes(name) || a.teams.b.name.includes(name)) {
        aPri += 2;
      }
    if (b.teams.a.name.includes(name) || b.teams.b.name.includes(name)) {
      bPri += 2;
    }

    if (a.format === "t-20") {
      aPri += 2;
    } else if (a.format === "one-day") {
      aPri += 1;
    } else if (a.format === "odi") {
      aPri += 0;
    }

    if (b.format === "t-20") {
      bPri += 2;
    } else if (b.format === "one-day") {
      bPri += 1;
    } else if (b.format === "odi") {
      bPri += 0;
    }

    return (bPri - aPri);
  });

  return arr;
};
