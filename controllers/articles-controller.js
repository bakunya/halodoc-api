const axios = require("axios")
const {ROOT_URL} = require("../utils/options")
const { stripHtml } = require('../lib/stripHtml');

async function articlesController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/cms/articles?per_page=8&channel=general&status=published&page_no=${req.params.count}`
        const articles = await axios.get(url)
        articles?.data?.result?.forEach(itm => stripHtml(itm.summary).result)
        return res.status(200).json({
            results: articles.data.result,
            next_page: articles.data.next_page,
        })
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articlesController