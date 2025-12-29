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
    </main>
  );
}
