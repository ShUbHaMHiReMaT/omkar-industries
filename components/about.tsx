"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Factory, Globe } from "lucide-react"

const stats = [
  { icon: Award, value: "5+", label: "Years Experience", color: "text-orange-500" },
  { icon: Users, value: "100+", label: "Happy Clients", color: "text-blue-500" },
  { icon: Factory, value: "50+", label: "Products", color: "text-green-500" },
  { icon: Globe, value: "50+", label: "Cities Served", color: "text-purple-500" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-orange-500">Omkar Industries</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in the tyre repair industry, Omkar Industries has established itself as
                a trusted manufacturer of high-quality tyre and tube repair patches, vulcanizing products, and
                retreading solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to innovation, quality, and customer satisfaction has made us a preferred choice for
                automotive service centers, fleet operators, and individual customers across the region.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={index}
                    className={`text-center p-6 border-0 bg-white hover:shadow-lg transition-all duration-300 ${
                      isVisible ? "animate-bounce-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-0">
                      <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Omkar Industries Workshop"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Award className="w-12 h-12 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">Quality</div>
                  <div className="text-xs text-gray-600">Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
