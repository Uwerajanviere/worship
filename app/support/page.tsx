import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Heart, Users, Music, Headphones } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/ocean-background.jpg" alt="Ocean background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <Navigation />

      <main className="flex-1 pt-28 relative z-10">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Support Our Ministry</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your generous support helps us continue to provide worship music that touches hearts and changes lives
              around the world.
            </p>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Donation Form */}
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Make a Donation</h2>

                <form className="space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">Donation Type</h3>
                    <RadioGroup defaultValue="one-time" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="text-white">
                          One-time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="text-white">
                          Monthly
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Donation Amount */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">Donation Amount</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {[25, 50, 100, 250, 500, 1000].map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/20"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <div className="pt-3">
                      <Label htmlFor="custom-amount" className="text-white">
                        Custom Amount
                      </Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Other amount"
                          className="pl-8 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">Your Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name" className="text-white">
                          First Name
                        </Label>
                        <Input id="first-name" className="mt-1 bg-white/10 border-white/20 text-white" />
                      </div>
                      <div>
                        <Label htmlFor="last-name" className="text-white">
                          Last Name
                        </Label>
                        <Input id="last-name" className="mt-1 bg-white/10 border-white/20 text-white" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input id="email" type="email" className="mt-1 bg-white/10 border-white/20 text-white" />
                    </div>
                  </div>

                  {/* Payment Information (Placeholder) */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">Payment Information</h3>
                    <div className="p-4 border border-white/20 rounded-md bg-white/5">
                      <p className="text-white/70 text-sm">
                        Payment information would be collected securely here. For demonstration purposes, this section
                        is a placeholder.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Complete Donation
                  </Button>
                </form>
              </div>

              {/* Impact Information */}
              <div className="space-y-8">
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-white mb-6">Your Impact</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-600/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                        <Music className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Support New Music</h3>
                        <p className="text-white/70">
                          Help us produce and share new worship music from talented artists around the world.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-blue-600/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                        <Headphones className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Improve Streaming Quality</h3>
                        <p className="text-white/70">
                          Your donations help us maintain and improve our streaming infrastructure for better listening
                          experiences.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-blue-600/30 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Reach More People</h3>
                        <p className="text-white/70">
                          Help us expand our reach to bring worship music to more people in more places around the
                          world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-white mb-6">Other Ways to Support</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-white/90">
                        <span className="font-medium text-white">Volunteer your skills</span> - Help with technical
                        support, content creation, or community management.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-white/90">
                        <span className="font-medium text-white">Share our ministry</span> - Spread the word about our
                        worship music streams on social media.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-white/90">
                        <span className="font-medium text-white">Pray for our ministry</span> - Your prayers are
                        essential to our mission and greatly appreciated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Why People Support Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "The worship music has been a blessing during my daily commute. I'm happy to support this ministry.",
                  name: "Sarah J.",
                },
                {
                  quote:
                    "I've been listening for years and the music has helped me through difficult times. Supporting this ministry is my way of giving back.",
                  name: "Michael T.",
                },
                {
                  quote:
                    "My family and I listen together every Sunday morning. We're grateful for the opportunity to support such meaningful work.",
                  name: "Rebecca L.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-black/30 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <Heart className="h-8 w-8 text-blue-400" />
                    </div>
                    <p className="text-white/90 text-center mb-4">"{testimonial.quote}"</p>
                    <p className="text-white font-medium text-center">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
