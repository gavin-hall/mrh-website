"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronDown } from "lucide-react"

interface Race {
  number: number
  horse: string
  location: string
  date: string
}

const races: Race[] = [
  {
    number: 8,
    horse: "Duke of Love",
    location: "Moonee Valley",
    date: "5/05/2023",
  },
  {
    number: 4,
    horse: "So Unusual",
    location: "Darwin",
    date: "4/05/2023",
  },
  {
    number: 7,
    horse: "Infatuation",
    location: "Rosehill Gardens",
    date: "4/05/2023",
  },
  {
    number: 3,
    horse: "Etincelle",
    location: "Royal Ascot",
    date: "3/04/2023",
  },
  {
    number: 1,
    horse: "Authentic",
    location: "Pakenham",
    date: "2/05/2023",
  },
  {
    number: 9,
    horse: "Wildcat",
    location: "Bendigo",
    date: "1/05/2023",
  },
]

export function UpcomingRaces() {
  const [sortedRaces, setSortedRaces] = React.useState(races)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")

  const sortByDate = () => {
    const sorted = [...sortedRaces].sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA
    })
    setSortedRaces(sorted)
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  return (
    <section className="w-full  py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold ">Upcoming Races</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>

        <div className="rounded-lg bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Horse</TableHead>
                <TableHead>Race</TableHead>
                <TableHead className="text-right">
                  <button onClick={sortByDate} className="inline-flex items-center hover:text-gray-900">
                    Date
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedRaces.map((race) => (
                <TableRow key={`${race.number}-${race.horse}`}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-red-100">
                        <svg className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 22h20L12 2zm0 3l7.5 15h-15L12 5z" />
                        </svg>
                      </div>
                      <span>
                        {race.number}. {race.horse}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{race.location}</TableCell>
                  <TableCell className="text-right">{race.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

