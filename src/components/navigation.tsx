'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Globe, Menu, X } from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'

interface NavigationProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const translation = getTranslation(language)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="animate-slide-in-left flex items-center space-x-3">
              {/* <div className="animate-pulse-glow h-3 w-3 rounded-full bg-green-500"></div> */}
              <span className="font-semibold text-white">Lucas Veloso</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {Object.entries(translation.navigation).map(
                ([key, item], index) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="group hover:text-brand relative text-sm font-medium text-gray-300 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    <span className="bg-brand absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              )}
            </div>

            <div className="animate-slide-in-right flex items-center space-x-2">
              <Button
                size="sm"
                onClick={() =>
                  onLanguageChange(language === 'pt' ? 'en' : 'pt')
                }
                className="bg-transparent text-white transition-all duration-300 hover:bg-white/10 hover:text-brand"
              >
                <Globe className="h-4 w-4" />
                <span className="ml-2 text-sm">{language.toUpperCase()}</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/10 hover:text-brand md:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-blue-900">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="glass-effect animate-slide-in-right fixed top-0 right-0 h-full w-full p-6  ">
            <div className="mt-20 flex flex-col space-y-6 ">
              {Object.entries(translation.navigation).map(
                ([key, item], index) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="animate-slide-up py-2 text-left text-lg font-medium text-white transition-colors duration-300 hover:text-brand"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
