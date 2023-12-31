const Geolocation = require('../../models/geolocations');

const saveGeolocation = async ({ body, user: { _id, name: userName } }, res) => {
  try {
    if (!_id) {
      throw new Error('User ID is null');
    }
    const { coordinates, team } = body;

    let geolocation = await Geolocation.findOne({ owner: _id });

    if (!geolocation) {
      // Create a new geolocation if it doesn't exist for the user
      geolocation = await Geolocation.create({ owner: _id, name: userName, coordinates, team, ...body });
    } else {
      // Update existing geolocation
      geolocation.coordinates = coordinates;
      geolocation.team = team;
      await geolocation.save();
    }

    res.status(200).json(geolocation);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.owner === 1) {
      // Handle duplicate key error (owner already exists)
      console.error('Duplicate key error:', error);
      res.status(409).json({ error: 'Duplicate key error' });
    } else {
      console.error('Error in saveGeolocation:', error);
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }
};

module.exports = saveGeolocation;
