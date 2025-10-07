'use client'

import { useState, useEffect, useRef } from 'react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'
import {
  Spotlight,
  Lightbulb,
  RefreshCw,
  Puzzle,
  Rocket,
  Zap
} from 'lucide-react'

interface AboutSectionProps {
  language: Language
}

export function AboutSection({ language }: AboutSectionProps) {
  const translation = getTranslation(language)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ years: 0, projects: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const targetYears = 2
    const targetProjects = 12
    const steps = 60
    const yearStep = targetYears / steps
    const projectStep = targetProjects / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setCounters({
        years: Math.min(Math.floor(yearStep * currentStep), targetYears),
        projects: Math.min(
          Math.floor(projectStep * currentStep),
          targetProjects
        )
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)
  }

  const keyStrengths = [
    {
      keyStrength: translation.about.performanceValue,
      icon: Zap,
      descripiton: translation.about.descriptionPerformanceValue
    },
    {
      keyStrength: translation.about.innovationValue,
      icon: Lightbulb,
      descripiton: translation.about.descriptionInnovationValue
    },
    {
      keyStrength: translation.about.problemSolvingValue,
      icon: Puzzle,
      descripiton: translation.about.descriptionProblemSolvingValue
    },
    {
      keyStrength: translation.about.proactivityValue,
      icon: Rocket,
      descripiton: translation.about.descriptionProactivityValue
    },
    {
      keyStrength: translation.about.adaptabilityValue,
      icon: RefreshCw,
      descripiton: translation.about.descriptionAdaptabilityValue
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-darker relative overflow-hidden px-6 py-20 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float bg-brand/5 absolute top-20 right-20 h-64 w-64 rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="animate-float bg-brand/5 absolute bottom-20 left-20 h-48 w-48 rounded-full blur-3xl"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-stretch gap-16 lg:grid-cols-2">
          <div
            className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              <span className="text-gradient">
                {translation.about.aboutTitle}
              </span>
            </h2>

            <div className="space-y-6 text-gray-400">
              <p
                className="animate-slide-up text-lg leading-relaxed"
                style={{ animationDelay: '0.2s' }}
              >
                {translation.about.aboutDescription}
              </p>
              <p
                className="animate-slide-up text-lg leading-relaxed"
                style={{ animationDelay: '0.4s' }}
              >
                {translation.about.aboutDescription2}
              </p>
              <p
                className="animate-slide-up text-lg leading-relaxed"
                style={{ animationDelay: '0.6s' }}
              >
                {translation.about.aboutDescription3}
              </p>
            </div>
            <div className="mt-20 grid grid-cols-2 gap-8">
              <div className="group hover-lift text-center">
                <div className="animate-pulse-glow text-brand mb-2 text-4xl font-bold lg:text-5xl">
                  {counters.years}+
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {translation.about.yearsExperienceLabel}
                </div>
              </div>
              <div className="group hover-lift text-center">
                <div
                  className="animate-pulse-glow text-brand mb-2 text-4xl font-bold lg:text-5xl"
                  style={{ animationDelay: '0.5s' }}
                >
                  {counters.projects}+
                </div>
                <div className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {translation.about.projectsDeliveredLabel}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#E9EFF4]">
                {translation.about.keyStrengthsTitle}
              </h3>
              {keyStrengths.map((value, index) => (
                <div
                  key={index}
                  className="animate-slide-up hover:text-brand key-strengths-border text-background cursor-default border-0 p-3 text-base font-semibold transition-all duration-300"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <div className="flex gap-2.5">
                    <span className="black-border zoom-in text-brand z10 relative h-7.5 cursor-default rounded-md p-2 text-sm font-normal">
                      <value.icon className="relative z-10" size={15} />
                    </span>
                    <span className="relative">
                      {value.keyStrength}
                      <span className="mt-0.5 block text-xs text-gray-400">
                        {value.descripiton}
                      </span>
                    </span>
                  </div>
                  <span className="bg-brand absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
