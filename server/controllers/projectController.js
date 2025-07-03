// GET /api/projects - Get projects data
const getProjects = async (req, res) => {
  try {
    const projectsData = [
      "Web Design",
      "Mobile Design",
      "Logo Design",
      "Web Application Development",
      "Mobile Application Development",
      "PWA Development",
    ]
    res.json(projectsData)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects data" })
  }
}

// GET /api/projects/:id - Get single project
const getProject = async (req, res) => {
  try {
    const { id } = req.params
    // Add your single project fetch logic here
    res.json({ message: `Project ${id} details` })
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project" })
  }
}

// POST /api/projects - Create new project
const createProject = async (req, res) => {
  try {
    // Add your project creation logic here
    res.json({ message: "Project created successfully" })
  } catch (error) {
    res.status(500).json({ error: "Failed to create project" })
  }
}

module.exports = {
  getProjects,
  getProject,
  createProject,
}
