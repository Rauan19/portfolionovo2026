import { services } from '../data/portfolio'

export function Services() {
  return (
    <section
      className="diagonal-cut bg-surface-container-low py-16 sm:py-20 md:py-24"
      id="o-que-faco"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
            Especialidades
          </span>
          <h2 className="font-headline mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Soluções que transformam
          </h2>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="group bg-surface-container-high p-6 transition-all duration-300 hover:bg-surface-container-highest sm:p-8"
            >
              <span className="material-symbols-outlined mb-6 block text-4xl text-primary transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
