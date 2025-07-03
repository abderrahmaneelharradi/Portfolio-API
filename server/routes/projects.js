const express = require("express")
const router = express.Router()

// GET /api/projects - Get projects data
router.get("/", async (req, res) => {
  try {
    const projectsData = [
      {
        id: 1,
        title: "Web Design",
        description: "Modern responsive web designs",
        image: "/assets/project1.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 2,
        title: "Mobile Design",
        description: "Mobile-first design approach",
        image: "/assets/project2.jpg",
        technologies: ["React Native", "Flutter"],
      },
      {
        id: 3,
        title: "Logo Design",
        description: "Creative brand identity solutions",
        image: "/assets/project3.jpg",
        technologies: ["Photoshop", "Illustrator"],
      },
      {
        id: 4,
        title: "Web Application Development",
        description: "Full-stack web applications",
        image: "/assets/project4.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        id: 5,
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile apps",
        image: "/assets/project5.jpg",
        technologies: ["React Native", "Swift", "Kotlin"],
      },
      {
        id: 6,
        title: "PWA Development",
        description: "Progressive Web Applications",
        image: "/assets/project6.jpg",
        technologies: ["React", "Service Workers", "Web APIs"],
      },
    ]

    res.json(projectsData)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects data" })
  }
})

module.exports = router
