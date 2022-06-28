require("dotenv").config();
const axios = require("axios");

exports.seasonName = async (req, res) => {
  const id = req.body.id;
  const seasons = await axios.get(`${process.env.API}/leagues/${id}/seasons`);
  let result = [];
  for (let i = 0; i < seasons.data.data.length; i++) {
    result.push(seasons.data.data);
  }
  console.log(result);
  res.json(result);
};

exports.seasonStanding = async (req, res) => {
  const id = req.body.id;
  const year = req.body.year;
  const seasons = await axios.get(
    `${process.env.API}/leagues/${id}/standings?season=${year}`
  );
  let result = [];
  for (let i = 0; i < seasons.data.data.standings.length; i++) {
    result.push(seasons.data.data.standings[i].team);
  }
  console.log(result);
  res.json(result);
  return result;
};
