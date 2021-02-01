const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function articleSimilarController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/cms/articles/${req.params.external_id}/similar?per_page=5`
        const similar = await axios.get(url)
        return res.status(200).json({
            results: similar.data.result
        })
    } catch (err) {
        console.log(err);
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articleSimilarController