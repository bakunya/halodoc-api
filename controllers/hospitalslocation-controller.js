const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function hospitalsLocationController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/suggestions`
        const options = {
            city: req?.body?.city || null,
            district: req?.body?.district || null,
            region: req?.body?.region || null,
            search_text: req?.body?.search || null,
            per_page: 3,
            types: ["provider_locations", "departments", "procedures"]
        }
        const category = await axios.put(url, options)
        return res.status(200).json(category?.data?.provider_locations ?? {})
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = hospitalsLocationController