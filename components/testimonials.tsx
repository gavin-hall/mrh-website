"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Review {
  rating: number
  text: string
  author: string
  location: string
}

const reviews: Review[] = [
  {
    rating: 5,
    text: "Must say that I'm pleasantly surprised at the professionalism of this syndicate. I have been lucky enough to be involved with 'Infatuation' and 'So Unusual' which are both city winners. Love the continual flow of information from trainers.",
    author: "Dave K.",
    location: "From New South Wales",
  },
  // Duplicate reviews for demo
  {
    rating: 5,
    text: "Must say that I'm pleasantly surprised at the professionalism of this syndicate. I have been lucky enough to be involved with 'Infatuation' and 'So Unusual' which are both city winners. Love the continual flow of information from trainers.",
    author: "Dave K.",
    location: "From New South Wales",
  },
  {
    rating: 5,
    text: "Must say that I'm pleasantly surprised at the professionalism of this syndicate. I have been lucky enough to be involved with 'Infatuation' and 'So Unusual' which are both city winners. Love the continual flow of information from trainers.",
    author: "Dave K.",
    location: "From New South Wales",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-medium tracking-wider text-pink-600">What customers say</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Owner Reviews</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="fill-current" size={20} strokeWidth={0} />
                        ))}
                      </div>
                      <p className="mt-4 flex-grow text-gray-600">{review.text}</p>
                      <div className="mt-6">
                        <p className="font-semibold">{review.author}</p>
                        <p className="text-sm text-gray-600">{review.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  selectedIndex === index ? "bg-pink-600" : "bg-gray-300",
                )}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

