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
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-20 pb-12 hero-gradient sm:pb-16 md:min-h-screen md:pb-0">
      <div className="hero-choco-drops" aria-hidden="true">
        {chocoDrops.map((style, i) => (
          <span key={i} className="hero-choco-drop" style={style} />
        ))}
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:px-8 md:grid-cols-2">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-surface-container-high px-2.5 py-1 text-[10px] font-bold tracking-widest text-primary uppercase sm:px-3 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-headline text-3xl leading-[1.1] font-bold tracking-tighter text-on-surface sm:text-4xl sm:leading-tight md:text-6xl lg:text-7xl">
            Eu construo sistemas que{' '}
            <span className="text-primary">aceleram negócios</span>
            <span className="text-on-surface">  apps, sites e ERPs.</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-secondary sm:text-lg md:text-xl">
            Soluções fullstack de alta performance focadas em escalabilidade e
            experiência do usuário. Do código à infraestrutura.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              className="flex w-full items-center justify-center gap-2 bg-primary-container px-6 py-3.5 text-center text-sm font-bold text-on-primary-container transition-transform hover:translate-y-[-2px] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              href="#projetos"
            >
              Ver Projetos{' '}
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                arrow_forward
              </span>
            </a>
            <a
              className="flex w-full items-center justify-center border border-outline-variant px-6 py-3.5 text-center text-sm font-bold text-on-surface transition-colors hover:bg-surface-container-high sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              href="#contato"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
        <div className="relative hidden h-[600px] md:block">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 right-0 h-48 w-48 rounded-full bg-tertiary/10 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid rotate-12 grid-cols-2 gap-6">
              <div className="flex h-32 w-32 translate-y-8 items-center justify-center rounded-xl border border-outline-variant bg-surface-container-high shadow-2xl">
                <span className="material-symbols-outlined text-5xl text-primary">
                  devices
                </span>
              </div>
              <div className="flex h-40 w-40 -translate-x-4 items-center justify-center rounded-2xl border border-primary/20 bg-surface-container-highest shadow-2xl">
                <span className="material-symbols-outlined text-6xl text-tertiary">
                  database
                </span>
              </div>
              <div className="flex h-36 w-36 -translate-y-12 items-center justify-center rounded-3xl border border-outline-variant bg-surface-container-low shadow-2xl">
                <span className="material-symbols-outlined text-5xl text-primary">
                  api
                </span>
              </div>
              <div className="flex h-32 w-32 translate-x-8 items-center justify-center rounded-xl border border-outline-variant bg-surface-container-high shadow-2xl">
                <span className="material-symbols-outlined text-5xl text-secondary">
                  cloud
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 top-0 right-0 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="400"
              viewBox="0 0 200 200"
              className="max-h-[280px] max-w-[min(100%,280px)] md:max-h-none md:max-w-none"
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
