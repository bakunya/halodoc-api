const axios = require("axios")
const {ROOT_URL} = require("../utils/options")

async function medicineCategoriesController(req, res, next) {
    try {
        const url = `${ROOT_URL}/api/v1/buy-medicine/categories`
        const category = await axios.get(url)
        return res.status(200).json({
            results: category.data
        })
    } catch (err) {
        res.status(400)
        next(Error(err.message))
    }
}

module.exports = medicineCategoriesController