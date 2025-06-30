import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>I'm always excited to work on new projects and meet great people.</p>
            </div>
            
            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">
                  <FaEnvelope />
                </div>
                <div className="card-content">
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                  <a href={`mailto:${personalInfo.email}`} className="card-link">
                    Send Email
                  </a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="card-icon">
                  <FaPhone />
                </div>
                <div className="card-content">
                  <h4>Phone</h4>
                  <p>{personalInfo.phone}</p>
                  <a href={`tel:${personalInfo.phone}`} className="card-link">
                    Call Now
                  </a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="card-content">
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                  <span className="card-link">Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send Message</h3>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <>
                      <FaCheckCircle />
                      <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
                    </>
                  ) : (
                    <>
                      <FaExclamationTriangle />
                      <span>Sorry, there was an error sending your message. Please try again or contact me directly.</span>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
