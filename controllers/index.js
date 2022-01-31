const article = require("./article-controller")
const articleSimilar = require("./articlesimilar-controller")
const articlesTrending = require("./articlestrending-controller")
const medicineCategories = require("./medicinecategories-controller")
const medicineCategoriesDetails = require("./medicinecategoriesdetails-controller")
const medicineDetail = require("./medicinedetail-controller")
const medicineSimilar = require("./medicinesimilar-controller")
const articles = require("./articles-controller")
const hospital = require("./hospital-controller")
const hospitalDepartments = require("./hospitaldepartments-controller")
const doctor = require("./doctor-controller")
const doctorSearch = require("./doctorsearch-controller")
const doctorSpecialities = require("./doctorspecialities-controller")
const sugestion = require("./sugestion-controller")
const hospitalsLocation = require("./hospitalslocation-controller")

module.exports = {
    article,
    hospitalsLocation,
    sugestion,
    doctor,
    doctorSearch,
    doctorSpecialities,
    hospitalDepartments,
    hospital,
    articleSimilar,
    articles,
    articlesTrending,
    medicineSimilar,
    medicineDetail,
    medicineCategoriesDetails,
    medicineCategories,
}
