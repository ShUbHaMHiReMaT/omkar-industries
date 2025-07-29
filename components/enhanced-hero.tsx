"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Wrench, Award } from "lucide-react"
import Link from "next/link"

export function EnhancedHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Tyre Tread Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ff6b35' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Tyre Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full animate-pulse">
          <div className="w-full h-full rounded-full border-4 border-orange-500/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/30 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/5 rounded-full animate-bounce">
          <div className="w-full h-full rounded-full border-8 border-orange-500/10 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Shield className="w-12 h-12 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-ping">
          <div className="w-full h-full rounded-full border-2 border-white/10 flex items-center justify-center">
            <Award className="w-8 h-8 text-white/50" />
          </div>
        </div>
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
              repair solutions for the automotive industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="orange-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold"
                asChild
              >
                <Link href="/Neu-Tech">
                  Explore Neu-Tech <ArrowRight className="ml-2 w-5 h-5" />
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

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Tyre Graphics */}
          <div className={`relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Tyre Graphic with Tread Pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-8 border-orange-500 relative animate-spin-slow">
                  {/* Tyre Tread Pattern */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Tread Pattern Lines */}
                    <div className="absolute inset-0 rounded-full">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-8 bg-gray-600"
                          style={{
                            top: "10px",
                            left: "50%",
                            transformOrigin: "50% 140px",
                            transform: `translateX(-50%) rotate(${i * 30}deg)`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Center Hub */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center relative z-10">
                      <Wrench className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Floating Product Icons */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                      style={{ animationDelay: "0.5s" }}
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                    <div
                      className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                      style={{ animationDelay: "1s" }}
                    >
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div
                      className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                      style={{ animationDelay: "1.5s" }}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Tyre Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 border-4 border-orange-500/30 rounded-full animate-pulse">
                <div className="w-full h-full rounded-full bg-orange-500/10 flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
              </div>

              <div
                className="absolute bottom-10 left-10 w-16 h-16 border-4 border-orange-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-full h-full rounded-full bg-orange-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
