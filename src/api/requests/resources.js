const axios = require('axios');
const { get } = require('http');
const defaults = require('./defaults');

const getItemsBySeller = {

    getItems: function(id) {
        return axios({
            ...defaults,
            method: "GET",
            url: defaults.sellerURL + id,
        })
    },

    getCategoryOfItem: function(id) {
        return axios({
        ...defaults,
        method: "GET",
        url: defaults.categoryURL + id
        })
    }
}

module.exports = getItemsBySeller;