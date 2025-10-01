'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
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
import emailjs from '@emailjs/browser'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import z from 'zod'
import { enqueueSnackbar } from 'notistack'
interface ContactSectionProps {
  language: Language
}

const schema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(5, 'Mensagem muito curta')
})

export function ContactSection({ language }: ContactSectionProps) {
  const translation = getTranslation(language)
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formRef.current) return
    setLoading(true)

    const formData = new FormData(formRef.current)
    const values = {
      name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    }
    console.log('🚀 ~ handleSubmit ~ values:', values)

    const result = schema.safeParse(values)

    if (!result.success) {
      setLoading(false)
      enqueueSnackbar(translation.contact.errorSendMessage, {
        variant: 'error'
      })

      return
    }

    emailjs
      .sendForm(
        'service_r7c3k11',
        'template_vu60cok',
        formRef.current,
        'BxT5RBo0A4uwq3_HR'
      )
      .then(
        () => {
          setLoading(false)
          enqueueSnackbar(translation.contact.successSendMessage, {
            variant: 'success'
          })

          formRef.current?.reset()
        },
        (err: ErrorEvent) => {
          setLoading(false)
          console.log(err.message)
        }
      )
  }

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
        <form
          className={`flex justify-center lg:col-span-1 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="flex w-1/2 flex-col gap-12">
            <div className="flex flex-row gap-10">
              <div className="w-1/2">
                <label htmlFor="name" className="text-white">
                  {translation.contact.nameField}
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder={translation.contact.namePlaceholder}
                  className="w-full border-b-1 border-gray-300 p-1 text-gray-400 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="text-white">
                  {translation.contact.emailField}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
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
                name="message"
                id="message"
                required
                placeholder={translation.contact.messagePlaceholder}
                className="w-full border-b-1 border-gray-300 p-1 text-gray-400 focus:outline-none"
              />
            </div>
            <div className="flex h-fit w-full">
              <Button className="hover-lift hover:border-brand hover:bg-brand m-auto w-1/5 rounded-none border-1 border-gray-400 bg-transparent text-white transition-all duration-300">
                {loading && <LoadingSpinner />}
                {translation.contact.sendButton}
                <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
