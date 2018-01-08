const yelpCredentials = require('../config/yelp-credentials');


module.exports = (app) => {
  const clientID = yelpCredentials.clientID;
  const clientSecret = yelpCredentials.clientSecret;

  const yelp = require('yelp-fusion');
  let token;
  yelp.accessToken(clientID, clientSecret).then(response => {
    // console.log(response.jsonBody.access_token);
    token = response.jsonBody.access_token;
  });
    
  app.get('/api/:location/:activity', (req, resp) =>{
    let {location, activity} = req.params;
    let client = yelp.client(token);
    client.search({
      term: activity,
      location: location,
      limit: 5
    }).then(response => {
      resp.json(response.jsonBody);
      }).catch(e => {
        console.log(e);
      }); 
  });
}