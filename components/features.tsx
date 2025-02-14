import Image from "next/image"
import { Star, Check } from "lucide-react"

interface FeatureItem {
  title: string
  description: string
  benefits: string[]
}

const features: FeatureItem[] = [
  {
    title: "Race Day Privileges",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    benefits: [
      "Lorem ipsum dolor sit amet do eiusmod tempor",
      "Consectetur adipiscing elit, sed do et dolore magna aliqua",
      "Eiusmod tempor incididunt ut labore et consectetur",
    ],
  },
  {
    title: "Behind-The-Scenes Content",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    benefits: [
      "Lorem ipsum dolor sit amet do eiusmod tempor",
      "Consectetur adipiscing elit, sed do et dolore magna aliqua",
      "Eiusmod tempor incididunt ut labore et consectetur",
    ],
  },
  {
    title: "Exclusive Industry Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    benefits: [
      "Lorem ipsum dolor sit amet do eiusmod tempor",
      "Consectetur adipiscing elit, sed do et dolore magna aliqua",
      "Eiusmod tempor incididunt ut labore et consectetur",
    ],
  },
]

export function Features() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-medium tracking-wider text-pink-600">What you&apos;ll receive</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ownership Has Its Privileges</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 ${
                index % 2 ? "md:text-left" : "md:[&>div]:order-2"
              }`}
            >
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                  <Star className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <Check className="h-5 w-5 shrink-0 text-pink-600" />
                      <span className="text-gray-500">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt={`${feature.title} illustration`}
                    width={500}
                    height={400}
                    className="aspect-[5/4] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

