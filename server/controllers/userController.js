const path = require("path")

const getPortfolio = async (req, res) => {
  try {
    const portfolioData = {
      name: "Katie Reed",
      title: "Web Developer & Designer",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      email: "infokatie@mail.com",
      phone: "+01 234 567 88",
      footerDescription:
        "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet...",
    }
    res.json(portfolioData)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch portfolio data" })
  }
}

const downloadResume = async (req, res) => {
  try {
    const resumePath = path.join(__dirname, "../assets/resume.pdf")
    res.download(resumePath, "Katie_Reed_Resume.pdf")
  } catch (error) {
    res.status(500).json({ error: "Failed to download resume" })
  }
}

module.exports = {
  getPortfolio,
  downloadResume,
}
