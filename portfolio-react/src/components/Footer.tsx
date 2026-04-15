import logoRau from '../assets/logorau.png'
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="w-full border-t border-[#232a39]/30 bg-[#070e1c]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:py-12 lg:px-8">
        <img
          src={logoRau}
          alt="Rauan Neves"
          className="h-9 w-auto max-w-[220px] object-contain sm:h-10"
          width={220}
          height={44}
          decoding="async"
        />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-8">
          <a
            className="font-body text-sm text-[#c0c8cc] transition-colors hover:text-[#ffb4a2]"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-body text-sm text-[#c0c8cc] transition-colors hover:text-[#ffb4a2]"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-body text-sm text-[#c0c8cc] transition-colors hover:text-[#ffb4a2]"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a
            className="font-body text-sm text-[#c0c8cc] transition-colors hover:text-[#ffb4a2]"
            href="#contato"
          >
            Privacidade
          </a>
        </div>
        <p className="font-body max-w-[280px] text-center text-sm text-[#c0c8cc] md:max-w-none md:text-left">
          © {new Date().getFullYear()} Rauan Neves. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
