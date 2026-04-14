import { experience } from '../data/portfolio'

export function About() {
  return (
    <section className="relative bg-surface py-16 sm:py-20 md:py-24" id="sobre">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:gap-16 sm:px-6 md:grid-cols-2 md:gap-20 lg:px-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
            Biografia
          </span>
          <h2 className="font-headline mt-2 mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Focado em código limpo e impacto real.
          </h2>
          <div className="space-y-4 leading-relaxed text-secondary">
            <p>
              Sou Rauan Neves, desenvolvedor Fullstack apaixonado por transformar
              problemas complexos em soluções digitais elegantes e eficientes.
            </p>
            <p>
              Com vasta experiência no ecossistema JavaScript/TypeScript, foco em
              entregar sistemas que não apenas funcionam, mas impulsionam o
              crescimento de negócios.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="material-symbols-outlined shrink-0 text-primary">
                mail
              </span>
              <span className="min-w-0 break-all text-sm sm:text-base">
                rauanconceicao789@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">call</span>
              <span>+55 75 99112-1519</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-8 flex items-center gap-2 text-xl font-bold">
            <span className="material-symbols-outlined text-primary">history</span>
            Experiência
          </h3>
          <div className="relative space-y-8 border-l-2 border-surface-container-high pl-8">
            {experience.map((job) => (
              <div key={job.title} className="relative">
                <div
                  className={`absolute top-1 -left-[41px] h-4 w-4 rounded-full border-4 border-surface ${
                    job.active ? 'bg-primary' : 'bg-surface-container-high'
                  }`}
                />
                <h4 className="font-bold text-on-surface">{job.title}</h4>
                <p className="mb-2 text-sm text-primary">{job.role}</p>
                <p className="text-sm text-secondary">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
