"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 pt-24">
        {/* Logo and tagline */}
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary mb-2 tracking-wide">
            Sweet Petite
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground tracking-[0.4em] uppercase">
            Bites of Bliss
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="animate-in fade-in zoom-in-95 duration-1000 delay-300 max-w-4xl mx-auto">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-dessert.jpg"
              alt="Delicious assortment of gourmet desserts"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Text overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
              <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-lg">
                Handcrafted with love, delivered with care
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 relative z-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            size="lg"
            className="glow-button text-lg px-8 py-6 rounded-full"
            asChild
          >
            <Link href="#menu">Order Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#menu"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
