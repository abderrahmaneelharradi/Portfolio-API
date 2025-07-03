const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")))

// Routes
app.use("/api", require("./routes/userRoutes"))
app.use("/api/skills", require("./routes/skillRoutes"))
app.use("/api/projects", require("./routes/projectRoutes"))
app.use("/api/contact", require("./routes/contactRoutes"))

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server running!" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
