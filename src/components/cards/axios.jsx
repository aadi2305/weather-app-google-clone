const axios = require("axios");

const instance = axios.create({
    baseURL: "https://weather-app-backend-vvm.herokuapp.com"
})

module.exports = instance;