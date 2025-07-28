import { Card, CardContent } from "@/components/ui/card"
import { User, Phone, Mail, FileText, MapPin } from "lucide-react"

export function BusinessInfo() {
  const businessDetails = [
    {
      icon: User,
      label: "Proprietor",
      value: "Jyoti Kalidas Durane",
    },
    {
      icon: Phone,
      label: "Contact Numbers",
      value: "+917676146166, +918749058711",
    },
    {
      icon: Mail,
      label: "Email",
      value: "das_durane@yahoo.com",
    },
    {
      icon: FileText,
      label: "GST Number",
      value: "29CFQD1856N1ZR",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Plot No.-S-1, Sy, No;638, 2nd Main Road, Auto Nagar, Kanabargi Industrial Area, Belgaum",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Business <span className="text-orange-500">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete business details and registration information
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Omkar Industries</h3>
                <p className="text-lg text-orange-500 font-semibold">Tyre and Tube Cut Repair Patches and Solution</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {businessDetails.map((detail, index) => {
                  const Icon = detail.icon
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{detail.label}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{detail.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
