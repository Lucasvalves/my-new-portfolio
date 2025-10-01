'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  MoveRight
} from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'

interface ContactSectionProps {
  language: Language
}

export function ContactSection({ language }: ContactSectionProps) {
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-darker relative overflow-hidden px-6 py-20 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute top-40 right-20 h-72 w-72 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="animate-float absolute bottom-20 left-40 h-56 w-56 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '3.5s' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`text-center lg:col-span-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            <span className="text-white">
              {translation.contact.contactTitle}
            </span>
          </h2>
          <p className="mb-8 leading-relaxed text-gray-400">
            {translation.contact.contactDescription}
          </p>
        </div>
        <div className={`flex justify-center lg:col-span-1 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>

          <div className="flex w-1/2 flex-col gap-12">
            <div className="flex flex-row gap-10">
              <div className="w-1/2">
                <label htmlFor="name" className="text-white">
                  {translation.contact.nameField}
                </label>
                <input
                  type="text"
                  placeholder={translation.contact.namePlaceholder}
                  className="w-full border-b-1 border-gray-300 p-1 text-gray-400 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="text-white">
                  {translation.contact.emailField}
                </label>
                <input
                  type="text"
                  placeholder={translation.contact.emailPlaceholder}
                  className="w-full border-b-1 border-gray-300 p-1 text-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="message" className="text-white">
                {translation.contact.messageField}
              </label>
              <input
                type="text"
                placeholder={translation.contact.messagePlaceholder}
                className="w-full border-b-1 border-gray-300 p-1 text-gray-400 focus:outline-none"
              />
            </div>
            <div className="w-full h-fit flex">
              <Button
                className="hover-lift hover:border-brand hover:bg-brand m-auto rounded-none border-1 border-gray-300 bg-transparent text-white transition-all duration-300"
              >
                {translation.contact.sendButton}
                <MoveRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
