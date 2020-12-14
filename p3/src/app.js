export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'e28-api.loc',
    responseType: 'json',
})