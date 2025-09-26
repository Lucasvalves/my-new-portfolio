'use client'

import { Navigation } from '@/components/navigation'
import { Language } from '@/locales'
import { useState } from 'react'

export default function Home() {
  const [language, setLanguage] = useState<Language>('pt')

  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation language={language} onLanguageChange={setLanguage} />
    </main>
  )
}
