const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function doctorSpecialitiesController(req, res, next) {
    const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/personnel/specialities`

    try {
        const options = {
            "per_page": req?.params?.count ?? 8
        }
        const category = await axios.put(url, options)
        return res.status(200).json(category.data)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = doctorSpecialitiesController