import type { CSSProperties } from 'react'
import { heroTags } from '../data/portfolio'

const chocoDrops: CSSProperties[] = [
  { ['--choco-x' as string]: '4%', ['--choco-w' as string]: '11px', ['--choco-h' as string]: '22px', ['--choco-dur' as string]: '10.5s', ['--choco-delay' as string]: '0s', ['--choco-drift' as string]: '22px' },
  { ['--choco-x' as string]: '11%', ['--choco-w' as string]: '15px', ['--choco-h' as string]: '30px', ['--choco-dur' as string]: '8.2s', ['--choco-delay' as string]: '1.2s', ['--choco-drift' as string]: '-18px' },
  { ['--choco-x' as string]: '18%', ['--choco-w' as string]: '9px', ['--choco-h' as string]: '18px', ['--choco-dur' as string]: '12s', ['--choco-delay' as string]: '2.8s', ['--choco-drift' as string]: '16px' },
  { ['--choco-x' as string]: '26%', ['--choco-w' as string]: '13px', ['--choco-h' as string]: '26px', ['--choco-dur' as string]: '9.4s', ['--choco-delay' as string]: '0.4s', ['--choco-drift' as string]: '-24px' },
  { ['--choco-x' as string]: '34%', ['--choco-w' as string]: '16px', ['--choco-h' as string]: '32px', ['--choco-dur' as string]: '11s', ['--choco-delay' as string]: '3.5s', ['--choco-drift' as string]: '20px' },
  { ['--choco-x' as string]: '42%', ['--choco-w' as string]: '10px', ['--choco-h' as string]: '20px', ['--choco-dur' as string]: '7.6s', ['--choco-delay' as string]: '1.8s', ['--choco-drift' as string]: '-14px' },
  { ['--choco-x' as string]: '50%', ['--choco-w' as string]: '14px', ['--choco-h' as string]: '28px', ['--choco-dur' as string]: '10s', ['--choco-delay' as string]: '4.2s', ['--choco-drift' as string]: '26px' },
  { ['--choco-x' as string]: '58%', ['--choco-w' as string]: '12px', ['--choco-h' as string]: '24px', ['--choco-dur' as string]: '8.8s', ['--choco-delay' as string]: '0.9s', ['--choco-drift' as string]: '-20px' },
  { ['--choco-x' as string]: '66%', ['--choco-w' as string]: '17px', ['--choco-h' as string]: '34px', ['--choco-dur' as string]: '12.5s', ['--choco-delay' as string]: '2.2s', ['--choco-drift' as string]: '18px' },
  { ['--choco-x' as string]: '74%', ['--choco-w' as string]: '8px', ['--choco-h' as string]: '16px', ['--choco-dur' as string]: '6.8s', ['--choco-delay' as string]: '3.1s', ['--choco-drift' as string]: '-12px' },
  { ['--choco-x' as string]: '82%', ['--choco-w' as string]: '14px', ['--choco-h' as string]: '27px', ['--choco-dur' as string]: '9.9s', ['--choco-delay' as string]: '1.5s', ['--choco-drift' as string]: '24px' },
  { ['--choco-x' as string]: '89%', ['--choco-w' as string]: '11px', ['--choco-h' as string]: '21px', ['--choco-dur' as string]: '11.2s', ['--choco-delay' as string]: '4.8s', ['--choco-drift' as string]: '-16px' },
  { ['--choco-x' as string]: '95%', ['--choco-w' as string]: '13px', ['--choco-h' as string]: '25px', ['--choco-dur' as string]: '8.5s', ['--choco-delay' as string]: '2.6s', ['--choco-drift' as string]: '19px' },
  { ['--choco-x' as string]: '7%', ['--choco-w' as string]: '10px', ['--choco-h' as string]: '19px', ['--choco-dur' as string]: '13s', ['--choco-delay' as string]: '5.5s', ['--choco-drift' as string]: '-22px' },
  { ['--choco-x' as string]: '62%', ['--choco-w' as string]: '9px', ['--choco-h' as string]: '17px', ['--choco-dur' as string]: '7.2s', ['--choco-delay' as string]: '4s', ['--choco-drift' as string]: '14px' },
  { ['--choco-x' as string]: '38%', ['--choco-w' as string]: '12px', ['--choco-h' as string]: '23px', ['--choco-dur' as string]: '10.8s', ['--choco-delay' as string]: '6.2s', ['--choco-drift' as string]: '-26px' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-20 pb-12 hero-gradient sm:pb-14 md:min-h-[85vh] md:pt-16 md:pb-6">
      <div className="hero-choco-drops" aria-hidden="true">
        {chocoDrops.map((style, i) => (
          <span key={i} className="hero-choco-drop" style={style} />
        ))}
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-8 sm:px-6 lg:px-8 md:grid-cols-2 md:gap-8 md:items-center">
        <div className="order-2 space-y-4 md:order-1 md:space-y-5">
          <div className="inline-flex flex-wrap gap-1.5 md:gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-surface-container-high px-2 py-0.5 text-[9px] font-bold tracking-widest text-primary uppercase md:px-2.5 md:py-1 md:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-headline text-2xl leading-[1.2] font-bold tracking-tight text-on-surface md:text-4xl md:leading-tight lg:text-[2.75rem]">
            Eu construo sistemas que{' '}
            <span className="text-primary">aceleram negócios</span>
            <span className="text-on-surface">  apps, sites e ERPs.</span>
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-secondary md:text-[1.05rem]">
            Soluções fullstack de alta performance focadas em escalabilidade e
            experiência do usuário. Do código à infraestrutura.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:gap-3">
            <a
              className="btn-neon-solid flex w-full items-center justify-center gap-2 px-5 py-3 text-center text-xs sm:w-auto md:px-6 md:py-3 md:text-sm"
              href="#projetos"
            >
              Ver Projetos{' '}
              <span className="material-symbols-outlined text-lg md:text-xl">
                arrow_forward
              </span>
            </a>
            <a
              className="btn-neon-outline flex w-full items-center justify-center px-5 py-3 text-center text-xs sm:w-auto md:px-6 md:py-3 md:text-sm"
              href="#contato"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
        <div className="relative order-1 mx-auto mb-2 h-[min(300px,62vw)] w-full max-w-[360px] sm:mb-4 sm:h-[340px] sm:max-w-[420px] md:order-2 md:mx-0 md:mb-0 md:mt-0 md:h-[420px] md:max-w-none lg:h-[460px]">
          <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-primary/10 blur-3xl sm:h-48 sm:w-48 md:left-1/4" />
          <div className="absolute top-1/2 right-0 h-28 w-28 rounded-full bg-tertiary/10 blur-3xl sm:h-36 sm:w-36" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="hero-cards-orbit grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex h-[5.25rem] w-[5.25rem] translate-y-5 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-high shadow-xl sm:h-28 sm:w-28 sm:translate-y-6">
                <span className="material-symbols-outlined text-3xl text-primary sm:text-[2.5rem]">
                  devices
                </span>
              </div>
              <div className="flex h-24 w-24 -translate-x-2 items-center justify-center rounded-xl border border-primary/20 bg-surface-container-highest shadow-xl sm:h-32 sm:w-32 sm:-translate-x-3">
                <span className="material-symbols-outlined text-4xl text-tertiary sm:text-[2.75rem]">
                  database
                </span>
              </div>
              <div className="flex h-24 w-24 -translate-y-6 items-center justify-center rounded-2xl border border-outline-variant bg-surface-container-low shadow-xl sm:h-28 sm:w-28 sm:-translate-y-8">
                <span className="material-symbols-outlined text-3xl text-primary sm:text-[2.5rem]">
                  api
                </span>
              </div>
              <div className="flex h-[5.25rem] w-[5.25rem] translate-x-4 items-center justify-center rounded-lg border border-outline-variant bg-surface-container-high shadow-xl sm:h-28 sm:w-28 sm:translate-x-6">
                <span className="material-symbols-outlined text-3xl text-secondary sm:text-[2.5rem]">
                  cloud
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 top-1/2 left-1/2 w-[min(100%,260px)] max-w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-20 sm:w-auto sm:max-w-none md:top-0 md:right-0 md:left-auto md:translate-x-0 md:translate-y-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="320"
              viewBox="0 0 200 200"
              className="mx-auto max-h-[180px] max-w-[180px] sm:max-h-[220px] sm:max-w-[220px] md:mx-0 md:max-h-[260px] md:max-w-[260px]"
            >
              <path
                fill="#62df7d"
                d="M44.7,-76.4C58.3,-69.2,70,-58.1,78.9,-45.1C87.8,-32.1,93.9,-17.1,93.2,-2.5C92.5,12.1,85,26.2,75.4,38.9C65.8,51.6,54,62.8,40.4,70.6C26.8,78.4,11.4,82.8,-3.2,88.4C-17.8,93.9,-31.6,100.6,-44.6,97.2C-57.5,93.8,-69.5,80.3,-78.3,66.1C-87,51.9,-92.4,37.1,-93.7,22.4C-95,7.7,-92.1,-6.9,-86.6,-20.5C-81,-34.1,-72.8,-46.7,-61.7,-55.1C-50.6,-63.5,-36.5,-67.7,-23.4,-75.4C-10.3,-83.1,1.8,-94.3,15.1,-93.1C28.4,-91.9,41.1,-78.3,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
