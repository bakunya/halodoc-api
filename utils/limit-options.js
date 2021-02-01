const rateLimit = require("express-rate-limit")
const slowDown = require("express-slow-down")

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: "Too many request from this IP, please try again after an hour"
})

const slow = slowDown({
    delayAfter: 50,
    windowMs: 15 * 60 * 1000,
    delayMs: 1000,
    maxDelayMs: 20000
})

module.exports = {
    limiter,
    slow
}