"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Wrench, Award } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-white space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">OMKAR</span>
                <span className="block text-orange-500">INDUSTRIES</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Tyre and Tube Cut Repair Patches and Solutions
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Leading manufacturer of premium quality tyre repair patches, vulcanizing products, and comprehensive
              retreading solutions for the automotive industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="orange-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold"
                asChild
              >
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">25+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Graphics */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Tyre Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-8 border-orange-500 relative animate-spin-slow">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <Wrench className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
