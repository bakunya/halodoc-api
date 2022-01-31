const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function doctorSearchController(req, res, next) {
    const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/personnel/search`

    try {
        const options = {
            "region": req?.body?.region ?? null,
            "halodoc_go_capability_flag": true,
            "speciality_slugs": req?.body?.speciality ? [req?.body?.speciality] : [],
            "page_no": req?.body?.page ?? 1,
            "per_page": 10,
            "search_term": null
        }
        const category = await axios.put(url, options)
        return res.status(200).json(category.data)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = doctorSearchController