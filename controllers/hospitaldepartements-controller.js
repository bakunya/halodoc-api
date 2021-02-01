const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function hospitalDepartementsController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/slug/${req.params.slug}/departments`
        const category = await axios.get(url)
        return res.status(200).json(category.data)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = hospitalDepartementsController