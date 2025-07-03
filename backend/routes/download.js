import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// CV/Resume download endpoint
router.get('/resume', (req, res) => {
  try {
    // Fixed: Removed extra bracket from file path
    const cvPath = path.join(__dirname, '..', 'public', 'cv', 'Hasbellaoui Mehdi.pdf')
    
    // Check if file exists
    if (!fs.existsSync(cvPath)) {
      console.error('Resume file not found at:', cvPath)
      return res.status(404).json({ message: 'Resume not found' })
    }

    // Set headers for download
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="Hasbellaoui Mehdi.pdf"')
    
    // Send file
    res.sendFile(cvPath, (err) => {
      if (err) {
        console.error('Error sending file:', err)
        if (!res.headersSent) {
          res.status(500).json({ message: 'Error downloading file' })
        }
      } else {
        // Log successful download
        console.log(`Resume downloaded successfully at ${new Date().toISOString()}`)
      }
    })
    
  } catch (error) {
    console.error('Download error:', error)
    res.status(500).json({ message: 'Error downloading file' })
  }
})

// Optional: Get resume info endpoint (to check if file exists before showing download button)
router.get('/resume/info', (req, res) => {
  try {
    const cvPath = path.join(__dirname, '..', 'public', 'cv', 'Hasbellaoui Mehdi.pdf')
    
    if (fs.existsSync(cvPath)) {
      const stats = fs.statSync(cvPath)
      res.json({
        available: true,
        size: stats.size,
        lastModified: stats.mtime
      })
    } else {
      res.json({ available: false })
    }
  } catch (error) {
    console.error('Error checking resume info:', error)
    res.status(500).json({ message: 'Error checking resume availability' })
  }
})

export default router