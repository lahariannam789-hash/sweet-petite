"use client"

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm text-accent tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a question or want to place a custom order? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+916281543017"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6281 543 017
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    WhatsApp available for orders
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:hello@sweetpetite.in"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@sweetpetite.in
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Home Bakery - Delivery Only
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Serving Hyderabad and nearby areas
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Order Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Orders require 24-48 hours advance notice
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="glass rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3170893882!2d78.24323469858607!3d17.412608637473498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sweet Petite Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
