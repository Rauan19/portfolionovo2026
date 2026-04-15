import casadopetImg from '../assets/casadopet.png'
import iagoVeiculosImg from '../assets/iagoveiculos.png'
import academiaImg from '../assets/academia.png'
import oficinaImg from '../assets/oficina.png'

export const GITHUB_URL = 'https://github.com/Rauan19'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rauan-neves/'
export const EMAIL = 'rauanconceicao789@gmail.com'
export const PHONE_DISPLAY = '(75) 98828-0737'
export const PHONE_TEL = 'tel:+5575988280737'

export const heroTags = [
  'React',
  'Vue',
  'Node',
  'TypeScript',
  'PostgreSQL',
] as const

export const services = [
  {
    icon: 'web',
    title: 'Sites & Landing Pages',
    description:
      'Presença digital de alto impacto com foco total em conversão e performance SEO.',
  },
  {
    icon: 'smartphone',
    title: 'Aplicativos',
    description:
      'Desenvolvimento mobile nativo e híbrido para iOS e Android com UX intuitiva.',
  },
  {
    icon: 'settings_suggest',
    title: 'Sistemas & ERPs',
    description:
      'Gestão empresarial personalizada para automatizar processos e centralizar dados.',
  },
  {
    icon: 'chat',
    title: 'Bots WhatsApp',
    description:
      'Atendimento automatizado inteligente integrado ao maior app de mensagens do mundo.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Automações & RPA',
    description:
      'Elimine tarefas repetitivas e erros humanos com robôs de software eficientes.',
  },
  {
    icon: 'hub',
    title: 'APIs & Integrações',
    description:
      'Conectividade total entre suas ferramentas favoritas e sistemas legados.',
  },
] as const

export const projects = [
  {
    category: 'AUTOMOTIVE',
    title: 'Iago Veículos',
    description:
      'Site para apresentação de estoque, divulgação de veículos e captação de leads com navegação rápida e foco em conversão.',
    image: iagoVeiculosImg,
    imageAlt: 'Página do site Iago Veículos com vitrine de carros',
    tags: ['React', 'Vite'],
    link: 'https://iagoveiculos.com.br/',
  },
  {
    category: 'FITNESS',
    title: 'Arena Fit',
    description:
      'Landing page para academia com foco em apresentação de planos, benefícios e chamada para ação para novos alunos.',
    image: academiaImg,
    imageAlt: 'Página do site Arena Fit (academia) com informações e planos',
    tags: ['React', 'Vite'],
    link: 'https://arenafit.vercel.app/',
  },
  {
    category: 'AUTOMOTIVE',
    title: 'Moderna Autopeças',
    description:
      'Site institucional para autopeças/oficina, destacando catálogo, serviços e canais de contato para orçamentos.',
    image: oficinaImg,
    imageAlt: 'Página do site Moderna Autopeças com destaque para serviços e peças',
    tags: ['React', 'Vite'],
    link: 'https://autopecas-tawny.vercel.app/',
  },
  {
    category: 'PET',
    title: 'Casa do Pet',
    description:
      'Landing page moderna para pet shop, destacando serviços e chamada para contato com foco em presença digital e conversão.',
    image: casadopetImg,
    imageAlt: 'Página do site Casa do Pet com serviços para pets',
    tags: ['React', 'Vite'],
    link: 'https://cadadopet.vercel.app/',
  },
  {
    category: 'GASTRONOMY',
    title: 'Rei do Menu – Cardápio Interativo',
    description:
      'Sistema completo de cardápio digital com escolha de hambúrgueres, bebidas e pedidos tanto para mesa quanto para delivery.',
    image: '/projects/projetoburger.png',
    imageAlt:
      'Cardápio digital de restaurante com fotos de pratos',
    tags: ['TypeScript', 'Fastify'],
    link: 'https://preview--rei-do-menu.lovable.app/cardapio',
  },
] as const

export const testimonials = [
  {
    quote:
      'O Rauan transformou nossa operação com o novo ERP. Reduzimos o tempo de processamento manual em 70% em apenas dois meses.',
    initials: 'MC',
    name: 'Marcos Costa',
    role: 'CEO na Inova Solutions',
  },
  {
    quote:
      'A landing page desenvolvida superou todas as expectativas de conversão. O design é impecável e a performance é incrível.',
    initials: 'AL',
    name: 'Ana Luíza',
    role: 'Marketing Manager na Rosyhabi',
  },
] as const

export const techStack = [
  {
    category: 'Frontend',
    items: ['React / Next.js', 'Vue / Nuxt', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Fastify / Express', 'TypeScript'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Infra',
    items: ['AWS / GCP', 'Docker', 'CI/CD Pipelines'],
  },
  {
    category: 'Tools',
    items: ['Git / GitHub', 'Figma', 'Jira / Agile'],
  },
] as const

export const WHATSAPP_URL = 'https://wa.me/5575991121519'
