const express = require("express")
const router = express.Router()
const path = require("path")

// GET /api/resume/download - Download resume
router.get("/download", (req, res) => {
  try {
    const resumePath = path.join(__dirname, "../assets/resume.pdf")

    // Check if file exists
    if (!require("fs").existsSync(resumePath)) {
      return res.status(404).json({ error: "Resume not found" })
    }

    res.download(resumePath, "Katie_Reed_Resume.pdf", (err) => {
      if (err) {
        console.error("Resume download error:", err)
        res.status(500).json({ error: "Failed to download resume" })
      }
    })
  } catch (error) {
    res.status(500).json({ error: "Failed to download resume" })
  }
})

module.exports = router
