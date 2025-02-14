"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    try {
      // Replace with your actual newsletter signup endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error()

      setStatus("success")
      setEmail("")
    } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
      setStatus("error")
    }
  }

  return (
    <section className="w-full bg-slate-50">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[800px] space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get notified when new offerings are released
          </h2>
          <p className="text-gray-500 md:text-xl">Be the first to know when new offerings are launched!</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={cn("h-12", status === "error" && "border-red-500 focus-visible:ring-red-500")}
            disabled={status === "loading" || status === "success"}
          />
          <Button
            type="submit"
            className="h-12 bg-pink-600 px-8 hover:bg-pink-700"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Notify Me"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          We care about your data in our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-gray-900">
            privacy policy
          </a>
          .
        </p>

        {status === "error" && <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>}
      </div>
    </section>
  )
}

