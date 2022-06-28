require("dotenv").config();
const axios = require("axios");

exports.leagueName = async (req, res) => {
  const leagues = await axios.get(`${process.env.API}/leagues`);
  let result = [];
  for (let i = 0; i < leagues.data.data.length; i++) {
    result.push(leagues.data.data[i].name);
  }
  console.log(result);
  res.json(result);
};

exports.leagueLogo = async (req, res) => {
  const leagues = await axios.get(`${process.env.API}/leagues`);
  let result = [];
  for (let i = 0; i < leagues.data.data.length; i++) {
    result.push(leagues.data.data[i].logos);
  }
  console.log(result);
  res.json(result);
};
