'use client'

import { useState, useEffect, useRef } from 'react'
import { Calendar, Building } from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'

interface ExperienceSectionProps {
  language: Language
}

export function ExperienceSection({ language }: ExperienceSectionProps) {
  const translation = getTranslation(language)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-dark relative overflow-hidden px-6 py-20 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute top-40 left-10 h-72 w-72 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2
          className={`mb-16 text-3xl font-bold text-white lg:text-4xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="text-white">
            {translation.experience.experienceTitle}
          </span>
        </h2>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-[#0D52FF] via-[#0D52FF]/50 to-transparent"></div>

          <div className="space-y-16">
            {translation.experience.listExperience.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-20 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div
                  className="animate-pulse-glow absolute top-0 left-6 h-4 w-4 rounded-full bg-[#0D52FF]"
                  style={{ animationDelay: `${index * 0.3}s` }}
                ></div>

                <div className="glass-effect hover-lift group rounded-lg p-8">
                  <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#0D52FF]">
                        {exp.position}
                      </h3>
                      <div className="flex items-center space-x-2 text-lg font-medium text-[#0D52FF]">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        exp.type === 'full-time' || exp.type === 'Full-time'
                          ? 'bg-[#0D52FF]/20 text-[#0D52FF]'
                          : exp.type === 'freelance' ||
                              exp.type === 'Freelancer'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {exp.type}
                    </div>
                  </div>

                  <ul className="ml-6 space-y-4 text-gray-400">
                    {exp.descriptions.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="leading-relaxed transition-colors duration-300 group-hover:text-gray-200"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
