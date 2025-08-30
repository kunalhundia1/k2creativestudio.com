import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="w-full border-b border-white/10 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white p-0.5 ring-1 ring-black/10">
            <Image src="/logo.png" alt="K2 Creative Studio" width={36} height={36} priority />
          </div>
          <span className="text-sm font-medium text-foreground">K2 Creative Studio</span>
        </div>
        {/* ... existing nav links / CTA ... */}
      </div>
    </header>
  )
}
