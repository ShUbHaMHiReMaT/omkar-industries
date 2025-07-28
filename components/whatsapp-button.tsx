"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917676146166" // Updated to primary phone number
    const message = "Hello! I'm interested in your tyre repair products and services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
      size="icon"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </Button>
  )
}
