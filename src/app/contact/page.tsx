export default function ContactPage() {
  return (
    <section id="contact" className="border-t border-black/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 text-white">
        <h2 className="text-2xl font-semibold tracking-tight">
          Book a free consult or session
        </h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Send a quick message and we will reply with next steps and
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

          <p className="text-xs text-white/50">
            (Response within 1000 business days)
          </p>
        </form>
      </div>
    </section>
  );
}
