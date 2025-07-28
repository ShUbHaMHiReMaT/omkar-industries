import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Recycle, Award, Clock, DollarSign } from "lucide-react"

const retreadingServices = [
  {
    id: 1,
    name: "Hot Retreading",
    image: "/placeholder.svg?height=300&width=400",
    description: "Professional hot retreading process for maximum durability and performance",
    features: ["High Temperature Process", "Superior Bond Strength", "Long Lasting Results", "Professional Equipment"],
    benefits: ["Extended Tyre Life", "Cost Effective", "Environmentally Friendly", "Quality Assured"],
    process: ["Inspection", "Buffing", "Repair", "Building", "Curing", "Final Inspection"],
  },
  {
    id: 2,
    name: "Cold Retreading",
    image: "/placeholder.svg?height=300&width=400",
    description: "Efficient cold retreading method for quick turnaround and reliable results",
    features: ["Room Temperature Process", "Quick Turnaround", "Versatile Application", "Cost Efficient"],
    benefits: ["Faster Processing", "Lower Energy Costs", "Suitable for Various Tyres", "Reliable Results"],
    process: ["Assessment", "Preparation", "Cementing", "Application", "Pressing", "Quality Check"],
  },
]

const advantages = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Save up to 50% compared to new tyre costs",
    stat: "50%",
  },
  {
    icon: Recycle,
    title: "Environmental Impact",
    description: "Reduce waste and promote sustainability",
    stat: "80%",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast processing for minimal downtime",
    stat: "24hrs",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Assured quality with warranty coverage",
    stat: "100%",
  },
]

export default function TyreRetreadingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              VULTEC <span className="text-orange-500">Tyre Repair</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              Advanced vulcanizing technology for superior tyre repair solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <Recycle className="w-4 h-4 mr-2" />
                Eco-Friendly
              </Badge>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <DollarSign className="w-4 h-4 mr-2" />
                Cost Effective
              </Badge>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Quality Assured
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Retreading?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of professional tyre retreading services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <Card key={index} className="text-center border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">{advantage.stat}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Retreading Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional hot and cold retreading processes tailored to your needs
            </p>
          </div>

          <div className="space-y-16">
            {retreadingServices.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Process Steps:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, stepIndex) => (
                        <Badge key={stepIndex} variant="outline" className="text-orange-500 border-orange-500">
                          {stepIndex + 1}. {step}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="orange-gradient hover:scale-105 transition-transform duration-300 text-white">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quality Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every retreaded tyre goes through our rigorous quality control process
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { step: 1, title: "Initial Inspection", icon: "🔍" },
              { step: 2, title: "Damage Assessment", icon: "📋" },
              { step: 3, title: "Surface Preparation", icon: "🔧" },
              { step: 4, title: "Repair & Building", icon: "🛠️" },
              { step: 5, title: "Curing Process", icon: "🔥" },
              { step: 6, title: "Final Quality Check", icon: "✅" },
            ].map((process, index) => (
              <Card key={index} className="text-center border-0 bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-sm">{process.step}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{process.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Retread Your Tyres?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Contact us today for professional retreading services and extend your tyre life
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
                Schedule Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
