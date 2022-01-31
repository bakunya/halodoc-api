const axios = require("axios")
const {ROOT_URL} = require("../utils/options")
const { stripHtml } = require('../lib/stripHtml');

async function articlesTrendingController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/cms/articles?per_page=8&type=trending&channel=general&status=published`
        const similar = await axios.get(url)
        similar?.data?.result?.forEach(itm => stripHtml(itm.summary).result)
        return res.status(200).json(similar.data.result)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articlesTrendingController