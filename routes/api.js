module.exports = (app) => {
  const clientID = '3HkM4SoAWb0uxd_Kcf2HJA';
  const clientSecret = 'p1x3DXq8dt692LCWXtVonwTMZchVsw8dY6UoUQG696HiEOJ6ZqsU8kQXM6uBdA9x';
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