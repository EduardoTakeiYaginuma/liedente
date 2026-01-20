'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'A Clínica', href: '/a-clinica' },
    { label: 'Tratamentos', href: '/tratamentos' },
    { label: 'Corpo Clínico', href: '/corpo-clinico' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-lg' : 'py-0'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-liedente-dental-clinic.png"
              alt="Liedente Dental Clinic"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navItems.slice(0, -1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contato"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-down">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

