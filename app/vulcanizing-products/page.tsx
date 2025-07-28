import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Beaker, Shield, Zap, Award } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Chemical Vulcanizing Fluid (CVF)",
    category: "Vulcanizing",
    image: "/placeholder.svg?height=300&width=400",
    description: "High-performance vulcanizing fluid for cold repair processes with excellent bonding properties",
    features: ["Fast Curing", "Strong Bond", "Weather Resistant", "Easy Application"],
    specifications: ["Volume: 250ml, 500ml, 1L", "Curing Time: 5-10 minutes", "Temperature Range: -20°C to 80°C"],
    popular: true,
  },
  {
    id: 2,
    name: "Rubber Cement Adhesive",
    category: "Adhesives",
    image: "/placeholder.svg?height=300&width=400",
    description: "Premium quality rubber cement for strong and flexible bonding of rubber materials",
    features: ["Flexible Bond", "Water Resistant", "Long Lasting", "Multi-Purpose"],
    specifications: ["Volume: 100ml, 250ml, 500ml", "Open Time: 15-20 minutes", "Full Cure: 24 hours"],
    popular: false,
  },
  {
    id: 3,
    name: "Tyre Repair Solvent",
    category: "Solvents",
    image: "/placeholder.svg?height=300&width=400",
    description: "Specialized solvent for cleaning and preparing surfaces before patch application",
    features: ["Quick Evaporation", "Residue Free", "Safe Formula", "Effective Cleaning"],
    specifications: ["Volume: 250ml, 500ml", "Flash Point: 23°C", "Evaporation Rate: Fast"],
    popular: true,
  },
  {
    id: 4,
    name: "Hot Vulcanizing Solution",
    category: "Vulcanizing",
    image: "/placeholder.svg?height=300&width=400",
    description: "Professional-grade solution for hot vulcanizing processes in retreading operations",
    features: ["High Temperature", "Industrial Grade", "Consistent Results", "Professional Use"],
    specifications: ["Volume: 1L, 5L", "Operating Temp: 140-160°C", "Cure Time: 30-45 minutes"],
    popular: false,
  },
  {
    id: 5,
    name: "Buffing Solution",
    category: "Preparation",
    image: "/placeholder.svg?height=300&width=400",
    description: "Specialized solution for surface preparation and buffing in tyre repair processes",
    features: ["Surface Prep", "Even Finish", "Easy Application", "Professional Grade"],
    specifications: ["Volume: 500ml, 1L", "pH Level: 7-8", "Viscosity: Low"],
    popular: true,
  },
  {
    id: 6,
    name: "Activator Solution",
    category: "Activators",
    image: "/placeholder.svg?height=300&width=400",
    description: "Chemical activator to enhance bonding strength and reduce curing time",
    features: ["Enhanced Bonding", "Faster Cure", "Improved Strength", "Easy Mix"],
    specifications: ["Volume: 250ml, 500ml", "Mix Ratio: 1:10", "Shelf Life: 2 years"],
    popular: false,
  },
]

export default function VulcanizingProductsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Vulcanizing <span className="text-orange-500">Products</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              Professional-grade vulcanizing solutions for superior tyre repair results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <Beaker className="w-4 h-4 mr-2" />
                Chemical Solutions
              </Badge>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Quality Assured
              </Badge>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Fast Acting
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive selection of vulcanizing products for all your tyre repair needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
                  {product.popular && (
                    <Badge className="absolute top-4 left-4 orange-gradient text-white">Popular</Badge>
                  )}
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

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <div className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                      <div className="space-y-1">
                        {product.specifications.map((spec, specIndex) => (
                          <div key={specIndex} className="text-sm text-gray-500">
                            • {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full orange-gradient hover:scale-105 transition-transform duration-300 text-white">
                    Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality, reliability, and performance you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "ISO Certified",
                description: "All products meet international quality standards",
              },
              {
                icon: Beaker,
                title: "Lab Tested",
                description: "Rigorous testing ensures consistent performance",
              },
              {
                icon: Shield,
                title: "Safe Formula",
                description: "Environmentally friendly and safe to use",
              },
              {
                icon: Zap,
                title: "Fast Acting",
                description: "Quick curing times for efficient repairs",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 bg-gray-50 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact our experts today to discuss your vulcanizing product requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="orange-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold"
              >
                Get Quote Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 bg-transparent"
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
