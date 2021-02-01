const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function articlesController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/cms/articles?per_page=8&channel=general&status=published&page_no=${req.params.count}`
        const similar = await axios.get(url)
        return res.status(200).json({
            results: similar.data.result
        })
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articlesController