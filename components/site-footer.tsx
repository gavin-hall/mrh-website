import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Globe } from "lucide-react"

interface FooterLink {
  text: string;
  href: string;
  isNew?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLinks {
  buy: FooterSection;
  updates: FooterSection;
  giftCards: FooterSection;
  aboutUs: FooterSection;
  help: FooterSection;
}

const footerLinks: FooterLinks = {
  buy: {
    title: "Buy",
    links: [
      { text: "Menu Item", href: "/" },
      { text: "Coming Soon", href: "/" },
      { text: "Early Access", href: "/", isNew: true },
      { text: "How It Works", href: "/" },
      { text: "Micro Investing", href: "/" },
      { text: "Syndicate", href: "/" },
    ],
  },
  updates: {
    title: "Updates",
    links: [
      { text: "Trainers", href: "/" },
      { text: "Race Day", href: "/" },
      { text: "Stable Visits", href: "/" },
      { text: "Winners Circle", href: "/" },
      { text: "Latest News", href: "/" },
      { text: "Events", href: "/" },
    ],
  },
  giftCards: {
    title: "Gift Cards",
    links: [
      { text: "Buy Gift Cards", href: "/" },
      { text: "Menu Item", href: "/" },
      { text: "Menu Item", href: "/" },
      { text: "Menu Item", href: "/" },
      { text: "Menu Item", href: "/" },
      { text: "Menu Item", href: "/" },
    ],
  },
  aboutUs: {
    title: "About Us",
    links: [
      { text: "MyRacehorse", href: "/" },
      { text: "Edge Racing", href: "/" },
      { text: "Past Winners", href: "/" },
      { text: "Reviews", href: "/" },
      { text: "Leadership", href: "/" },
      { text: "Careers", href: "/" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { text: "FAQ's", href: "/" },
      { text: "Privacy", href: "/" },
      { text: "Cookies", href: "/" },
      { text: "Licenses", href: "/" },
      { text: "Settings", href: "/" },
      { text: "Contact", href: "/" },
    ],
  },
}

const socialLinks = [
  { Icon: Award, href: "/" },
  { Icon: Globe, href: "/" },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* CTA Section */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-800 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Elite racing. Affordable ownership.</h2>
            <p className="mt-2 text-gray-400">Join over 4,000+ racehorse owners with MyRacehorse.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="bg-white text-gray-900">
              Learn more
            </Button>
            <Button className="bg-pink-600 text-white hover:bg-pink-700">Get started</Button>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-8 py-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 block">
              <Image src="/placeholder.svg" alt="MyRacehorse" width={200} height={40} className="dark:invert" />
            </Link>
            <p className="text-gray-400">The dream starts here</p>
          </div>

          {Object.values(footerLinks).map((column: FooterSection) => (
            <div key={column.title}>
              <h3 className="font-medium text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link: FooterLink) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-white">
                      {link.text}
                      {link.isNew && <span className="ml-2 rounded bg-gray-800 px-2 py-0.5 text-xs">New</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-10 md:flex-row">
          <p className="text-center text-sm text-gray-400">© 2023 MyRacehorse. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <Link key={index} href={href} className="text-gray-400 transition-colors hover:text-white">
                <Icon className="h-5 w-5" />
                <span className="sr-only">Social Link</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

