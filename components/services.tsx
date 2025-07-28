"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Shield, Recycle, Award, Settings, Truck } from "lucide-react"

const services = [
  {
    icon: Award,
    title: "About VULTEC",
    description: "Advanced vulcanizing technology for superior tyre repair solutions",
    features: ["Premium Quality", "Proven Technology", "Industry Standard"],
  },
  {
    icon: Wrench,
    title: "Chemical Vulcanizing Fluid [CVF]",
    description: "High-performance chemical vulcanizing fluid for cold repair processes",
    features: ["Fast Curing", "Strong Bond", "Weather Resistant"],
  },
  {
    icon: Settings,
    title: "Tube Repair Materials",
    description: "Complete range of materials for professional tube repair solutions",
    features: ["Durable Materials", "Easy Application", "Long Lasting"],
  },
  {
    icon: Shield,
    title: "Tyre Repair Materials",
    description: "Comprehensive tyre repair materials for all vehicle types",
    features: ["High Quality", "Versatile Use", "Reliable Results"],
  },
  {
    icon: Truck,
    title: "Biased Tyre Repair Patches",
    description: "Specialized patches designed for biased tyre construction repairs",
    features: ["Strong Adhesion", "Heat Resistant", "Professional Grade"],
  },
  {
    icon: Recycle,
    title: "Radial Tyre Repair Patches",
    description: "Advanced patches engineered for radial tyre repair applications",
    features: ["Flexible Design", "Superior Bond", "Long Lasting"],
  },
  {
    icon: Award,
    title: "Universal Patches",
    description: "Versatile patches suitable for various tyre types and repair needs",
    features: ["Multi-Purpose", "Cost Effective", "Easy to Use"],
  },
  {
    icon: Wrench,
    title: "Plug Patches",
    description: "Specialized plug patches for puncture repairs and emergency fixes",
    features: ["Quick Fix", "Permanent Solution", "Reliable Performance"],
  },
]

export function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tyre and tube repair solutions backed by decades of industry expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleItems.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`group hover:shadow-xl transition-all duration-500 border-0 bg-white ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
