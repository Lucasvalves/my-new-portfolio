'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Download,
  Mail,
  Linkedin,
  Github,
  Code,
  Monitor,
  ArrowDown
} from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from './ui/badge'

interface HeroSectionProps {
  language: Language
}

export function HeroSection({ language }: HeroSectionProps) {
  const translation = getTranslation(language)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="section-dark relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-brand/10 absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl"></div>
        <div
          className="animate-float bg-brand/10 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div
          className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="animate-fade-in font-medium text-white">
                <Badge className="py-1">
                  <span className="animate-pulse-glow h-2 w-2 rounded-full bg-green-500"></span>
                  {translation.hero.openOpportunities}
                </Badge>
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-white lg:text-7xl">
                <span className="text-gradient">Lucas Veloso</span>
              </h1>
            </div>
            <h2
              className="animate-slide-up text-xl font-medium text-gray-300 lg:text-2xl"
              style={{ animationDelay: '0.2s' }}
            >
              {translation.hero.heroTitle}
            </h2>
            <p
              className="animate-slide-up max-w-lg text-lg leading-relaxed text-gray-400"
              style={{ animationDelay: '0.4s' }}
            >
              {translation.hero.heroSubtitle}
            </p>
          </div>

          <div
            className="animate-slide-up space-y-4"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
              {translation.hero.stackTitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="gradient-border hover-lift text-brand relative z-10 cursor-default rounded px-4 py-2 text-sm font-medium"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <span className="relative z-10">{tech}</span>
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className="animate-slide-up flex items-center space-x-4"
            style={{ animationDelay: '1.2s' }}
          >
            <Link
              href="https://wa.me/5571996579989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="hover-lift hover:border-brand hover:bg-brand rounded-none border-1 border-gray-400 bg-transparent text-white transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                {translation.hero.contactButton}
              </Button>
            </Link>
            <Link
              href={translation.hero.linkToCV}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="hover-lift animate-pulse-glow bg-brand hover:bg-brand/90 rounded-none text-white transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                {translation.hero.downloadCV}
              </Button>
            </Link>
          </div>

          <div
            className="animate-slide-up flex items-center space-x-6 pt-4"
            style={{ animationDelay: '1.4s' }}
          >
            <span className="text-sm text-gray-500">
              {translation.hero.connectText}
            </span>
            <div className="flex items-center space-x-4">
              {[
                { icon: Mail, href: 'mailto:lucasvelosoalves@outlook.com' },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/lucasvelosoalves/'
                },
                { icon: Github, href: 'https://github.com/Lucasvalves' }
              ].map(({ icon: Icon, href }, index) => (
                <Button
                  key={index}
                  size="sm"
                  className="hover-lift hover:text-brand bg-transparent text-gray-400 transition-all duration-300 hover:bg-white/10"
                  asChild
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
        >
          <div className="group relative">
            <div className="animate-float relative h-80 w-80 overflow-hidden rounded-full">
              <Image
                src="/profile.jpeg"
                alt="Lucas Veloso"
                className="transition-transform duration-500 group-hover:scale-110"
                fill
                quality={100}
              />
              <div className="from-brand/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            {/* Floating icons with improved animations */}
            <div className="animate-pulse-glow hover-lift bg-brand absolute -top-4 -right-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div
              className="animate-pulse-glow hover-lift bg-brand absolute -bottom-4 -left-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full"
              style={{ animationDelay: '1s' }}
            >
              <Monitor className="h-6 w-6 text-white" />
            </div>

            {/* Decorative elements */}
            <div
              className="animate-float bg-brand/60 absolute top-1/2 -left-8 h-4 w-4 rounded-full"
              style={{ animationDelay: '2s' }}
            ></div>
            <div
              className="animate-float bg-brand/40 absolute top-1/4 -right-6 h-3 w-3 rounded-full"
              style={{ animationDelay: '4s' }}
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <button
          onClick={scrollToNext}
          className="hover:text-brand text-gray-400 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
