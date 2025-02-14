import Image from "next/image"

export function PressLogos() {
  const logos = [
    {
      name: "Forbes",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CTA%20section-QgP4UMXSjUPhlXSFevniAcZ03NCFCU.png",
      width: 120,
      height: 40,
    },
    {
      name: "The New York Times",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CTA%20section-QgP4UMXSjUPhlXSFevniAcZ03NCFCU.png",
      width: 180,
      height: 40,
    },
    {
      name: "Yahoo Finance",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CTA%20section-QgP4UMXSjUPhlXSFevniAcZ03NCFCU.png",
      width: 140,
      height: 40,
    },
    {
      name: "New York Post",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CTA%20section-QgP4UMXSjUPhlXSFevniAcZ03NCFCU.png",
      width: 160,
      height: 40,
    },
    {
      name: "Paulick Report",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CTA%20section-QgP4UMXSjUPhlXSFevniAcZ03NCFCU.png",
      width: 140,
      height: 40,
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-center text-sm font-medium tracking-wider text-pink-600 md:text-base">
            Trusted by over 100,000+ owners. Featured worldwide.
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center p-4">
                <Image
                  src="/placeholder.svg"
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-8 w-auto opacity-70 grayscale transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

