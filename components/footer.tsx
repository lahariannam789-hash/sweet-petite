"use client"

import Link from 'next/link'
import { Instagram, Facebook, Heart } from 'lucide-react'

const quickLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

const menuCategories = [
  'Brownies',
  'Jar Cakes',
  'Cookies',
  'Cupcakes',
  'Tiramisu',
  'Custom Cakes',
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-3xl">Sweet Petite</span>
              <p className="text-xs tracking-[0.3em] uppercase mt-1 opacity-80">
                Bites of Bliss
              </p>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Handcrafted desserts made with love. Every bite is a moment of pure happiness.
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-medium text-lg mb-4">Our Menu</h3>
            <ul className="space-y-3">
              {menuCategories.map((category) => (
                <li key={category}>
                  <Link
                    href="#menu"
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="tel:+916281543017" className="hover:opacity-100 transition-opacity">
                  +91 6281 543 017
                </a>
              </li>
              <li>
                <a href="mailto:hello@sweetpetite.in" className="hover:opacity-100 transition-opacity">
                  hello@sweetpetite.in
                </a>
              </li>
              <li>Hyderabad, India</li>
              <li>Mon - Sun: 9AM - 8PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Sweet Petite. All rights reserved.
          </p>
          <p className="text-sm opacity-80 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 fill-current" /> for dessert lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
