const express = require("express")
const router = express.Router()

// GET /api/skills - Get skills data
router.get("/", async (req, res) => {
  try {
    const skillsData = {
      description: "Here are my technical skills and areas of expertise...",
      focusAreas: ["UI/UX Design", "Responsive Design", "Web Design", "Mobile App Design"],
      technicalSkills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Photoshop", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "WordPress", level: 75 },
      ],
    }

    res.json(skillsData)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills data" })
  }
})

module.exports = router
