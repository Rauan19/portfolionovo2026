import { techStack } from '../data/portfolio'

export function TechStack() {
  return (
    <section className="bg-surface-container-low py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
            Arsenal
          </span>
          <h2 className="font-headline mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Tecnologias que domino
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {techStack.map((block) => (
            <div
              key={block.category}
              className="rounded-xl border border-outline-variant/10 bg-surface-container-high p-5 text-center transition-colors hover:border-primary/50 sm:p-6"
            >
              <p className="mb-4 text-xs font-bold tracking-tighter text-primary uppercase">
                {block.category}
              </p>
              <ul className="space-y-2 text-sm text-secondary">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
