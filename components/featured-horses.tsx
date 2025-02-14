import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Horse {
  id: string
  status: "HURRY 90% SOLD" | "Selling Fast!" | "Coming Soon"
  type: "Magic Millions Colt" | "Inglis Filly"
  name: string
  description: string
  specs: {
    sire: string
    trainer: string
    ageSex: string
    location: string
  }
  price: number
  sharePercentage: string
  image: string
}

const horses: Horse[] = [
  {
    id: "1",
    status: "HURRY 90% SOLD",
    type: "Magic Millions Colt",
    name: "Street Boss x Belle Danseuse",
    description:
      "A 3YO filly from NZ. A race winner and only a few weeks off a trial! The MyRacehorse import formula has produced winners, So Unusual, Unusual Pearl, The Milkybar Kid and Glory Daze, and could this...",
    specs: {
      sire: "Street Boss",
      trainer: "Ciaron Maher & David Eustace",
      ageSex: "3yo Filly",
      location: "NSW / VIC",
    },
    price: 240.0,
    sharePercentage: "0.02%",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    status: "Selling Fast!",
    type: "Magic Millions Colt",
    name: "Yes Yes Yes x Tamarama",
    description:
      "A 3YO filly from NZ. A race winner and only a few weeks off a trial! The MyRacehorse import formula has produced winners, So Unusual, Unusual Pearl, The Milkybar Kid and Glory Daze, and could this...",
    specs: {
      sire: "Street Boss",
      trainer: "Ciaron Maher & David Eustace",
      ageSex: "3yo Filly",
      location: "NSW / VIC",
    },
    price: 240.0,
    sharePercentage: "0.02%",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    status: "Coming Soon",
    type: "Inglis Filly",
    name: "Autumn Sun x Schifty Thinker",
    description:
      "A 3YO filly from NZ. A race winner and only a few weeks off a trial! The MyRacehorse import formula has produced winners, So Unusual, Unusual Pearl, The Milkybar Kid and Glory Daze, and could this...",
    specs: {
      sire: "Street Boss",
      trainer: "Ciaron Maher & David Eustace",
      ageSex: "3yo Filly",
      location: "NSW / VIC",
    },
    price: 240.0,
    sharePercentage: "0.02%",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    status: "HURRY 90% SOLD",
    type: "Magic Millions Colt",
    name: "Street Boss x Belle Danseuse",
    description:
      "A 3YO filly from NZ. A race winner and only a few weeks off a trial! The MyRacehorse import formula has produced winners, So Unusual, Unusual Pearl, The Milkybar Kid and Glory Daze, and could this...",
    specs: {
      sire: "Street Boss",
      trainer: "Ciaron Maher & David Eustace",
      ageSex: "3yo Filly",
      location: "NSW / VIC",
    },
    price: 240.0,
    sharePercentage: "0.02%",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    status: "Selling Fast!",
    type: "Magic Millions Colt",
    name: "Yes Yes Yes x Tamarama",
    description:
      "A 3YO filly from NZ. A race winner and only a few weeks off a trial! The MyRacehorse import formula has produced winners, So Unusual, Unusual Pearl, The Milkybar Kid and Glory Daze, and could this...",
    specs: {
      sire: "Street Boss",
      trainer: "Ciaron Maher & David Eustace",
      ageSex: "3yo Filly",
      location: "NSW / VIC",
    },
    price: 240.0,
    sharePercentage: "0.02%",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    status: "Coming Soon",
    type: "Inglis Filly",
    name: "Autumn Sun x Schifty Thinker",
    description:
      "A 3YO filly from NZ. A race winner and only a few weeks off a trial! The MyRacehorse import formula has produced winners, So Unusual, Unusual Pearl, The Milkybar Kid and Glory Daze, and could this...",
    specs: {
      sire: "Street Boss",
      trainer: "Ciaron Maher & David Eustace",
      ageSex: "3yo Filly",
      location: "NSW / VIC",
    },
    price: 240.0,
    sharePercentage: "0.02%",
    image: "/placeholder.svg",
  },
]

export function FeaturedHorses() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold ">Featured Horses</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {horses.map((horse) => (
            <Card key={horse.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={horse.image || "/placeholder.svg"}
                  alt={horse.name}
                  width={400}
                  height={300}
                  className="aspect-[4/3] object-cover"
                />
                <Badge
                  className={`absolute left-4 top-4 ${
                    horse.status === "HURRY 90% SOLD"
                      ? "bg-pink-600"
                      : horse.status === "Selling Fast!"
                        ? "bg-pink-600"
                        : "bg-gray-900"
                  }`}
                >
                  {horse.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-pink-600">{horse.type}</p>
                    <h3 className="text-xl font-bold">{horse.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{horse.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Sire</p>
                      <p className="font-medium">{horse.specs.sire}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Trainer</p>
                      <p className="font-medium">{horse.specs.trainer}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Age/Sex</p>
                      <p className="font-medium">{horse.specs.ageSex}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Location</p>
                      <p className="font-medium">{horse.specs.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-2xl font-bold">${horse.price}</p>
                      <p className="text-sm text-gray-500">{horse.sharePercentage} share</p>
                    </div>
                    <p className="text-sm text-gray-500">One-time payment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

