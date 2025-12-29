import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About PPPT
          </h1>
          <p className="mt-4 max-w-2xl text-base text-black/70">
            Physical therapy built for athletes who want more than just pain
            relief — they want to perform.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/10">
            <Image
              src="/husband.png"
              alt="The happy couple who founded Peak Performance PT"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Inspiration from Injury
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Peak Performance PT was founded by Alyssa and her husband,
              inspired by Alyssa’s experience dealing with recurring ankle
              injuries. Those challenges led her to pursue physical therapy and
              shaped her belief that rehab should do more than reduce pain — it
              should build strength, resilience, and confidence. Today, Peak
              Performance PT exists to help athletes overcome injury and perform
              at their best.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Our model focuses on understanding the demands of your sport,
              addressing the root cause of injury, and building resilient
              strength so you can return with confidence — not hesitation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="text-sm font-semibold">1:1 Care</h3>
                <p className="mt-2 text-sm text-black/70">
                  Every session is one-on-one, focused entirely on your goals.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-5">
                <h3 className="text-sm font-semibold">Athlete-Centered</h3>
                <p className="mt-2 text-sm text-black/70">
                  Rehab that reflects how you train, compete, and move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            Our philosophy
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
            We don’t believe in generic protocols or arbitrary timelines.
            Recovery is a process — one that should be guided by objective
            progress, intelligent loading, and movement quality. Whether you’re
            returning from injury or trying to prevent one, our goal is simple:
            help you move better, train harder, and stay healthy longer.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Book a free consult
          </Link>
        </div>
      </section>
    </main>
  );
}
