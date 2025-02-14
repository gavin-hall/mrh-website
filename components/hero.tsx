"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  const slides = [
    {
      eyebrow: "Insert eyebrow text here",
      headline: "INSERT HEADLINE HERE",
    },
    {
      eyebrow: "Insert eyebrow text here",
      headline: "INSERT HEADLINE HERE",
    },
    {
      eyebrow: "Insert eyebrow text here",
      headline: "INSERT HEADLINE HERE",
    },
  ]

  return (
    <section className="relative flex min-h-screen flex-col">
      <div className="flex-1 bg-gray-900">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="embla__slide relative flex h-full w-full flex-col items-center justify-center px-4 text-center"
              >
                <p className="text-sm font-medium text-gray-300 md:text-base">{slide.eyebrow}</p>
                <h1 className="mt-4 text-4xl font-bold italic tracking-tight text-white sm:text-6xl md:text-7xl">
                  {slide.headline}
                </h1>
                <div className="mt-8 flex gap-4">
                  <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    Secondary CTA
                  </Button>
                  <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700">
                    Primary Call To Action
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  selectedIndex === index ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-2 bg-pink-600" />
    </section>
  )
}

