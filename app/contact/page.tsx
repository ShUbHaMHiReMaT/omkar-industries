"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Get in touch with our experts for all your tyre repair needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ready to discuss your requirements? Our team is here to help you find the perfect solution.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details:
                      "Plot No.-S-1, Sy, No;638, 2nd Main Road\nAuto Nagar, Kanabargi Industrial Area\nBelgaum, Karnataka",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: "+917676146166\n+918749058711",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: "das_durane@yahoo.com\ninfo@omkarindustries.com",
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    details: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed",
                  },
                ].map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 text-sm whitespace-pre-line">{info.details}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* WhatsApp CTA */}
              <Card className="border-0 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quick Support</h3>
                      <p className="text-gray-600 text-sm">Chat with us on WhatsApp for instant assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Visit our facility in Auto Nagar, Kanabargi Industrial Area, Belgaum
            </p>
          </div>

          <Card className="border-0 overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.1858434464198!2d74.5405495!3d15.8993318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf61086737a5a1%3A0x280d915e3b563e4c!2sOmkar%20Industries%20(Tyre%20and%20Tube%20Cut%20Repair%20Patches%20and%20Solution)!5e0!3m2!1sen!2sin!4v1753686952876!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </section>
    </div>
  )
}
