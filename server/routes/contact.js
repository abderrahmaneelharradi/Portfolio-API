const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer") // You'll need to install this

// POST /api/contact - Send contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" })
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransporter({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL || "infokatie@mail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.json({ message: "Message sent successfully!" })
  } catch (error) {
    console.error("Contact form error:", error)
    res.status(500).json({ error: "Failed to send message" })
  }
})

module.exports = router
