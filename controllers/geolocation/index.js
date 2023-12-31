const getLatestGeolocationByUserId = require('./getLatestGeolocationByUserId');
const getTeamsNamesList = require('./getTeamsNamesList');
const saveGeolocation = require('./saveGeolocation');
const getTeams = require('./getTeams');
const getGeolocationsByTeam = require('./getGeolocationsByTeam');
const getAllGeolocations = require('./getAllGeolocations');
const deleteGeolocationByUserId = require('./deleteGeolocationByUserId');


module.exports = {
  getLatestGeolocationByUserId,
  getTeamsNamesList,
  saveGeolocation,
  getTeams,
  getGeolocationsByTeam,
  getAllGeolocations,
  deleteGeolocationByUserId
};
