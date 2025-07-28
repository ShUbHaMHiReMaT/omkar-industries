import { EnhancedHero } from "@/components/enhanced-hero"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { BusinessInfo } from "@/components/business-info"

export default function Home() {
  return (
    <div className="min-h-screen">
      <EnhancedHero />
      <Services />
      <Products />
      <About />
      <BusinessInfo />
      <Contact />
    </div>
  )
}
