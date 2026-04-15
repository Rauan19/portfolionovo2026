import { useEffect, useState } from 'react'
import logoRau from '../assets/logorau.png'

const navLinks = [
  { href: '#o-que-faco', label: 'O que faço' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <nav className="fixed top-0 z-[70] w-full bg-[#0c1321]/40 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a
          href="#"
          className="flex min-w-0 shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1321]"
        >
          <img
            src={logoRau}
            alt="Rauan Neves"
            className="h-8 w-auto max-w-[min(200px,55vw)] object-contain object-left sm:h-9 md:h-10"
            width={200}
            height={40}
            decoding="async"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              className={
                i === 0
                  ? 'font-headline border-b-2 border-[#62df7d] pb-1 text-sm font-bold tracking-widest text-[#62df7d] uppercase'
                  : 'font-headline text-sm tracking-widest text-[#c0c8cc] uppercase transition-colors hover:text-[#62df7d]'
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            className="btn-neon-solid hidden px-5 py-2 text-sm md:block lg:px-6"
            href="#contato"
          >
            Solicitar Orçamento
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant/50 text-on-surface md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-2xl">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-x-0 bottom-0 top-14 z-[60] flex flex-col bg-[#070e1c] px-4 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] md:hidden"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-headline border-b border-surface-container-high py-4 text-sm font-bold tracking-widest text-[#c0c8cc] uppercase transition-colors last:border-b-0 hover:text-[#62df7d] active:text-[#62df7d]"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="btn-neon-solid mt-6 py-4 text-center text-base"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      ) : null}
    </nav>
  )
}
