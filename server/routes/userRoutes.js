const express = require("express")
const router = express.Router()
const { getPortfolio, downloadResume } = require("../controllers/userController")

router.get("/portfolio", getPortfolio)
router.get("/resume/download", downloadResume)

module.exports = router
