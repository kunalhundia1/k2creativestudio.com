import Link from "next/link"
import Image from "next/image" // add Next.js Image import for logo usage
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Megaphone,
  MousePointerClick,
  Search,
  Palette,
  MonitorSmartphone,
  BarChart3,
  Star,
  CheckCircle2,
} from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="K2 Creative Studio home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white p-0.5 ring-1 ring-black/10">
            <Image src="/logo.png" alt="K2 Creative Studio logo" width={32} height={32} priority />
          </span>
          <span className="font-semibold">K2 Creative Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm hover:underline">
            Services
          </a>
          <a href="#process" className="text-sm hover:underline">
            Process
          </a>
          <a href="#testimonials" className="text-sm hover:underline">
            Testimonials
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
          <a href="tel:+919119119095" className="text-sm hover:underline" aria-label="Call K2 Creative Studio">
            Call
          </a>
          <a
            href="https://wa.me/919119119095"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            aria-label="WhatsApp K2 Creative Studio"
          >
            WhatsApp
          </a>
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-accent text-accent-foreground hover:opacity-90">
            <a href="mailto:k2creativestudio@gmail.com" aria-label="Book a free strategy call via email">
              Book a call
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-serif text-pretty text-3xl md:text-5xl font-semibold">
            Grow faster with performance marketing and standout design
          </h1>
          <p className="text-muted-foreground max-w-prose">
            K2 Creative Studio helps brands scale with social media management, Meta & Google ads, and high-converting
            design for graphics and websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
              <a href="mailto:k2creativestudio@gmail.com">Book a free strategy call</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#services">See our services</a>
            </Button>
          </div>
          <ul className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" aria-hidden />
              ROI-focused campaigns
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" aria-hidden />
              Design that converts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" aria-hidden />
              Transparent reporting
            </li>
          </ul>
        </div>
        <div className="w-full">
          <img
            src="/dashboard-analytics-and-creative-design-mockups.png"
            alt="Marketing analytics dashboard and creative design mockups"
            className="w-full rounded-lg border"
          />
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: <Megaphone className="size-5" aria-hidden />,
      title: "Social Media Management",
      desc: "Strategy, content, and community to grow your brand across Instagram, Facebook, LinkedIn, and more.",
    },
    {
      icon: <MousePointerClick className="size-5" aria-hidden />,
      title: "Meta Ads",
      desc: "Performance-driven campaigns across Facebook & Instagram with precise targeting and testing.",
    },
    {
      icon: <Search className="size-5" aria-hidden />,
      title: "Google Ads",
      desc: "Search, Performance Max, and YouTube campaigns optimized for conversions and ROAS.",
    },
    {
      icon: <Palette className="size-5" aria-hidden />,
      title: "Graphic Design",
      desc: "On-brand creative for social, ads, presentations, and print that elevates your message.",
    },
    {
      icon: <MonitorSmartphone className="size-5" aria-hidden />,
      title: "Website Design",
      desc: "Modern, responsive websites that communicate clearly and convert visitors into customers.",
    },
    {
      icon: <BarChart3 className="size-5" aria-hidden />,
      title: "Analytics & Reporting",
      desc: "Clear dashboards and insights so you always know what’s working and why.",
    },
  ]

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-serif text-pretty text-2xl md:text-4xl font-semibold">What we do</h2>
        <p className="text-muted-foreground mt-3">
          Full-funnel marketing and design support to move your metrics forward.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={s.title} className={`h-full ${i % 2 === 0 ? "bg-card" : "bg-background"}`}>
            <CardHeader>
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 text-primary p-2 mb-2">
                {s.icon}
              </div>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4">
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:opacity-90">
                  <a href="mailto:k2creativestudio@gmail.com" aria-label={`Book a strategy call about ${s.title}`}>
                    Book a Strategy Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { step: "01", title: "Discovery & Goals", text: "We learn your brand, audience, and targets to define success." },
    { step: "02", title: "Strategy & Plan", text: "Channel mix, content pillars, and campaign architecture." },
    { step: "03", title: "Execution", text: "Content production, launch, and ongoing optimization." },
    { step: "04", title: "Report & Scale", text: "Transparent reporting and clear next steps to grow faster." },
  ]
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-serif text-pretty text-2xl md:text-4xl font-semibold">How we work</h2>
        <p className="text-muted-foreground mt-3">A simple, collaborative process focused on impact.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <Card key={s.step}>
            <CardHeader className="flex flex-row items-start gap-3">
              <div className="text-sm font-medium text-primary" aria-hidden>
                {s.step}
              </div>
              <CardTitle className="text-base">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      name: "Kaushal – Kidlingss Founder",
      quote:
        "K2 scaled our Meta and Google campaigns while improving CAC by 28%. The reporting is clear and the design work is top-notch.",
    },
    {
      name: "Surabhi – SiaraWomen Owner",
      quote:
        "Their social media strategy finally gave us consistency and results. Our inbound demos doubled in three months.",
    },
    {
      name: "Mahek – Eeriya owner",
      quote:
        "Fast, collaborative, and creative. From brand graphics to web pages, everything feels cohesive and on-brand.",
    },
  ]
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="font-serif text-pretty text-2xl md:text-4xl font-semibold">Client results</h2>
        <p className="text-muted-foreground mt-3">Real outcomes from brands we support.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <Card key={t.name}>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-1 text-accent" aria-hidden>
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
              </div>
              <CardTitle className="text-base">{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="rounded-xl border p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h3 className="font-serif text-pretty text-2xl font-semibold">Ready to accelerate growth?</h3>
            <p className="text-muted-foreground">
              Book a free 30-minute strategy call. We’ll review your current setup and share practical ways to improve
              performance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
              <a href="mailto:k2creativestudio@gmail.com">Book a Strategy Call</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/919119119095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp K2 Creative Studio at +91-9119119095"
              >
                WhatsApp us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+919119119095" aria-label="Call K2 Creative Studio at +91-9119119095">
                Call +91-9119119095
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white p-0.5 ring-1 ring-black/10">
              <Image src="/logo.png" alt="K2 Creative Studio logo" width={24} height={24} />
            </span>
            <span className="font-medium">K2 Creative Studio</span>
          </div>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              <a className="hover:underline" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#process">
                Process
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="hover:underline" href="mailto:k2creativestudio@gmail.com">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:underline" href="tel:+919119119095" aria-label="Call K2 Creative Studio">
                Call
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://wa.me/919119119095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp K2 Creative Studio"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-6 text-xs/relaxed opacity-90">
          © {new Date().getFullYear()} K2 Creative Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
