import express from 'express'

const router = express.Router()

// Since we're using Web3Forms for contact form submission,
// this route can be simplified or removed entirely.
// Keeping it for potential future use or fallback.

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    console.log('Received contact form data:', { name, email, messageLength: message?.length })

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

    // Log the contact attempt (for analytics/monitoring)
    console.log(`Contact form submission from ${name} (${email})`)
    
    // Since Web3Forms handles the email sending, just return success
    res.status(200).json({ message: 'Contact form data received successfully' })
    
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ 
      message: 'Sorry, there was an issue processing your request.' 
    })
  }
})

export default router
   