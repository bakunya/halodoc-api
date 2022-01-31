const axios = require("axios")
const {ROOT_URL} = require("../utils/options")
const { stripHtml } = require('../lib/stripHtml');

async function hospitalDepartmentsController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/slug/${req.params.slug}/departments`
        const category = await axios.get(url)
        category?.data?.departments?.forEach(itm => itm.description = stripHtml(itm.description).result)
        return res.status(200).json(category?.data)
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = hospitalDepartmentsController