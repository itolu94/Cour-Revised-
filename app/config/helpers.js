import axios from 'axios'

export const yelp = (location, activity, cb) => {
    axios.get(`/api/${location}/${activity}`)
      .then(results => {
          cb(results);
      });
} 