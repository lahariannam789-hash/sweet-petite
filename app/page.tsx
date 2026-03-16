import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { MenuSection } from '@/components/menu-section'
import { AboutSection } from '@/components/about-section'
import { ReviewsSection } from '@/components/reviews-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
