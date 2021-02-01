const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function sugestionController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/locations`
        const search = req.body.search
        if (!search) throw Error("Invalid search value")
        const category = await axios.put(url, {"search_text": search})
        return res.status(200).json(category.data)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = sugestionController