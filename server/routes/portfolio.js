const express = require("express")
const router = express.Router()

// GET /api/portfolio - Get portfolio data
router.get("/", async (req, res) => {
  try {
    // Replace with your actual data source (database, etc.)
    const portfolioData = {
      name: "Katie Reed",
      title: "Web Developer & Designer",
      about: "Passionate web developer with expertise in modern technologies...",
      email: "infokatie@mail.com",
      phone: "+01 234 567 88",
      footerDescription: "Here you can use rows and columns to organize your footer content...",
    }

    res.json(portfolioData)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch portfolio data" })
  }
})

module.exports = router
