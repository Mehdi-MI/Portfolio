import express from 'express'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'

const router = express.Router()

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 requests per hour
  message: 'Too many contact attempts, please try again later.'
})

// TODO: EDIT EMAIL CONFIGURATION
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER || '[EDIT: your.email@gmail.com]',
    pass: process.env.EMAIL_PASS || '[EDIT: your-app-password]'
  }
})

// Validation middleware
const validateContactForm = [
  body('name').trim().isLength({ min: 2, max: 50 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 10, max: 1000 }).escape()
]

// Contact form endpoint
router.post('/', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, message } = req.body

    // TODO: EDIT EMAIL TEMPLATE
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    
    res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ message: 'Failed to send message. Please try again.' })
  }
})

export default router
