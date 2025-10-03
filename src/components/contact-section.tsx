'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { LoaderCircle, MoveRight } from 'lucide-react'
import type { Language } from '@/locales'
import { getTranslation } from '@/locales'
import emailjs from '@emailjs/browser'
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
      className="section-darker relative overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute top-40 right-20 h-72 w-72 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="animate-float absolute bottom-20 left-40 h-56 w-56 rounded-full bg-[#0D52FF]/5 blur-3xl"
          style={{ animationDelay: '3.5s' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`mb-10 flex flex-col items-center text-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
        >
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {translation.contact.contactTitle}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            {translation.contact.contactDescription}
          </p>
        </div>

        <form
          className={`mx-auto w-full max-w-2xl ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-8">
            {/* Linha Nome + Email */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label htmlFor="fullName" className="text-white">
                  {translation.contact.nameField}
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder={translation.contact.namePlaceholder}
                  className="w-full border-b border-gray-300 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="email" className="text-white">
                  {translation.contact.emailField}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={translation.contact.emailPlaceholder}
                  className="w-full border-b border-gray-300 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="message" className="text-white">
                {translation.contact.messageField}
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                placeholder={translation.contact.messagePlaceholder}
                className="w-full resize-none border-b border-gray-300 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            <div
              className={`flex justify-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '1s' }}
            >
              <Button className="hover-lift animabe-pulse-glow min-w-[180px] rounded-none border border-gray-400 bg-transparent px-8 py-3 text-base text-white transition-all duration-300 hover:border-[#0D52FF] hover:bg-[#0D52FF] sm:w-auto">
                {loading && (
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                )}
                {translation.contact.sendButton}
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
