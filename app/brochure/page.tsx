import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ImageIcon, Video, BookOpen } from "lucide-react"

const brochures = [
  {
    id: 1,
    title: "Complete Product Catalog 2024",
    description: "Comprehensive catalog featuring all our tyre and tube repair products",
    type: "PDF",
    size: "15.2 MB",
    pages: "48 pages",
    image: "/placeholder.svg?height=300&width=400",
    icon: BookOpen,
    featured: true,
  },
  {
    id: 2,
    title: "Vulcanizing Products Guide",
    description: "Detailed guide on our vulcanizing fluids and chemical solutions",
    type: "PDF",
    size: "8.5 MB",
    pages: "24 pages",
    image: "/placeholder.svg?height=300&width=400",
    icon: FileText,
    featured: false,
  },
  {
    id: 3,
    title: "Retreading Services Brochure",
    description: "Information about our professional tyre retreading services",
    type: "PDF",
    size: "6.8 MB",
    pages: "16 pages",
    image: "/placeholder.svg?height=300&width=400",
    icon: FileText,
    featured: false,
  },
  {
    id: 4,
    title: "Installation Guide",
    description: "Step-by-step installation guide for tyre repair patches",
    type: "PDF",
    size: "4.2 MB",
    pages: "12 pages",
    image: "/placeholder.svg?height=300&width=400",
    icon: FileText,
    featured: false,
  },
  {
    id: 5,
    title: "Product Images Gallery",
    description: "High-resolution images of all our products",
    type: "ZIP",
    size: "25.6 MB",
    pages: "50+ images",
    image: "/placeholder.svg?height=300&width=400",
    icon: ImageIcon,
    featured: false,
  },
  {
    id: 6,
    title: "Process Demonstration Video",
    description: "Video demonstration of tyre repair and retreading processes",
    type: "MP4",
    size: "120 MB",
    pages: "15 minutes",
    image: "/placeholder.svg?height=300&width=400",
    icon: Video,
    featured: true,
  },
]

export default function BrochurePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Download <span className="text-orange-500">Brochures</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              Access our comprehensive product catalogs, guides, and technical documentation
            </p>
            <Button
              size="lg"
              className="orange-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold"
            >
              <Download className="mr-2 w-5 h-5" />
              Download All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Downloads</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our most popular and comprehensive resources</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {brochures
              .filter((brochure) => brochure.featured)
              .map((brochure) => {
                const Icon = brochure.icon
                return (
                  <Card
                    key={brochure.id}
                    className="group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={brochure.image || "/placeholder.svg"}
                        alt={brochure.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-orange-500 font-semibold">{brochure.type}</div>
                          <div className="text-sm text-gray-500">
                            {brochure.size} • {brochure.pages}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {brochure.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">{brochure.description}</p>

                      <Button className="w-full orange-gradient hover:scale-105 transition-transform duration-300 text-white">
                        <Download className="mr-2 w-4 h-4" />
                        Download Now
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      {/* All Downloads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete collection of our technical documentation and marketing materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochures.map((brochure) => {
              const Icon = brochure.icon
              return (
                <Card
                  key={brochure.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-orange-500 font-semibold">{brochure.type}</div>
                        <div className="text-xs text-gray-500">{brochure.size}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {brochure.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{brochure.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{brochure.pages}</span>
                      <Button
                        size="sm"
                        className="orange-gradient hover:scale-105 transition-transform duration-300 text-white"
                      >
                        <Download className="mr-1 w-3 h-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Custom Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Looking for specific technical information or custom product documentation? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="orange-gradient hover:scale-105 transition-transform duration-300 text-white font-semibold"
              >
                Contact Technical Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 bg-transparent"
              >
                Request Custom Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
