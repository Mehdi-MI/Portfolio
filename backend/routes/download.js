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
    // TODO: EDIT CV FILE PATH
    const cvPath = path.join(__dirname, '..', 'public', 'cv', '[EDIT: your-resume.pdf]')
    
    // Check if file exists
    if (!fs.existsSync(cvPath)) {
      return res.status(404).json({ message: 'Resume not found' })
    }

    // Set headers for download
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="[EDIT: Your-Name]-Resume.pdf"')
    
    // Send file
    res.sendFile(cvPath)
    
    // Log download (optional)
    console.log(`Resume downloaded at ${new Date().toISOString()}`)
    
  } catch (error) {
    console.error('Download error:', error)
    res.status(500).json({ message: 'Error downloading file' })
  }
})

// Portfolio images or other files
router.get('/file/:filename', (req, res) => {
  try {
    const filename = req.params.filename
    const filePath = path.join(__dirname, '..', 'public', 'files', filename)
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' })
    }
    
    res.sendFile(filePath)
  } catch (error) {
    console.error('File download error:', error)
    res.status(500).json({ message: 'Error downloading file' })
  }
})

export default router
