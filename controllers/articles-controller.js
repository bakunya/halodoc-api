const axios = require("axios")
const {ROOT_URL} = require("../utils/options")
const { stripHtml } = require('../lib/stripHtml');

async function articlesController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/cms/articles?per_page=8&channel=general&status=published&page_no=${req.params.count}`
        console.log(url)
        const similar = await axios.get(url)
        similar?.data?.result?.forEach(itm => stripHtml(itm.summary).result)
        return res.status(200).json({
            results: similar.data.result,
            next_page: similar.data.next_page,
        })
    } catch (err) {
        console.log(err)
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articlesController