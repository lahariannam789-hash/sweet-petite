"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CreditCard, Smartphone, Banknote, Check, Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCart } from '@/context/cart-context'

type PaymentMethod = 'upi' | 'card' | 'cod'

interface CustomerDetails {
  fullName: string
  mobile: string
  address: string
  city: string
  pincode: string
}

export default function CheckoutPage() {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    fullName: '',
    mobile: '',
    address: '',
    city: '',
    pincode: '',
  })

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid =
    customerDetails.fullName.trim() !== '' &&
    customerDetails.mobile.trim().length >= 10 &&
    customerDetails.address.trim() !== '' &&
    customerDetails.city.trim() !== '' &&
    customerDetails.pincode.trim().length === 6

  const sendWhatsAppNotification = () => {
    const itemsList = items
      .map((item) => `${item.name}${item.variant ? ` (${item.variant})` : ''} x${item.quantity} - Rs.${item.price * item.quantity}`)
      .join('\n')

    const message = `*New Order - Sweet Petite*

*Customer Details:*
Name: ${customerDetails.fullName}
Phone: ${customerDetails.mobile}
Address: ${customerDetails.address}
City: ${customerDetails.city}
Pincode: ${customerDetails.pincode}

*Items Ordered:*
${itemsList}

*Total Amount:* Rs.${totalPrice}
*Payment Method:* ${paymentMethod === 'upi' ? 'UPI' : paymentMethod === 'card' ? 'Card' : 'Cash on Delivery'}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/916281543017?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePlaceOrder = async () => {
    if (!isFormValid || items.length === 0) return

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Send WhatsApp notification
    sendWhatsAppNotification()

    // Clear cart and show confirmation
    clearCart()
    setOrderConfirmed(true)
    setIsProcessing(false)
  }

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="font-serif text-3xl text-foreground">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for ordering from Sweet Petite. Your desserts will be prepared soon and delivered to your address.
          </p>
          <Button asChild className="mt-4">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-2xl text-foreground">Your cart is empty</h1>
          <p className="text-muted-foreground">Add some delicious desserts to your cart first!</p>
          <Button asChild>
            <Link href="/#menu">Browse Menu</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="font-serif text-xl text-foreground">Checkout</h1>
            <p className="text-sm text-muted-foreground">Complete your order</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Customer Details */}
            <section className="bg-card rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl mb-6">Delivery Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={customerDetails.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    value={customerDetails.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value.replace(/\D/g, ''))}
                  />
                </div>

                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    placeholder="House/Flat no., Street, Landmark"
                    value={customerDetails.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={customerDetails.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      placeholder="6-digit pincode"
                      maxLength={6}
                      value={customerDetails.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, ''))}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-card rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl mb-6">Payment Method</h2>
              
              <RadioGroup
                value={paymentMethod}
                onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
                className="space-y-3"
              >
                <label
                  htmlFor="upi"
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    paymentMethod === 'upi' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <RadioGroupItem value="upi" id="upi" />
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">UPI</p>
                    <p className="text-sm text-muted-foreground">PhonePe, Google Pay, Paytm</p>
                  </div>
                </label>

                <label
                  htmlFor="card"
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Credit / Debit Card</p>
                    <p className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</p>
                  </div>
                </label>

                <label
                  htmlFor="cod"
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <RadioGroupItem value="cod" id="cod" />
                  <Banknote className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">Pay when you receive</p>
                  </div>
                </label>
              </RadioGroup>
            </section>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <section className="bg-card rounded-2xl p-6 shadow-sm">
              <h2 className="font-serif text-xl mb-6">Order Summary</h2>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 rounded-xl bg-secondary/50">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.name}</h4>
                      {item.variant && (
                        <p className="text-xs text-muted-foreground">{item.variant}</p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-semibold text-sm">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-6 pt-4 border-t space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <Button
                className="w-full mt-6 glow-button"
                size="lg"
                disabled={!isFormValid || isProcessing}
                onClick={handlePlaceOrder}
              >
                {isProcessing ? 'Processing...' : `Place Order - ₹${totalPrice}`}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                By placing this order, you agree to our terms and conditions.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
