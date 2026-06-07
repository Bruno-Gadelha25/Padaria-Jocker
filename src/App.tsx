import { AnimatePresence, motion } from 'motion/react';
import {
  Cake,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Pizza,
  ShoppingBasket,
  Star,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const WHATSAPP_LINK =
  'https://wa.me/5561999999999?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido%20na%20Jockey%20P%C3%A3es.';
const MAP_LINK = 'https://www.google.com/maps/place/Jockey+P%C3%A3es/@-15.8014086,-48.0017236,16z';
const PHONE_LINK = 'tel:+5561999999999';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const HIGHLIGHTS = [
  { value: '10+', label: 'anos servindo a região' },
  { value: '100%', label: 'pedido rápido por mensagem' },
  { value: '06h-22h', label: 'atendimento diário' },
  { value: '4.8/5', label: 'avaliação média dos clientes' },
];

const TESTIMONIALS = [
  {
    name: 'Mariana Silva',
    role: 'Moradora do Jockey',
    text: 'O pão francês é sempre fresco e o atendimento é rápido. Virei cliente fiel.',
  },
  {
    name: 'Ricardo Oliveira',
    role: 'Cliente da pizza',
    text: 'A pizza artesanal chega quente e com bastante recheio. Excelente para pedir em família.',
  },
  {
    name: 'Fernanda Costa',
    role: 'Mãe e cliente',
    text: 'Encomendei um bolo de aniversário e ficou bonito, saboroso e dentro do prazo.',
  },
];

const PRODUCTS = [
  {
    title: 'Pães Frescos',
    desc: 'Francês, integral, multigrãos e fornadas saindo ao longo do dia.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop',
    icon: ShoppingBasket,
  },
  {
    title: 'Confeitaria',
    desc: 'Bolos caseiros, tortas, sonhos e doces para o café ou encomenda especial.',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop',
    icon: Cake,
  },
  {
    title: 'Pizzas Artesanais',
    desc: 'Massa de fermentação natural com ingredientes selecionados e sabor marcante.',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    icon: Pizza,
  },
  {
    title: 'Café da Manhã',
    desc: 'Cuscuz, ovos mexidos, sucos e café coado para começar o dia com energia.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
    icon: Clock,
  },
  {
    title: 'Encomendas',
    desc: 'Kits festa, bolos decorados e opções sob medida para eventos e datas especiais.',
    image:
      'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=2070&auto=format&fit=crop',
    icon: UtensilsCrossed,
  },
  {
    title: 'Padaria & Conveniência',
    desc: 'Produtos do dia a dia, frios, bebidas e tudo para resolver sua rotina sem sair do bairro.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2026&auto=format&fit=crop',
    icon: CheckCircle2,
  },
];

const DIFFERENTIALS = [
  {
    title: 'Sempre fresco',
    desc: 'Fornadas contínuas ao longo do dia para garantir sabor e textura ideais.',
  },
  {
    title: 'Ingredientes premium',
    desc: 'Receitas cuidadas com insumos selecionados e padrão constante de qualidade.',
  },
  {
    title: 'Atendimento rápido',
    desc: 'Pedidos diretos por WhatsApp com resposta simples e agilidade no balcão.',
  },
  {
    title: 'Localização fácil',
    desc: 'Endereço conhecido no Jockey, com acesso prático para retirada e visita.',
  },
];

const SectionHeading = ({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) => (
  <div className="mx-auto max-w-3xl text-center">
    <span
      className={`mb-4 block text-xs font-bold uppercase tracking-[0.35em] ${
        light ? 'text-brand-primary/90' : 'text-brand-primary'
      }`}
    >
      {eyebrow}
    </span>
    <h2
      className={`text-3xl font-serif font-bold leading-tight md:text-5xl ${
        light ? 'text-white' : 'text-brand-secondary'
      }`}
    >
      {title}
    </h2>
    {description ? (
      <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-white/70' : 'text-brand-secondary/70'}`}>
        {description}
      </p>
    ) : null}
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary/20">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-5'
        }`}
        aria-label="Navegação principal"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 transition-transform hover:scale-[1.01]">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white shadow-lg">
              <ShoppingBasket size={24} />
            </div>
            <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-brand-secondary' : 'text-brand-secondary'}`}>
              JOCKEY <span className="text-brand-primary">PÃES</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.3em] text-brand-text/75 transition-colors hover:text-brand-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-transform hover:scale-105"
            >
              Fazer pedido
            </a>
          </div>

          <button
            className="rounded-full border border-brand-primary/20 p-3 text-brand-secondary transition-colors hover:border-brand-primary hover:text-brand-primary md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[60] bg-brand-secondary/95 px-6 py-8 text-white backdrop-blur-md"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.22 }}
          >
            <div className="mx-auto flex h-full max-w-2xl flex-col">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-bold">
                  Jockey <span className="text-brand-primary">Pães</span>
                </span>
                <button
                  className="rounded-full border border-white/15 p-3 text-white/80 transition-colors hover:border-brand-primary hover:text-brand-primary"
                  onClick={closeMenu}
                  aria-label="Fechar menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mt-16 flex flex-1 flex-col justify-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-3xl font-serif font-bold uppercase tracking-widest transition-colors hover:text-brand-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 font-bold text-white transition-transform hover:scale-[1.01]"
                >
                  <MessageCircle size={18} />
                  Fazer pedido no WhatsApp
                </a>
                <button onClick={closeMenu} className="text-sm text-white/70">
                  Voltar para a página
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main id="conteudo">
        <section id="inicio" className="relative min-h-screen overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
              alt="Pães artesanais e ambiente acolhedor da Jockey Pães"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/95 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <span className="mb-5 inline-block rounded-full bg-brand-primary/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-brand-primary">
                Tradição em Vicente Pires
              </span>
              <h1 className="mb-6 text-5xl leading-[1.05] text-brand-secondary md:text-7xl">
                O sabor que faz você <span className="italic text-brand-primary">voltar</span> todos os dias.
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-brand-secondary/80 md:text-xl">
                Padaria, confeitaria e pizzas artesanais com produção diária, atendimento acolhedor e pedidos rápidos pelo WhatsApp.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-brand-primary/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={18} />
                  Fazer pedido no WhatsApp
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-text/20 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-brand-text transition-colors hover:border-brand-primary hover:bg-white/50 hover:text-brand-primary"
                >
                  Ver cardápio
                  <ChevronRight size={18} />
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-brand-primary/10 bg-white/70 p-4 shadow-sm backdrop-blur">
                    <dt className="text-2xl font-bold text-brand-secondary">{item.value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-widest text-brand-text-muted">{item.label}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Clientes satisfeitos"
              title="O que dizem sobre a Jockey Pães"
              description="Mais do que vender produtos, a marca precisa passar confiança, consistência e vontade de voltar."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <motion.article
                  key={testimonial.name}
                  whileHover={{ y: -8 }}
                  className="rounded-2xl border border-brand-secondary/5 bg-brand-bg p-8 shadow-sm"
                >
                  <div className="mb-4 flex items-center text-brand-accent" aria-label="Avaliação 5 estrelas">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm italic leading-relaxed text-brand-text-muted">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/15 font-bold text-brand-primary">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-secondary">{testimonial.name}</h3>
                      <p className="text-xs text-brand-secondary/60">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-brand-bg py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop"
                    alt="Área interna acolhedora da Jockey Pães"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-primary p-6 text-white shadow-xl sm:block">
                  <span className="mb-1 block text-4xl font-bold">10+</span>
                  <span className="block max-w-[10rem] text-sm leading-tight font-medium">
                    anos servindo famílias da região
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <SectionHeading
                  eyebrow="Nossa história"
                  title="Tradição, sabor e atendimento de bairro"
                  description="A Jockey Pães nasceu para ser aquele lugar confiável do dia a dia: pão quentinho de manhã, café, doces, pizzas e encomendas com o mesmo cuidado em cada atendimento."
                />

                <div className="grid gap-4 pt-4 sm:grid-cols-3">
                  {[
                    'Atendimento acolhedor',
                    'Receitas consistentes',
                    'Pedidos por WhatsApp',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-brand-primary/10 bg-white p-4 text-sm font-semibold text-brand-secondary shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-primary font-bold transition-all hover:gap-4"
                >
                  Conheça a padaria no WhatsApp
                  <ChevronRight size={18} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="produtos" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Cardápio"
              title="Tudo o que sua rotina precisa em um só lugar"
              description="Produtos organizados para facilitar a leitura do cliente e reforçar a sensação de variedade e conveniência."
            />

            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.article
                    key={product.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/5]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/45 to-transparent" />

                      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                          <Icon size={26} />
                        </div>
                        <h3 className="mb-2 text-2xl font-serif font-bold">{product.title}</h3>
                        <p className="mb-5 text-sm leading-relaxed text-white/80">{product.desc}</p>
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary"
                        >
                          Pedir agora
                          <ChevronRight size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="diferenciais" className="relative overflow-hidden bg-brand-secondary py-24 text-white">
          <div className="absolute right-0 top-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-40 -ml-40 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Por que escolher"
              title="Uma marca local que transmite confiança"
              description="O site precisa vender a experiência da padaria antes mesmo do cliente chegar ao balcão."
              light
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DIFFERENTIALS.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <CheckCircle2 className="mb-4 text-brand-primary" size={28} />
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-bg py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-2xl md:p-16">
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-brand-primary/5" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.35em] text-brand-primary">
                  Pedido rápido
                </span>
                <h2 className="text-3xl font-serif font-bold text-brand-secondary md:text-5xl">
                  Pronto para fazer seu pedido sem complicação?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-secondary/70">
                  Clique no WhatsApp e fale direto com a equipe para retirar no balcão ou combinar seu pedido com mais agilidade.
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-brand-primary px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-brand-primary/30 transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={26} />
                  Chamar no WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Contato e localização"
                  title="Onde encontrar a Jockey Pães"
                  description="Informações claras ajudam o cliente a decidir mais rápido e reduzem atrito na hora de comprar."
                />

                <div className="space-y-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-secondary/10 bg-brand-bg text-brand-primary shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-secondary">Endereço</h3>
                      <p className="text-brand-text-muted">Vicente Pires, Brasília/DF - Setor Habitacional Jockey Club</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-secondary/10 bg-brand-bg text-brand-primary shadow-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-secondary">Horário de funcionamento</h3>
                      <p className="text-brand-text-muted">Todos os dias, das 06:00 às 22:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-secondary/10 bg-brand-bg text-brand-primary shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-secondary">Telefone e WhatsApp</h3>
                      <p className="text-brand-text-muted">(61) 99999-9999</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 font-bold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle size={18} />
                    Abrir WhatsApp
                  </a>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/15 px-6 py-3 font-bold text-brand-secondary transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    <ExternalLink size={18} />
                    Ver no Google Maps
                  </a>
                </div>
              </div>

              <div className="h-[440px] overflow-hidden rounded-3xl border-8 border-brand-bg shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3839.23123456789!2d-48.0017236!3d-15.8014086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33d62fad2c99%3A0xe50fa35e7fa38dd8!2sJockey+P%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Jockey Pães"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white">
                  <ShoppingBasket size={24} />
                </div>
                <span className="font-serif text-3xl font-bold italic">
                  Jockey <span className="text-brand-primary">Pães</span>
                </span>
              </div>
              <p className="max-w-sm leading-relaxed text-white/65">
                Site institucional voltado para negócios locais, com foco em pedidos rápidos, clareza comercial e apresentação profissional.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Links rápidos</h3>
              <ul className="space-y-4 text-white/65">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition-colors hover:text-brand-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold">Contato rápido</h3>
              <div className="flex gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-primary"
                  aria-label="Abrir WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-primary"
                  aria-label="Abrir Google Maps"
                >
                  <MapPin size={20} />
                </a>
                <a
                  href={PHONE_LINK}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-primary"
                  aria-label="Ligar para a padaria"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Jockey Pães. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-colors hover:bg-green-600"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="sr-only">Abrir WhatsApp</span>
      </motion.a>
    </div>
  );
}
