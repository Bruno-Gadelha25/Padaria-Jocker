/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBasket, 
  UtensilsCrossed, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  Instagram, 
  Phone, 
  MessageCircle, 
  ChevronRight,
  Pizza,
  Cake,
  ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5561999999999"; // Exemplo, o usuário deve configurar
const MAP_LINK = "https://www.google.com/maps/place/Jockey+P%C3%A3es/@-15.8014086,-48.0017236,16z";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary/20">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white shadow-lg">
              <ShoppingBasket size={24} />
            </div>
            <span className={`text-2xl font-serif font-bold ${isScrolled ? "text-brand-secondary" : "text-brand-secondary"}`}>
              JOCKEY <span className="text-brand-primary">PÃES</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-brand-text/80 hover:text-brand-primary font-medium transition-colors uppercase tracking-widest text-xs">Início</a>
            <a href="#sobre" className="text-brand-text/80 hover:text-brand-primary font-medium transition-colors uppercase tracking-widest text-xs">Sobre</a>
            <a href="#produtos" className="text-brand-text/80 hover:text-brand-primary font-medium transition-colors uppercase tracking-widest text-xs">Produtos</a>
            <a href="#contato" className="text-brand-text/80 hover:text-brand-primary font-medium transition-colors uppercase tracking-widest text-xs">Contato</a>
          </div>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-brand-primary hover:bg-brand-accent text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-brand-primary/20 transition-all hover:scale-105"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Pães artesanais"
            className="w-full h-full object-cover scale-105 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/95 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/20 text-brand-primary font-bold text-sm uppercase tracking-wider mb-6">
              Tradição em Brasília
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-secondary leading-[1.1] mb-6">
              O sabor que faz você <span className="text-brand-primary italic">voltar</span> todos os dias.
            </h1>
            <p className="text-lg md:text-xl text-brand-secondary/80 mb-10 leading-relaxed">
              Padaria, confeitaria, pizzas e encomendas fresquinhas todos os dias em Vicente Pires. Sinta o aroma do pão saindo do forno agora mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle size={18} />
                <span>Falar no WhatsApp</span>
              </a>
              <a 
                href="#produtos"
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-brand-text border border-brand-text/20 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg transition-all"
              >
                <span>Ver cardápio</span>
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Micro Social Proof */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-bg overflow-hidden shadow-md">
                    <img 
                      src={`https://picsum.photos/seed/bakery-user-${i}/100/100`} 
                      alt="Cliente"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center text-yellow-500 mb-0.5">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                </div>
                <p className="font-medium text-brand-secondary">Centenas de clientes satisfeitos em Vicente Pires</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-secondary mb-4">O que dizem nossos clientes</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                text: "O pão francês é o melhor de Brasília! Sempre crocante e quentinho. O atendimento é nota dez.",
                role: "Moradora do Jockey"
              },
              {
                name: "Ricardo Oliveira",
                text: "As pizzas são surpreendentes. Massa artesanal de verdade e recheio generoso. Recomendo muito a de calabresa!",
                role: "Cliente fiel"
              },
              {
                name: "Fernanda Costa",
                text: "Encomendei o bolo de aniversário da minha filha e estava maravilhoso. Lindo e muito saboroso. Ganharam uma cliente!",
                role: "Mãe e cliente"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border border-brand-secondary/5 shadow-sm"
              >
                <div className="flex items-center text-brand-accent mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-brand-text-muted italic mb-6 text-sm">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary">{testimonial.name}</h4>
                    <p className="text-xs text-brand-secondary/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section id="sobre" className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop" 
                  alt="Nossa padaria"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-primary rounded-2xl p-6 text-white flex flex-col justify-center shadow-xl hidden sm:flex">
                <span className="text-4xl font-bold mb-2">10+</span>
                <span className="text-sm font-medium leading-tight">Anos servindo a melhor comunidade</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif font-bold text-brand-secondary">Referência em Sabor e Qualidade em Vicente Pires</h2>
              <p className="text-lg text-brand-secondary/80 leading-relaxed">
                A Jockey Pães nasceu da paixão pela panificação artesanal. Em Vicente Pires, nos tornamos o ponto de encontro para quem valoriza ingredientes selecionados e o verdadeiro sabor da tradição.
              </p>
              <p className="text-lg text-brand-secondary/80 leading-relaxed">
                Cada pão, cada doce e cada pizza que sai do nosso forno leva consigo anos de experiência e um compromisso inabalável com a sua satisfação. Somos humanos, somos simples e focados em oferecer o melhor para você e sua família.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-secondary">Tradição</h4>
                    <p className="text-sm text-brand-secondary/60">Receitas passadas por gerações</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-secondary">Paixão</h4>
                    <p className="text-sm text-brand-secondary/60">Feito à mão com carinho</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all"
                >
                  Conheça nossa história no WhatsApp <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços / Produtos */}
      <section id="produtos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold text-brand-secondary mb-6 italic">Nossas Delícias Diárias</h2>
            <p className="text-lg text-brand-secondary/70">
              Do pão quentinho da manhã até a pizza crocante da noite, temos tudo para tornar o seu dia mais saboroso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Pães Frescos",
                desc: "Tradicional francês, integral, multigrãos e pães de fermentação natural assados a todo momento.",
                icon: <ShoppingBasket size={32} />,
                img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Confeitaria",
                desc: "Bolos caseiros, doces finos, tortas e sonhos que derretem na boca. O doce perfeito para o seu dia.",
                icon: <Cake size={32} />,
                img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop"
              },
              {
                title: "Pizzas Artesanais",
                desc: "Massa preparada diariamente com longa fermentação e ingredientes premium selecionados.",
                icon: <Pizza size={32} />,
                img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Encomendas",
                desc: "Kits festa, bolos decorados e tábuas de frios para tornar seu evento inesquecível.",
                icon: <UtensilsCrossed size={32} />,
                img: "https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Conveniência",
                desc: "Laticínios, frios fateados na hora e produtos selecionados para sua praticidade.",
                icon: <CheckCircle2 size={32} />,
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2026&auto=format&fit=crop"
              },
              {
                title: "Café da Manhã",
                desc: "Venha tomar seu café conosco! Cuscuz, ovos mexidos, sucos e o melhor café coado da região.",
                icon: <Clock size={32} />,
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/5]">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80 line-clamp-2 mb-4 group-hover:line-clamp-none transition-all">
                      {item.desc}
                    </p>
                    <a 
                      href={WHATSAPP_LINK} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary"
                    >
                      Pedir agora <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-brand-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif font-bold mb-6">Por que escolher a Jockey Pães?</h2>
              <p className="text-white/70 text-lg mb-8">
                Muito mais que uma padaria, somos o vizinho que você pode confiar para ter o melhor na sua mesa todos os dias.
              </p>
              <a 
                href={WHATSAPP_LINK}
                className="inline-block bg-brand-primary hover:bg-brand-accent text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-brand-primary/20"
              >
                Fazer meu pedido
              </a>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sempre Fresco",
                  desc: "Pães e quitutes produzidos continuamente ao longo do dia.",
                  icon: <Clock className="text-brand-primary" size={28} />
                },
                {
                  title: "Ingredientes Premium",
                  desc: "Usamos apenas as melhores marcas e insumos selecionados.",
                  icon: <CheckCircle2 className="text-brand-primary" size={28} />
                },
                {
                  title: "Atendimento Rápido",
                  desc: "Equipe treinada para te atender com agilidade e sorriso no rosto.",
                  icon: <UtensilsCrossed className="text-brand-primary" size={28} />
                },
                {
                  title: "Localização Fácil",
                  desc: "Estamos no coração do Jockey em Vicente Pires, acesso super fácil.",
                  icon: <MapPin className="text-brand-primary" size={28} />
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-8">
                Pare de perder tempo. Faça seu pedido <span className="text-brand-primary italic underline underline-offset-8">agora</span> mesmo.
              </h2>
              <p className="text-xl text-brand-secondary/70 mb-12 max-w-2xl mx-auto">
                Receba nossas delícias no conforto da sua casa ou venha nos visitar. Estamos prontos para te atender!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-brand-primary/40 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={28} />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-brand-secondary italic">Onde Nos Encontrar</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shrink-0 shadow-sm border border-brand-secondary/5">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">Endereço</h4>
                    <p className="text-brand-text-muted">Vicente Pires, Brasília/DF - Setor Habitacional Jockey Club</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shrink-0 shadow-sm border border-brand-secondary/5">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">Horário de Funcionamento</h4>
                    <p className="text-brand-text-muted italic">Aberto todos os dias: 06:00 às 22:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-lg">Telefone e WhatsApp</h4>
                    <p className="text-brand-secondary/70">(61) 99999-9999</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary transition-all shadow-lg"
                >
                  Abrir no Google Maps <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-bg">
              <iframe 
                src="https://maps.google.com/maps?q=-15.8014086,-48.0017236&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Jockey Pães"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                  <ShoppingBasket size={24} />
                </div>
                <span className="text-3xl font-serif font-bold italic">
                  Jockey <span className="text-brand-primary">Pães</span>
                </span>
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed">
                Referência em qualidade, sabor e atendimento em Vicente Pires. Oferecemos pães frescos, confeitaria, pizzas e muito mais todos os dias.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#inicio" className="hover:text-brand-primary transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#produtos" className="hover:text-brand-primary transition-colors">Produtos</a></li>
                <li><a href="#contato" className="hover:text-brand-primary transition-colors">Localização</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-all">
                  <Instagram size={20} />
                </a>
                <a href={WHATSAPP_LINK} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Jockey Pães. Todos os direitos reservados. Feito com paixão em Brasília.</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Fixo */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
          1
        </span>
      </motion.a>
    </div>
  );
}
