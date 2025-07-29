"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Neu-Tech Technology",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=400",
    description: "Advanced Neu-Tech technology for superior tyre repair solutions",
    features: ["Premium Quality", "Proven Technology", "Industry Standard"],
    popular: true,
  },
  {
    id: 2,
    name: "Chemical Vulcanizing Fluid [CVF]",
    category: "Chemicals",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-performance chemical vulcanizing fluid for cold repair processes",
    features: ["Fast Curing", "Strong Bond", "Weather Resistant"],
    popular: true,
  },
  {
    id: 3,
    name: "Tube Repair Materials",
    category: "Tube Repair",
    image: "/placeholder.svg?height=300&width=400",
    description: "Complete range of materials for professional tube repair solutions",
    features: ["Durable Materials", "Easy Application", "Long Lasting"],
    popular: false,
  },
  {
    id: 4,
    name: "Tyre Repair Materials",
    category: "Tyre Repair",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive tyre repair materials for all vehicle types",
    features: ["High Quality", "Versatile Use", "Reliable Results"],
    popular: true,
  },
  {
    id: 5,
    name: "Biased Tyre Repair Patches",
    category: "Patches",
    image: "/placeholder.svg?height=300&width=400",
    description: "Specialized patches designed for biased tyre construction repairs",
    features: ["Strong Adhesion", "Heat Resistant", "Professional Grade"],
    popular: false,
  },
  {
    id: 6,
    name: "Radial Tyre Repair Patches",
    category: "Patches",
    image: "/placeholder.svg?height=300&width=400",
    description: "Advanced patches engineered for radial tyre repair applications",
    features: ["Flexible Design", "Superior Bond", "Long Lasting"],
    popular: true,
  },
  {
    id: 7,
    name: "Universal Patches",
    category: "Patches",
    image: "/placeholder.svg?height=300&width=400",
    description: "Versatile patches suitable for various tyre types and repair needs",
    features: ["Multi-Purpose", "Cost Effective", "Easy to Use"],
    popular: false,
  },
  {
    id: 8,
    name: "Plug Patches",
    category: "Patches",
    image: "/placeholder.svg?height=300&width=400",
    description: "Specialized plug patches for puncture repairs and emergency fixes",
    features: ["Quick Fix", "Permanent Solution", "Reliable Performance"],
    popular: true,
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "Technology", "Chemicals", "Tube Repair", "Tyre Repair", "Patches"]

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of high-quality tyre and tube repair solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category
                    ? "orange-gradient text-white"
                    : "hover:border-orange-500 hover:text-orange-500"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.popular && <Badge className="absolute top-4 left-4 orange-gradient text-white">Popular</Badge>}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-orange-500 border-orange-500">
                    {product.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full orange-gradient hover:scale-105 transition-transform duration-300 text-white"
                  asChild
                >
                  <Link href="/contact">
                    Get Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="hover:border-orange-500 hover:text-orange-500 transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="/contact">
              Contact Us for More Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
