const express = require("express")
const app = express()
const {PORT} = require("./utils/options")
const routes_api= require("./routes/routes-api")

app.use(express.json())

app.use(routes_api())

app.get("/", (req, res) => {
    res.status(200).json({
        status: "server running",
        date: new Date().toLocaleString()
    })
})

app.use((req, res, next) => {
    res.status(404)
    next(Error(`The page not found in path ${req.url} and method ${req.method}`))
})

app.use((error, req, res, next) => {
    const status = res.statusCode || 500
    res.status(status).json({
        error: error.message,
        stack: error.stack
    })
})

app.listen(PORT, () => console.log(`server running at port ${PORT}`))
