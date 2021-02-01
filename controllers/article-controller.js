const axios = require("axios")
const cherio = require("cheerio")
const {ROOT_URL} = require("../utils/options")

async function articleController(req, res, next) {
    try {
        const url = `${ROOT_URL}/artikel/${req.params.slug}`
        const response = await axios.get(url)
        const html = response.data
        const $ = cherio.load(html)
        const rawData = Array.from($("div#contentShareButton > p")).map(elm => $(elm).text().split(":")[0] === "Baca juga" ? "" : $(elm).text())
        const referensi = Array.from($("div#contentShareButton > h6")).map(elm => $(elm).text())
        const img = $("img#imageElement")[0].attribs.src
        const subHead = Array.from($(".article__subheadline > *")).map(elm => $(elm).text())
        return res.status(200).json({
            subHead,
            img,
            data: rawData.filter(d => d !== ""),
            referensi: referensi.filter(d => d !== ""),
            id: req.params.external_id
        })
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = articleController