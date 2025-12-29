import Hero from "@/components/Hero";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 text-black/70">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="services" title="Services">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Injury Rehab",
              desc: "A plan built around your sport, your goals, and your timeline.",
            },
            {
              title: "Performance Movement",
              desc: "Strength + mobility + mechanics to improve output and reduce risk.",
            },
            {
              title: "Return-to-Sport",
              desc: "Objective testing and progressive loading so you come back confident.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-black">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="athletes" title="Built for athletes">
        <p className="max-w-2xl text-sm leading-relaxed">
          Whether you’re a runner, lifter, field athlete, or weekend competitor,
          we blend rehab with performance training so you don’t just “feel
          better”—you move better.
        </p>
      </Section>

      <Section id="results" title="What you can expect">
        <ul className="grid gap-3 text-sm md:grid-cols-2">
          <li className="rounded-2xl border border-black/10 p-5">
            Clear plan and timeline after your evaluation
          </li>
          <li className="rounded-2xl border border-black/10 p-5">
            Strength + mobility integrated into every phase
          </li>
          <li className="rounded-2xl border border-black/10 p-5">
            Sport-specific progressions (not generic handouts)
          </li>
          <li className="rounded-2xl border border-black/10 p-5">
            Return-to-sport criteria you can trust
          </li>
        </ul>
      </Section>

      <section id="contact" className="border-t border-black/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            Book a free consult
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Send a quick message and we’ll reply with next steps and
            availability.
          </p>

          <form className="mt-8 grid gap-4 md:max-w-xl">
            <input
              className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 ring-1 ring-white/15 outline-none focus:ring-white/30"
              placeholder="Name"
            />
            <input
              className="w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 ring-1 ring-white/15 outline-none focus:ring-white/30"
              placeholder="Email"
            />
            <textarea
              className="min-h-28 w-full rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 ring-1 ring-white/15 outline-none focus:ring-white/30"
              placeholder="What are you training for / dealing with?"
            />
            <button
              type="button"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Send
            </button>

            <p className="text-xs text-white/50">(Demo)</p>
          </form>
        </div>
      </section>
    </main>
  );
}
