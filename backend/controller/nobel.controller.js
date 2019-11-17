var fs = require('fs');
let student;

module.exports.getByName = (req, res) => {
  fs.readFile("./data/prize.json", (err, rawdata) => {
    if (err) {
      console.log(err);
    }
    else {
      student = JSON.parse(rawdata);
      let name = req.body.name;
      let data = [];
      for (var i = 0; i <= student.prizes.length - 1; i++) {
        for (var j = 0; j <= student.prizes[i].laureates.length - 1; j++) {
          if (name == student.prizes[i].laureates[j].firstname) {
            data.push({
              "year": student.prizes[i].year,
              "category": student.prizes[i].category,
              "name": student.prizes[i].laureates[j].firstname + ' ' + student.prizes[i].laureates[j].surname
            });
          }
        };
      };
      res.json(data);
    }
  });
}

module.exports.getByYear = (req, res) => {
  fs.readFile("./data/prize.json", (err, rawdata) => {
    if (err) {
      console.log(err);
    }
    else {
      student = JSON.parse(rawdata);
      let year = req.body.year;
      let data = [];
      for (var i = 0; i <= student.prizes.length - 1; i++) {
        if (year == student.prizes[i].year) {
          for (var j = 0; j <= student.prizes[i].laureates.length - 1; j++) {
            data.push({
              "year": student.prizes[i].year,
              "category": student.prizes[i].category,
              "laureates": student.prizes[i].laureates[j]
            });
          }
        }
      };
      res.json(data);
    }
  });
}

module.exports.getByYearAndCategory = (req, res) => {
  fs.readFile("./data/prize.json", (err, rawdata) => {
    if (err) {
      console.log(err);
    }
    else {
      student = JSON.parse(rawdata);
      let year = req.body.year;
      let category = req.body.category;
      let data = [];
      for (var i = 0; i <= student.prizes.length - 1; i++) {
        if (year == student.prizes[i].year && category == student.prizes[i].category) {
          for (var j = 0; j <= student.prizes[i].laureates.length - 1; j++) {
            data.push({
              "year": student.prizes[i].year,
              "category": student.prizes[i].category,
              "laureates": student.prizes[i].laureates[j]
            });
          }
        }
      };
      res.json(data);
    }
  });
}

module.exports.getAll = (req, res) => {
  fs.readFile("./data/prize.json", (err, rawdata) => {
    if (err) {
      console.log(err);
    }
    else {
      student = JSON.parse(rawdata);
      // let year = req.body.year;
      // let category = req.body.category;
      let data = [];
      for (var i = 0; i <= student.prizes.length - 1; i++) {
        for (var j = 0; j <= student.prizes[i].laureates.length - 1; j++) {
          data.push({
            "year": student.prizes[i].year,
            "category": student.prizes[i].category,
            "firstname": student.prizes[i].laureates[j].firstname + ' ' + student.prizes[i].laureates[j].surname
          });
        }
      };
      data.sort(function (a, b) {
        var nameA = a.firstname.toLowerCase(), nameB = b.firstname.toLowerCase();
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      });
      res.json(data);
    }
  });
}

