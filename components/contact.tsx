"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Plot No.-S-1, Sy, No;638, 2nd Main Road\nAuto Nagar, Kanabargi Industrial Area\nBelgaum, Karnataka",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+917676146166\n+918749058711",
    },
    {
      icon: Mail,
      title: "Email",
      details: "das_durane@yahoo.com\ninfo@omkarindustries.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your tyre repair needs? Contact us today for expert advice and competitive quotes
          </p>
        </div>

        <div className="grid lg:grid-cols-1 justify-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="border-0 bg-gray-50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Google Maps Embed */}
            <Card className="border-0 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.1858434464198!2d74.5405495!3d15.8993318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf61086737a5a1%3A0x280d915e3b563e4c!2sOmkar%20Industries%20(Tyre%20and%20Tube%20Cut%20Repair%20Patches%20and%20Solution)!5e0!3m2!1sen!2sin!4v1753686952876!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
