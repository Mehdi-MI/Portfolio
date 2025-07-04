import React, {useState, useEffect} from 'react'
import {personalInfo} from '../../data/portfolioData.js'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        {name: 'Home', href: '#hero'},
        {name: 'About', href: '#about'},
        {name: 'Contact', href: '#contact'}
    ]

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo">
                        <a href="#hero">{personalInfo.name}</a>
                    </div>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
