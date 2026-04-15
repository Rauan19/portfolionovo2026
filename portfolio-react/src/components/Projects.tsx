import { projects } from '../data/portfolio'

export function Projects() {
  return (
    <section className="bg-surface py-16 sm:py-20 md:py-24" id="projetos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:mb-16 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
              Portfolio
            </span>
            <h2 className="font-headline mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
              Trabalhos Selecionados
            </h2>
          </div>
          <div className="max-w-xs text-left text-sm text-secondary md:text-right md:text-base">
            Projetos desenvolvidos com foco em resultados reais para o cliente.
          </div>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden bg-surface-container-low"
            >
              <div className="relative aspect-video overflow-hidden bg-surface-container-high">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded bg-primary/90 px-2 py-1 text-[10px] font-bold text-on-primary">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-primary/30 px-2 py-0.5 text-[10px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-project mt-4 inline-flex w-full items-center justify-center gap-2 py-3 text-sm"
                >
                  Ver projeto
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
