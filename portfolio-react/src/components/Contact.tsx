import type { FormEvent } from 'react'

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20 md:py-24" id="contato">
      <div className="pointer-events-none absolute right-0 bottom-0 max-h-[45vh] w-[min(100%,240px)] opacity-10 sm:max-h-none sm:w-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="600"
          height="600"
          viewBox="0 0 200 200"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="#62df7d"
            d="M38.8,-68.2C50.2,-61.1,59.3,-50.7,66.8,-39.2C74.3,-27.7,80.2,-15.1,81.1,-2.2C82,10.7,77.9,23.9,71,36.2C64.1,48.5,54.4,59.8,42.4,67.6C30.4,75.4,16.2,79.7,1.6,77.5C-13,75.3,-28.1,66.5,-40.8,57.2C-53.5,47.9,-63.9,38,-70.5,25.9C-77.1,13.8,-79.9,-0.5,-77.3,-14.2C-74.7,-27.9,-66.7,-41,-55.4,-48.3C-44.1,-55.6,-29.4,-57.1,-16.8,-64.7C-4.1,-72.3,6.5,-86.1,19.3,-86.1C32.1,-86.1,47.1,-72.4,38.8,-68.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase sm:text-sm">
              Contato
            </span>
            <h2 className="font-headline mt-2 mb-6 text-3xl font-bold sm:mb-8 sm:text-4xl md:text-5xl">
              Precisa de um projeto?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-secondary sm:mb-12 sm:text-lg md:text-xl">
              Vamos transformar sua ideia em realidade digital. Preencha o
              formulário e receba uma proposta personalizada.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
                  Email
                </p>
                <p className="text-on-surface">rauanconceicao789@gmail.com</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
                  Localização
                </p>
                <p className="text-on-surface">Bahia, Brasil</p>
              </div>
            </div>
          </div>
          <form
            className="space-y-5 bg-surface-container-low p-5 sm:space-y-6 sm:p-8 md:p-10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-secondary uppercase">
                  Nome
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border-none bg-surface-container-lowest px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-secondary uppercase">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border-none bg-surface-container-lowest px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-secondary uppercase">
                Tipo de Projeto
              </label>
              <select
                name="projectType"
                className="w-full border-none bg-surface-container-lowest px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
              >
                <option>Site / Landing Page</option>
                <option>Aplicativo Mobile</option>
                <option>Sistema / ERP</option>
                <option>Automação / Bot</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-secondary uppercase">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Conte-nos sobre sua necessidade..."
                className="w-full border-none bg-surface-container-lowest px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-container py-4 text-lg font-bold text-on-primary-container transition-all hover:shadow-[0_0_30px_rgba(28,166,77,0.3)]"
            >
              Solicitar Proposta
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
