import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
       Authorization:'Bearer R9FrFzHxLkq8e9CBLZ9o95CsGHxUbI9oHOlW1LUd5iv5pMBnxo47IWW8RYzhV_V_VDu2GB-nlvaGbBlpRIWe2WVcJ5LG-wO7lR2-nAPxkuARa8joU5Q527ESHOhJYXYx'
    }
});
