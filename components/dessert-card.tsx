"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Star, Plus, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useCart } from '@/context/cart-context'
import type { Dessert } from '@/lib/desserts'

interface DessertCardProps {
  dessert: Dessert
}

export function DessertCard({ dessert }: DessertCardProps) {
  const { addItem, setIsOpen } = useCart()
  const [showSizeDialog, setShowSizeDialog] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const hasSizes = dessert.sizes && dessert.sizes.length > 0

  const handleAddToCart = () => {
    if (hasSizes) {
      setShowSizeDialog(true)
      setSelectedSize(dessert.sizes![0].id)
    } else {
      addItem({
        id: dessert.id,
        name: dessert.name,
        price: dessert.price,
        variant: dessert.priceLabel,
        image: dessert.image,
      })
      setIsOpen(true)
    }
  }

  const handleConfirmSize = () => {
    if (!selectedSize || !dessert.sizes) return
    
    const size = dessert.sizes.find(s => s.id === selectedSize)
    if (!size) return

    addItem({
      id: size.id,
      name: dessert.name,
      price: size.price,
      variant: size.label,
      image: dessert.image,
    })
    setShowSizeDialog(false)
    setIsOpen(true)
  }

  // Display price range for items with sizes
  const displayPrice = hasSizes
    ? `₹${dessert.sizes![0].price}`
    : `₹${dessert.price}`
  
  const priceLabel = hasSizes
    ? `From ${dessert.sizes![0].label}`
    : dessert.priceLabel

  return (
    <>
      <div className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={dessert.image}
            alt={dessert.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick add button */}
          <Button
            size="icon"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-full glow-button"
            onClick={handleAddToCart}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Category badge */}
          <span className="text-xs text-muted-foreground tracking-wide uppercase">
            {dessert.category}
          </span>
          
          {/* Name */}
          <h3 className="font-medium text-foreground mt-1 text-lg leading-tight">
            {dessert.name}
          </h3>
          
          {/* Price label */}
          {priceLabel && (
            <p className="text-xs text-muted-foreground mt-1">{priceLabel}</p>
          )}
          
          {/* Rating and Price */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{dessert.rating}</span>
            </div>
            
            <span className="text-lg font-semibold text-primary">
              {displayPrice}
            </span>
          </div>
          
          {/* Add to cart button */}
          <Button
            variant="outline"
            className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
            onClick={handleAddToCart}
          >
            {hasSizes ? 'Select Size' : 'Add to Cart'}
          </Button>
        </div>
      </div>

      {/* Size Selection Dialog */}
      <Dialog open={showSizeDialog} onOpenChange={setShowSizeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Select Size</DialogTitle>
          </DialogHeader>
          
          <div className="flex gap-4 py-4">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={dessert.image}
                alt={dessert.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-lg">{dessert.name}</h3>
              <p className="text-sm text-muted-foreground">{dessert.description}</p>
            </div>
          </div>

          <div className="space-y-3">
            {dessert.sizes?.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-colors ${
                  selectedSize === size.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedSize === size.id
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}
                  >
                    {selectedSize === size.id && (
                      <Check className="h-3 w-3 text-primary-foreground" />
                    )}
                  </div>
                  <span className="font-medium">{size.label}</span>
                </div>
                <span className="font-semibold text-primary">₹{size.price}</span>
              </button>
            ))}
          </div>

          <Button 
            className="w-full mt-4 glow-button" 
            size="lg"
            onClick={handleConfirmSize}
          >
            Add to Cart
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
