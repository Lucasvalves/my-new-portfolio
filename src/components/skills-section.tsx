'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Wrench, BookOpen } from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'

interface SkillsSectionProps {
  language: Language
}

export function SkillsSection({ language }: SkillsSectionProps) {
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

  const developmentSkills = [
    'React 19+',
    'Next.js 15+',
    'TypeScript',
    'JavaScript ES6+',
    'HTML5',
    'CSS 3',
    'TailwindCSS',
    'Node.js',
    'Python'
  ]

  const technologiesTools = [
    'Jest & Cypress',
    'Zod',
    'TanStack Query',
    'CI/CD',
    'Git',
    'Twilio',
    'Figma'
  ]

  const methodologies = [
    'Scrum',
    'Clean Code',
    'MVVM',
    'Performance Optimization'
  ]

  const skillCategories = [
    {
      title: translation.skills.developmentTitle,
      icon: Code,
      skills: developmentSkills,
    },
    {
      title: translation.skills.technologiesTitle,
      icon: Wrench,
      skills: technologiesTools,
    },
    {
      title: translation.skills.methodologiesTitle,
      icon: BookOpen,
      skills: methodologies,
    }
  ]
  const educations = [
    {
      degree: translation.educations.bachelorDegree,
      institution: translation.educations.university,
      period: translation.educations.bachelorPeriod,
      type: 'bachelor'
    },
    {
      degree: translation.educations.technicalDegree,
      institution: translation.educations.senai,
      period: translation.educations.technicalPeriod,
      type: 'technical'
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-darker relative overflow-hidden px-6 py-20 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute top-32 right-32 h-56 w-56 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="animate-float absolute bottom-32 left-32 h-64 w-64 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2
          className={`mb-16 text-3xl font-bold text-white lg:text-4xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="text-white">{translation.skills.skillsTitle}</span>
        </h2>

        <div className="mb-20 grid gap-12 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="mb-6 flex items-center space-x-1.5 text-white">
                <category.icon className="h-5 w-5" />
                <h3 className="ttext-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="group hover:border-brand hover:bg-[#111111] relative z-10 cursor-default rounded-lg border-1 border-gray-900 px-2 py-1 text-xs font-medium text-gray-300"
                  >
                    <span className="relative z-10 transition-colors duration-300">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="mb-16 flex items-center space-x-3">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              <span className="text-white">
                {translation.educations.educationTitle}
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {educations.map((education, index) => (
              <div
                key={index}
                className={`hover-lift group rounded-lg bg-[#21212124] p-6 text-gray-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                      {education.degree}
                    </h3>
                    <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {education.institution}
                    </p>
                  </div>
                  <div className="mt-2 rounded-full px-3 py-1 text-sm font-medium text-gray-300 lg:mt-0">
                    {education.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
