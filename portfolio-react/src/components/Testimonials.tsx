import { testimonials } from '../data/portfolio'

export function Testimonials() {
  return (
    <section className="diagonal-cut-reverse bg-surface-container-lowest py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
          Feedback
        </span>
        <h2 className="font-headline mt-2 mb-10 text-2xl font-bold sm:mb-16 sm:text-3xl md:text-4xl">
          Resultados que falam
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-surface-container-low p-6 text-left sm:p-10 md:p-12"
            >
              <span className="material-symbols-outlined pointer-events-none absolute -top-4 -left-1 text-5xl text-tertiary opacity-30 sm:-top-8 sm:-left-4 sm:text-6xl">
                format_quote
              </span>
              <p className="mb-6 text-base text-on-surface italic sm:mb-8 sm:text-lg md:text-xl">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
