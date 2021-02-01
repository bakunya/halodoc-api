const article = require("./article-controller")
const articleSimilar = require("./articlesimilar-controller")
const medicineCategories = require("./medicinecategories-controller")
const medicineCategoriesDetails = require("./medicinecategoriesdetails-controller")
const medicineDetail = require("./medicinedetail-controller")
const medicineSimilar = require("./medicinesimilar-controller")
const articles = require("./articles-controller")
const hospital = require("./hospital-controller")
const hospitalDepartements = require("./hospitaldepartements-controller")
const doctor = require("./doctor-controller")
const sugestion = require("./sugestion-controller")
const hospitalsLocation = require("./hospitalslocation-controller")

module.exports = {
    article,
    hospitalsLocation,
    sugestion,
    doctor,
    hospitalDepartements,
    hospital,
    articleSimilar,
    articles,
    medicineSimilar,
    medicineDetail,
    medicineCategoriesDetails,
    medicineCategories,
}