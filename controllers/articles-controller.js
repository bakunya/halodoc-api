const axios = require("axios")
const {ROOT_URL} = require("../utils/options")
const { stripHtml } = require('../lib/stripHtml');
const request = require("request");

async function articlesController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/cms/articles?per_page=8&channel=general&status=published&page_no=${req.params.count}`
        // console.log(url)
        // const similar = await axios.get(url, null, { headers: { 'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Mobile Safari/537.36' } })
        // console.log(similar)
        
        
        request(url, (error, response, body) => {
            try {
                if(error) throw Error(error)
                const result = JSON.parse(body)
                result?.result?.forEach(itm => stripHtml(itm.summary).result)
                return res.status(200).json(result)
            } catch(er) {
                next(er.message)
            }
        });
    } catch (err) {
        console.log(err)
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articlesController