"use client"

import Image from 'next/image'
import { Heart, Award, Leaf, Clock } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dessert is handcrafted with passion and attention to detail.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We use only the finest ingredients sourced from trusted suppliers.',
  },
  {
    icon: Leaf,
    title: 'Fresh & Natural',
    description: 'No artificial preservatives - just pure, natural goodness.',
  },
  {
    icon: Clock,
    title: 'Made to Order',
    description: 'Each order is freshly prepared to ensure maximum freshness.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
              <Image
                src="/images/bakery-story.jpg"
                alt="Sweet Petite Bakery"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="font-serif text-4xl text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Years of sweetening your celebrations
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm text-accent tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2 mb-6">
              A Passion for Perfection
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sweet Petite was born from a simple dream - to create desserts that bring
                joy to every moment. What started as a small home kitchen has grown into
                a beloved bakery, but our commitment to quality remains unchanged.
              </p>
              <p>
                Every recipe is crafted with love, using time-honored techniques and the
                finest ingredients. From our signature brownies to our show-stopping custom
                cakes, each creation is a labor of love designed to make your celebrations
                sweeter.
              </p>
              <p>
                We believe that desserts are more than just treats - they&apos;re moments of
                happiness, shared memories, and celebrations of life&apos;s sweetest occasions.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
