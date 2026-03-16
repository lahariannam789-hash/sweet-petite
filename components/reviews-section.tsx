"use client"

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: "The chocolate brownies are absolutely divine! They're so fudgy and rich. I ordered for my daughter's birthday and everyone loved them. Will definitely order again!",
    date: 'February 2026',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    rating: 5,
    text: "Best tiramisu I've ever had! The classic tiramisu tastes just like the ones I had in Italy. The packaging was also beautiful - perfect for gifting.",
    date: 'January 2026',
  },
  {
    id: 3,
    name: 'Anita Desai',
    rating: 5,
    text: "Ordered the Biscoff cupcakes for our office party and they were a huge hit! Moist, flavorful, and beautifully decorated. Sweet Petite never disappoints!",
    date: 'March 2026',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 4,
    text: "The jar cakes are perfect for individual portions. I ordered the triple chocolate and it was heavenly. Quick delivery and the cakes were fresh.",
    date: 'February 2026',
  },
  {
    id: 5,
    name: 'Meera Patel',
    rating: 5,
    text: "I've been ordering from Sweet Petite for all my celebrations. Their custom cakes are works of art and taste amazing. Highly recommend!",
    date: 'January 2026',
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm text-accent tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Review carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Quote className="h-8 w-8 text-accent" />
            </div>
            
            {/* Review card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 pt-12 shadow-lg">
              <div
                className="text-center animate-in fade-in duration-500"
                key={currentIndex}
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < reviews[currentIndex].rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  &quot;{reviews[currentIndex].text}&quot;
                </p>
                
                {/* Author */}
                <div>
                  <p className="font-medium text-foreground">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {reviews[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={goToPrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-border hover:bg-primary/50'
                    }`}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(i)
                    }}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
