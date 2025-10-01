'use client'

import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { Navigation } from '@/components/navigation'
import { SkillsSection } from '@/components/skills-section'
import { Language } from '@/locales'
import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<Language>('pt')

  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language}></AboutSection>
      <ExperienceSection language={language} />
      <SkillsSection language={language} />
    </main>
  )
}
