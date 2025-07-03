import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

// Email configuration - using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'Hasbellaouimehdi@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
})

// Contact form endpoint - simplified
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    if (name.trim().length < 2) {
      return res.status(400).json({ message: 'Name must be at least 2 characters' })
    }

    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Please provide a valid email' })
    }

    if (message.trim().length < 5) {
      return res.status(400).json({ message: 'Message must be at least 5 characters' })
    }

    // Email options - simplified
    const mailOptions = {
      from: process.env.EMAIL_USER || 'Hasbellaouimehdi@gmail.com',
      to: 'Hasbellaouimehdi@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Reply to: ${email}</small></p>
      `,
      replyTo: email
    }

    // Send email
    await transporter.sendMail(mailOptions)
    
    console.log(`Contact form submission from ${name} (${email})`)
    res.status(200).json({ message: 'Thank you for your message! I will get back to you soon.' })
    
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      message: 'Sorry, there was an issue sending your message. Please try again or contact me directly at Hasbellaouimehdi@gmail.com' 
    })
  }
})

export default router
