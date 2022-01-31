const express = require("express")
const controller = require("../controllers/index")
const {slow, limiter} = require("../utils/limit-options")

function routes_api() {
    const router = express.Router()

    router.get("/articles-trending", slow, limiter, controller.articlesTrending)

    router.get("/articles/page/:count", slow, limiter, controller.articles)

    router.get("/article-content/:slug/:external_id", slow, limiter, controller.article)
    
    router.get("/article/similar/:external_id", slow, limiter, controller.articleSimilar)

    router.get("/medicine/categories", slow, limiter, controller.medicineCategories)

    router.get("/medicine/categories/:slug/page/:count", slow, limiter, controller.medicineCategoriesDetails)
    
    router.get("/medicine/detail/:slug", slow, limiter, controller.medicineDetail)

    router.get("/medicine/similar/:slug", slow, limiter, controller.medicineSimilar)

    router.get("/doctor/:slug", slow, limiter, controller.doctor)

    router.get("/doctor/specialities/:count", slow, limiter, controller.doctorSpecialities)
    
    router.get("/hospital/:slug", slow, limiter, controller.hospital)

    router.get("/hospital/departments/:slug", slow, limiter, controller.hospitalDepartments)

    router.put("/doctor/search", slow, limiter, controller.doctorSearch)

    router.put("/hospital/locations-sugestion", slow, limiter, controller.sugestion)

    router.put("/hospital/location", slow, limiter, controller.hospitalsLocation)

    return router
}

module.exports = routes_api