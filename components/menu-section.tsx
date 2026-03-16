"use client"

import { useState, useMemo } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DessertCard } from '@/components/dessert-card'
import { desserts, categories } from '@/lib/desserts'

const INITIAL_ITEMS = 8

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredDesserts = useMemo(() => {
    if (selectedCategory === 'All') return desserts
    return desserts.filter((d) => d.category === selectedCategory)
  }, [selectedCategory])

  const displayedDesserts = showAll
    ? filteredDesserts
    : filteredDesserts.slice(0, INITIAL_ITEMS)

  const hasMore = filteredDesserts.length > INITIAL_ITEMS

  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm text-accent tracking-[0.3em] uppercase">
            Our Delights
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            Dessert Menu
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Handcrafted with love using the finest ingredients. Each bite is a moment of pure bliss.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              className="rounded-full whitespace-nowrap"
              onClick={() => {
                setSelectedCategory(category)
                setShowAll(false)
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Dessert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedDesserts.map((dessert, index) => (
            <div
              key={dessert.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <DessertCard dessert={dessert} />
            </div>
          ))}
        </div>

        {/* Show more button */}
        {hasMore && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full gap-2"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronDown className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Notice */}
        <div className="text-center mt-12 p-6 glass rounded-2xl max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Prices will depend on customisations and flavours.
          </p>
          <p className="text-sm text-foreground mt-2 font-medium">
            We also take custom orders for bulk gifting, hampers, party favours, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
