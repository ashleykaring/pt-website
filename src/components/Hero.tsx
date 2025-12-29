import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="High performance athlete training"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/20">
            Physical Therapy for High Performance Athletes
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Recover faster.
            <span className="block text-white/90">Return stronger.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            Modern physical therapy built around performance: injury rehab,
            movement optimization, and resilience training—so you can compete at
            your best.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Book a Free Consult
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
            >
              View Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-white/85">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <div className="text-2xl font-semibold text-white">1:1</div>
              <div className="mt-1 text-xs">Focused sessions</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <div className="text-2xl font-semibold text-white">Return</div>
              <div className="mt-1 text-xs">To sport safely</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
              <div className="text-2xl font-semibold text-white">Perform</div>
              <div className="mt-1 text-xs">Build resilience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
