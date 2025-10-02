'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, MoveRight } from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'
import Link from 'next/link'

interface ProjectsSectionProps {
  language: Language
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const transiton = getTranslation(language)
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
      id="projects"
      className="section-dark relative overflow-hidden px-6 py-20 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute top-20 left-20 h-80 w-80 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '2.5s' }}
        ></div>
        <div
          className="animate-float absolute right-40 bottom-40 h-60 w-60 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '5s' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2
          className={`mb-16 text-3xl font-bold text-white lg:text-4xl ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          <span className="text-white">{transiton.projects.projectsTitle}</span>
        </h2>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {transiton.projects.listProjetcs.map((project, index) => (
            <div
              key={index}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-effect hover-lift group h-full rounded-lg border-0 p-8">
                <div className="flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#0D52FF]">
                      {project.title}
                    </h3>
                    <div
                      className={`rounded-sm px-3 py-1 text-xs font-medium ${
                        project.status === 'In development' ||
                        project.status === 'Em desenvolvimento'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>

                  <p className="mb-6 flex-grow leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                    {project.description}
                  </p>

                  <div className="mb-6 space-y-3">
                    <div className="flex items-center space-x-2 text-sm font-medium text-gray-400">
                      <span>{transiton.projects.techLabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="hover-lift group hover:border-brand relative z-10 cursor-default rounded border-1 border-gray-900 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-[#111111]"
                          style={{
                            animationDelay: `${index * 0.2 + techIndex * 0.1}s`
                          }}
                        >
                          <span className="relative z-10">{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 border-t border-gray-700/50 pt-4">
                    {project.linkGithub && (
                      <Link
                        href={project.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-transparent text-gray-400 transition-all duration-300 hover:bg-[#000000] hover:text-[#0D52FF]"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {project.linkProject && (
                      <Link
                        href={project.linkProject}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-transparent text-gray-400 transition-all duration-300 hover:bg-[#000000] hover:text-[#0D52FF]"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex justify-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <Link
            href="https://github.com/Lucasvalves?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hover-lift animate-pulse-glow rounded-none border-1 border-gray-400 bg-transparent text-white transition-all duration-300 hover:border-[#0D52FF] hover:bg-[#0D52FF]">
              {transiton.projects.viewMoreProjects}
              <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
