import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Shield, Wrench } from "lucide-react"
import { BusinessInfo } from "@/components/business-info"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality and ensure every product meets the highest standards",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, driving our innovation and service",
    },
    {
      icon: Wrench,
      title: "Innovation",
      description: "Continuously improving our products and processes to stay ahead of industry needs",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in every aspect of our business operations",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-orange-500">Omkar Industries</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Leading the tyre repair industry with innovation, quality, and unwavering commitment to customer
              satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded over 5 years ago, Omkar Industries began as a small workshop with a vision to provide
                  high-quality tyre repair solutions to the automotive industry. What started as a local business has
                  grown into a trusted manufacturer serving customers across the region.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, investment in technology, and an unwavering
                  commitment to quality. Today, we manufacture over 50+ different products and serve more than 100+
                  satisfied customers.
                </p>
                <p>
                  From humble beginnings to becoming an industry leader, our success story is built on the foundation of
                  trust, quality, and customer satisfaction.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Company Evolution"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business and drive our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind Omkar Industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Priya Sharma", role: "Quality Manager", image: "/placeholder.svg?height=300&width=300" },
              { name: "Amit Patel", role: "Production Head", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 bg-gray-50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <BusinessInfo />
    </div>
  )
}
