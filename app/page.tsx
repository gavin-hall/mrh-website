import Image from "next/image";
// import { Button } from "@/components/ui/button"
// import { Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import { Testimonials } from "@/components/testimonials"
import { PressLogos } from "@/components/press-logos"
import { NewsletterForm } from "@/components/newsletter-form"
import { Features } from "@/components/features"
import { UpcomingRaces } from "@/components/upcoming-races"
import { FeaturedHorses } from "@/components/featured-horses"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">

        <div className="bg-gray-900">
          <Logo width={200} height={50} className="text-blue-500" />

          <h1 className="font-barlow text-4xl uppercase">Your Text Here</h1>
        </div>
        <Testimonials />
        <PressLogos />
        <NewsletterForm />  
        <Features />
        <UpcomingRaces />
        <FeaturedHorses />
        <SiteFooter />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
