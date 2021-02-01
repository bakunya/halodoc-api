const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function hospitalsLocationController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/suggestions`
        const {city, district, region, search} = req.body
        if (!city && !district && !region && !search) throw Error("Invalid search value")
        const options = {
            city: city || null,
            district: district || null,
            region: region || null,
            search_text: search || null,
            per_page: 3,
            types: ["provider_locations", "departments", "procedures"]
        }
        const category = await axios.put(url, options)
        return res.status(200).json(category.data)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = hospitalsLocationController