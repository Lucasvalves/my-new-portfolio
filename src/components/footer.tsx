'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'
import Link from 'next/link'

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const translation = getTranslation(language)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="section-dark relative border-t border-gray-800 px-6 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-brand/5 absolute bottom-0 left-1/2 h-32 w-96 -translate-x-1/2 transform rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="animate-slide-in-left flex items-center space-x-6">
            {[
              {
                icon: Mail,
                href: 'mailto:lucasvelosoalves@outlook.com?subject=Olá...',
                label: 'Email'
              },

              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/lucasvelosoalves/',
                label: 'LinkedIn'
              },
              {
                icon: Github,
                href: 'https://github.com/Lucasvalves',
                label: 'GitHub'
              }
            ].map(({ icon: Icon, href, label }, index) => (
              <Button
                key={label}
                size="sm"
                asChild
                className="hover-lift animate-slide-up hover:text-brand bg-transparent text-gray-400 transition-all duration-300 hover:bg-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>

          <div className="animate-slide-in-right flex items-center space-x-2 text-sm text-gray-400">
            <span>
              © {new Date().getFullYear()} Lucas Veloso.{' '}
              {translation.footer.madeWith}
            </span>
            <Heart className="h-4 w-4 animate-pulse text-red-500" />
            <span>{translation.footer.lotsOfCoffee} ☕</span>
          </div>
        </div>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="hover-lift animate-pulse-glow bg-brand hover:bg-brand/90 fixed right-8 bottom-8 z-50 h-10 w-10 rounded-full text-white shadow-lg"
            size="sm"
          >
            <ArrowUp />
          </Button>
        )}
      </div>
    </footer>
  )
}
