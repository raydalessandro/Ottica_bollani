import React, { useState } from 'react';
import { 
  Home, Eye, Users, MapPin, Phone, Instagram, Clock,
  Heart, X, ChevronRight, Menu, Award, Play, ArrowLeft,
  Glasses, Book, Shield, FileText, TrendingUp,
  Calendar, GraduationCap, ShoppingBag, Pen, Mail,
  Youtube, Facebook, Globe, Star, Download, Sparkles,
  CheckCircle2, ArrowRight, Zap, Target, Lightbulb
} from 'lucide-react';

export default function OtticaBollaniApp() {
  const [currentSpace, setCurrentSpace] = useState('negozio');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [likedArticles, setLikedArticles] = useState(new Set());
  const [showPortalAnimation, setShowPortalAnimation] = useState(false);

  const shopInfo = {
    name: "Ottica Bollani",
    tagline: "Bottega Storica dal 1972 • Milano",
    location: "Viale Teodorico 19/2, Milano",
    phone: "02 347466",
    whatsapp: "345 832 3121",
    email: "info@otticabollani.it",
    instagram: "@otticabollani",
    stats: { 
      anni: "50+", 
      generazioni: "3", 
      premio: "2023", 
      rating: "4.8" 
    }
  };

  const services = [
    {
      id: 1,
      name: "Visita Optometrica Comportamentale",
      shortName: "Visita Optometrica",
      price: "Su appuntamento",
      description: "Analisi completa visuo-posturale con test specifici. Valutazione professionale per bambini e adulti. Strumentazione diagnostica avanzata.",
      features: ["Analisi posturale completa", "Test comportamentali avanzati", "Valutazione pediatrica specializzata", "Strumentazione d'avanguardia", "Protocollo personalizzato"],
      icon: Eye,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      name: "Occhiali Vista & Sole",
      shortName: "Occhiali",
      price: "Da €150",
      description: "Montaggio professionale in laboratorio interno. Lenti progressive ultima generazione. Riparazioni rapide. Vasta selezione montature.",
      features: ["Laboratorio interno", "Montaggio immediato", "Riparazioni in giornata", "Montature selezionate", "Garanzia completa"],
      icon: Glasses,
      color: "from-emerald-600 to-teal-700"
    },
    {
      id: 3,
      name: "Lenti a Contatto",
      shortName: "LAC",
      price: "Da €80",
      description: "Applicazione specializzata. Tradizione nelle lenti sclerali. Controlli periodici inclusi. Tutte le tipologie disponibili.",
      features: ["Applicazione professionale", "Lenti sclerali tradizionali", "Controlli periodici", "Tutte le tipologie", "Manutenzione gratuita"],
      icon: Target,
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 4,
      name: "Visual Training",
      shortName: "Training",
      price: "Percorso su misura",
      description: "Esercizi mirati per potenziare le abilità visive. Protocolli personalizzati per ogni età. Monitoraggio costante dei progressi.",
      features: ["Esercizi personalizzati", "Tutte le età", "Protocollo graduale", "Monitoraggio continuo", "Supporto dedicato"],
      icon: TrendingUp,
      color: "from-indigo-600 to-purple-700"
    },
    {
      id: 5,
      name: "Lenti Stellest™",
      shortName: "Miopia Bambini",
      price: "Da €400",
      description: "Tecnologia Essilor per controllare la progressione miopica. Soluzione innovativa per bambini 6-14 anni. Monitoraggio crescita.",
      features: ["Controllo miopia", "Tecnologia Essilor", "Età 6-14 anni", "Monitoraggio incluso", "Certificazione europea"],
      icon: Shield,
      color: "from-violet-600 to-purple-800"
    },
    {
      id: 6,
      name: "Consulenza Calligrafica",
      shortName: "Screening Bambini",
      price: "€60",
      description: "Analisi postura e impugnatura per bambini. Screening pre-scolastico completo. Collegamento con progetti educativi RQ.",
      features: ["Analisi posturale", "Screening visivo completo", "Valutazione impugnatura", "Consigli pratici", "Link progetto RQ"],
      icon: Pen,
      color: "from-amber-600 to-orange-700"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Giorgio Bollani",
      role: "Ottico Optometrista",
      bio: "Dal 1978 in negozio. Premio Ferrante 2000 come Miglior Optometrista. Salvino d'Argento 2018. Specialista optometria comportamentale.",
      awards: ["Premio Ferrante 2000", "Salvino d'Argento 2018"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      id: 2,
      name: "Barbara Soverino",
      role: "Direttrice Vendite",
      bio: "Esperienza pluriennale. Specializzata in lenti a contatto e selezione montature. Punto di riferimento per i clienti.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      id: 3,
      name: "Laura Crespi",
      role: "Consulente Storica",
      bio: "Vedova di Mario Bollani. Custode della tradizione e memoria storica dell'ottica dal 1972.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    },
    {
      id: 4,
      name: "Dino & Sebastiano",
      role: "Nuova Generazione",
      bio: "Figli di Giorgio. 8+ anni esperienza retail. Innovazione e tradizione per il futuro.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    }
  ];

  const timeline = [
    { year: "1949", event: "Mario Bollani presso Ottica Bardelli" },
    { year: "1951", event: "Diploma Contattologia Firenze" },
    { year: "1972", event: "Apertura Viale Teodorico" },
    { year: "1978", event: "Giorgio entra in negozio" },
    { year: "2000", event: "Premio Ferrante" },
    { year: "2018", event: "Salvino d'Argento" },
    { year: "2023", event: "Bottega Storica Milano" }
  ];

  const articles = [
    {
      id: 1,
      title: "Il Metodo Visuo-Grafo-Motorio",
      subtitle: "Come scrivere protegge la vista",
      excerpt: "Relazione tra postura, visione e scrittura. Prevenire miopia educando al gesto corretto.",
      author: "Giorgio Bollani",
      date: "2024",
      category: "Educazione",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400",
      readTime: "8 min",
      likes: 234,
      featured: true
    },
    {
      id: 2,
      title: "Quaderni RQ: la rivoluzione",
      subtitle: "Rigatura scolastica innovativa",
      excerpt: "Come nasce RQ: rigo rafforzato dai quadretti. Criteri optometrici per Alta Qualità Visiva.",
      author: "Giorgio Bollani",
      date: "2024",
      category: "Innovazione",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400",
      readTime: "6 min",
      likes: 189,
      featured: true
    },
    {
      id: 3,
      title: "Impugnatura corretta",
      subtitle: "Primo passo per vedere bene",
      excerpt: "Analisi impugnature scorrette e conseguenze. Insegnare ai bambini la presa giusta.",
      author: "Giorgio Bollani",
      date: "2024",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=400",
      readTime: "10 min",
      likes: 156,
      featured: false
    },
    {
      id: 4,
      title: "L.I.V. Leggio Insegna Visione",
      subtitle: "Studiare a 20 gradi",
      excerpt: "Piano inclinato migliora apprendimento e riduce affaticamento. DIY e modelli pro.",
      author: "Giorgio Bollani",
      date: "2024",
      category: "Strumenti",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400",
      readTime: "7 min",
      likes: 142,
      featured: false
    }
  ];

  const products = [
    {
      id: 1,
      name: "Easy Write",
      subtitle: "Quaderno Grafismo",
      format: "21x21 cm",
      age: "3-6 anni",
      description: "Piste colorate per scuola infanzia. Piano verde per correre, pista bianca per scivolare. Semaforo visivo integrato.",
      features: ["Piste colorate", "Formato quadrato", "Carta Fabriano 90g", "Età 3-6 anni", "Semaforo visivo"],
      price: "€5,50",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      color: "from-emerald-500 to-green-700"
    },
    {
      id: 2,
      name: "RQ Universale",
      subtitle: "Rigatura 3-in-1",
      format: "A4",
      age: "5-14 anni",
      description: "Unica rigatura necessaria. Quadretti 1cm + Riga 1cm + quadretti 0.5cm. Tutte le materie in un quaderno.",
      features: ["Rigatura 3-in-1", "Tutte le materie", "Criteri optometrici", "Carta Fabriano 90g", "Età 5-14 anni"],
      price: "€6,00",
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400",
      color: "from-blue-600 to-indigo-800"
    },
    {
      id: 3,
      name: "Ausili Impugnatura",
      subtitle: "Ergonomici",
      format: "Universale",
      age: "3+ anni",
      description: "Impugnature per destrimani e mancini. Mantengono presa corretta durante scrittura. Personalizzabili.",
      features: ["Destri/mancini", "Materiale morbido", "Personalizzabili", "Facile applicazione", "Lavabili"],
      price: "€3,50",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400",
      color: "from-amber-500 to-orange-700"
    },
    {
      id: 4,
      name: "L.I.V. Leggio",
      subtitle: "Piano 20°",
      format: "Regolabile",
      age: "Tutte",
      description: "Leggio Insegna Visione. Piano inclinato ottimale per lettura/scrittura. Riduce affaticamento visivo-posturale.",
      features: ["Inclinazione 20°", "Benessere posturale", "Studio/lavoro", "Trasportabile", "Design Bollani"],
      price: "€45,00",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
      color: "from-violet-600 to-purple-800"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Gesto Visuo-Grafo-Motorio",
      subtitle: "Dai 5 ai 14 anni",
      duration: "9 ore",
      format: "FAD Sincrona",
      price: "€90 / €80 gruppi",
      platform: "SOFIA MIUR",
      nextDates: ["Date su culturaeformazione.it"],
      description: "Corso MIUR per insegnanti/operatori. Educare bambini al gesto corretto di scrittura con metodo RQ.",
      destinatari: ["Insegnanti infanzia/primaria", "Logopedisti", "Psicologi/Pedagogisti", "TNPEE", "Genitori"],
      obiettivi: [
        "Osservare difficoltà scrittura",
        "Educare impugnatura corretta",
        "Prevenire posture scorrette",
        "Scegliere materiali AQV"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400"
    }
  ];

  const BollaniLogo = ({ size = 'md', theme = 'light' }) => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-lg',
      lg: 'text-3xl',
      xl: 'text-4xl'
    };
    
    const iconSizes = {
      sm: 'w-7 h-7',
      md: 'w-10 h-10',
      lg: 'w-16 h-16',
      xl: 'w-20 h-20'
    };
    
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
    const accentColor = theme === 'dark' ? 'text-blue-300' : 'text-blue-600';
    
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <Glasses className={iconSizes[size] + ' ' + (theme === 'dark' ? 'text-blue-400' : 'text-blue-600')} strokeWidth={1.8} />
        </div>
        <div className="flex flex-col leading-none">
          <span className={'text-[10px] tracking-wide font-semibold ' + (theme === 'dark' ? 'text-blue-300' : 'text-blue-600')}>OTTICA</span>
          <span className={sizeClasses[size] + ' font-black tracking-tight ' + textColor + ' -mt-px'}>BOLLANI</span>
          {size !== 'sm' && <div className={'text-[9px] tracking-wider font-bold mt-px ' + (theme === 'dark' ? 'text-blue-300/80' : 'text-blue-600/80')}>dal 1972</div>}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* COMPACT HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-40 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <button 
            onClick={() => setShowMenu(true)}
            className="p-1.5 -ml-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-4.5 h-4.5 text-gray-700" />
          </button>
          <BollaniLogo size="sm" />
          <div className="w-7"></div>
        </div>
      </header>

      <main className="pt-12 pb-24">
        {currentSpace === 'negozio' ? (
          <>
            {activeSection === 'hero' && (
              <div>
                {/* COMPACT HERO */}
                <div className="relative h-64 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px'
                    }}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-center items-center text-white px-5 text-center">
                    <BollaniLogo size="lg" theme="dark" />
                    
                    <div className="mt-5 space-y-2">
                      <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <Award className="w-3 h-3" />
                        <span className="text-[10px] font-bold tracking-wide">BOTTEGA STORICA 2023</span>
                      </div>
                      
                      <p className="text-xs opacity-90 max-w-xs leading-snug">
                        {shopInfo.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* COMPACT STATS */}
                <div className="bg-white border-b border-gray-100">
                  <div className="grid grid-cols-4 divide-x divide-gray-100">
                    {Object.entries(shopInfo.stats).map(([key, value]) => (
                      <div key={key} className="p-2.5 text-center">
                        <div className="text-lg font-black text-blue-600 mb-0.5">
                          {key === 'rating' ? (
                            <div className="flex items-center justify-center gap-0.5">
                              <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                              <span className="text-base">{value}</span>
                            </div>
                          ) : value}
                        </div>
                        <div className="text-[9px] uppercase text-gray-500 font-semibold tracking-wide">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* COMPACT STORIA */}
                <div className="px-4 py-4 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-6 h-0.5 bg-blue-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Storia</h2>
                  </div>
                  
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Mario Bollani</strong> fonda nel 1972 uno dei negozi storici di Milano. 
                    Pioniere contattologia italiana. Oggi <strong className="text-gray-900">Giorgio Bollani</strong>, 
                    Premio Ferrante 2000, continua con optometria comportamentale.
                  </p>
                </div>

                {/* COMPACT CTA */}
                <div className="p-3 m-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl text-white shadow-lg">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <h3 className="font-bold text-sm uppercase tracking-wide">Prenota Visita</h3>
                  </div>
                  <p className="text-xs opacity-90 mb-3">Analisi optometrica professionale</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a 
                      href={'tel:' + shopInfo.phone} 
                      className="bg-white text-blue-600 px-4 py-2.5 rounded-lg font-bold text-xs uppercase text-center hover:bg-blue-50 transition-colors"
                    >
                      Chiama
                    </a>
                    <a 
                      href={'https://wa.me/39' + shopInfo.whatsapp.replace(/\s/g, '')} 
                      className="bg-emerald-500 text-white px-4 py-2.5 rounded-lg font-bold text-xs uppercase text-center hover:bg-emerald-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'servizi' && (
              <div className="px-3 py-4">
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <div className="w-6 h-0.5 bg-blue-600"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Servizi</h2>
                </div>
                
                <div className="space-y-2.5">
                  {services.map(service => {
                    const Icon = service.icon;
                    return (
                      <div 
                        key={service.id} 
                        onClick={() => setSelectedService(service)}
                        className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all active:scale-[0.98]"
                      >
                        <div className="flex items-start gap-3 mb-2.5">
                          <div className={'w-10 h-10 rounded-lg bg-gradient-to-br ' + service.color + ' flex items-center justify-center flex-shrink-0 shadow-sm'}>
                            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-xs uppercase text-gray-900 mb-0.5 tracking-wide leading-tight">{service.shortName}</h3>
                            <p className="text-blue-600 text-xs font-bold">{service.price}</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug mb-2">{service.description}</p>
                        <div className="flex items-center gap-1.5 text-[10px] text-blue-600 font-bold">
                          <span>Dettagli</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeSection === 'team' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-blue-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Team</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">3 generazioni al servizio della visione</p>
                </div>

                <div className="px-3 py-4 space-y-2.5">
                  {teamMembers.map(member => (
                    <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-sm text-gray-900">{member.name}</h3>
                        <p className="text-xs text-blue-600 font-bold mb-2">{member.role}</p>
                        <p className="text-[11px] text-gray-600 leading-snug">{member.bio}</p>
                        {member.awards && (
                          <div className="mt-2 pt-2 border-t border-gray-100 space-y-1">
                            {member.awards.map((award, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-[10px]">
                                <Award className="w-3 h-3 text-blue-600" />
                                <span className="text-gray-700">{award}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-3 pb-4">
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="w-6 h-0.5 bg-blue-600"></div>
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Timeline</h3>
                    </div>
                    <div className="space-y-2">
                      {timeline.map((item, i) => (
                        <div key={i} className="flex gap-2.5">
                          <div className="flex-shrink-0 w-11">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white text-[10px] font-bold px-1.5 py-1 rounded text-center">
                              {item.year}
                            </div>
                          </div>
                          <div className="flex-1 pt-px">
                            <div className="text-[11px] text-gray-700 leading-snug">{item.event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'contatti' && (
              <div className="px-3 py-4">
                <div className="space-y-2.5">
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <MapPin className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase font-bold text-gray-500 tracking-wide">Dove siamo</div>
                        <div className="font-bold text-xs text-gray-900 leading-tight">{shopInfo.location}</div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg text-xs font-bold uppercase">
                      Apri Maps
                    </button>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <Phone className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase font-bold text-gray-500 tracking-wide">Contatti</div>
                        <div className="font-bold text-xs text-gray-900">Chiamaci o scrivi</div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <a href={'tel:' + shopInfo.phone.replace(/\s/g, '')} className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-2.5 rounded-lg transition-colors">
                        <span className="text-xs font-bold text-gray-900">Telefono</span>
                        <span className="text-xs text-blue-600 font-bold">{shopInfo.phone}</span>
                      </a>
                      <a href={'https://wa.me/39' + shopInfo.whatsapp.replace(/\s/g, '')} className="flex items-center justify-between bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-2.5 rounded-lg">
                        <span className="text-xs font-bold">WhatsApp</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                      <a href={'mailto:' + shopInfo.email} className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-2.5 rounded-lg transition-colors">
                        <span className="text-xs font-bold text-gray-900">Email</span>
                        <Mail className="w-4 h-4 text-blue-600" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <Clock className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase font-bold text-gray-500 tracking-wide">Orari</div>
                        <div className="font-bold text-xs text-gray-900">Apertura</div>
                      </div>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Lun</span>
                        <span className="font-bold text-red-600 text-[11px]">CHIUSO</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Mar-Ven</span>
                        <span className="font-bold text-gray-900 text-[11px]">9:15-12:30 / 15:30-19:30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Sab</span>
                        <span className="font-bold text-gray-900 text-[11px]">9:15-12:30</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Dom</span>
                        <span className="font-bold text-red-600 text-[11px]">CHIUSO</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl p-3.5 text-white">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Instagram className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-[9px] uppercase font-bold tracking-wide opacity-90">Seguici</div>
                        <div className="font-bold text-sm">{shopInfo.instagram}</div>
                      </div>
                    </div>
                    <button className="w-full bg-white text-purple-600 py-2.5 rounded-lg text-xs font-bold uppercase">
                      Apri Instagram
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {activeSection === 'blog' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-amber-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Blog P.E.A.V.</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Proteggi Educa Allena Visione</p>
                </div>

                <div className="px-3 py-4 space-y-2.5">
                  {articles.map(article => (
                    <div 
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all active:scale-[0.98]"
                    >
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        {article.featured && (
                          <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-lg text-[9px] font-bold">
                            Featured
                          </div>
                        )}
                        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] text-white font-semibold">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-xs mb-0.5 text-gray-900 leading-snug">{article.title}</h3>
                        <p className="text-[10px] text-amber-600 font-semibold mb-1.5">{article.subtitle}</p>
                        <p className="text-[11px] text-gray-600 mb-2 leading-snug">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-[10px] text-gray-500">
                          <span className="font-medium">{article.author}</span>
                          <div className="flex items-center gap-2">
                            <span>{article.readTime}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                const newLikes = new Set(likedArticles);
                                if (newLikes.has(article.id)) {
                                  newLikes.delete(article.id);
                                } else {
                                  newLikes.add(article.id);
                                }
                                setLikedArticles(newLikes);
                              }}
                            >
                              <Heart className={likedArticles.has(article.id) ? 'w-3.5 h-3.5 fill-amber-500 text-amber-500' : 'w-3.5 h-3.5 text-gray-400'} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'prodotti' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-amber-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Quaderni RQ</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Alta Qualità Visiva by Bollani</p>
                </div>

                <div className="px-3 py-4 grid grid-cols-2 gap-2.5">
                  {products.map(product => (
                    <div 
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all active:scale-[0.98]"
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        <div className={'absolute inset-0 bg-gradient-to-br opacity-20 ' + product.color}></div>
                        <div className="absolute top-1.5 right-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-900">
                          {product.price}
                        </div>
                      </div>
                      <div className="p-2.5">
                        <h3 className="font-bold text-xs text-gray-900 leading-tight">{product.name}</h3>
                        <p className="text-[10px] text-amber-600 font-semibold mb-1">{product.subtitle}</p>
                        <div className="flex items-center justify-between text-[10px] text-gray-500">
                          <span className="font-medium">{product.format}</span>
                          <span className="font-medium">{product.age}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-3 pb-4">
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xs mb-2.5 text-gray-900">Dove acquistare</h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                          <ShoppingBag className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 text-[11px]">Ottica Bollani</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                          <Globe className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 text-[11px]">Grafiche Logos online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-700 text-[11px]">Cartolibrerie selezionate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'corsi' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-amber-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Formazione</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Riconosciuti MIUR</p>
                </div>

                <div className="px-3 py-4 space-y-2.5">
                  {courses.map(course => (
                    <div 
                      key={course.id}
                      onClick={() => setSelectedCourse(course)}
                      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all active:scale-[0.98]"
                    >
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-0.5 rounded text-[9px] font-bold">
                            MIUR
                          </div>
                          <div className="text-[10px] text-gray-600 font-semibold">{course.format}</div>
                        </div>
                        <h3 className="font-bold text-xs mb-0.5 text-gray-900 leading-snug">{course.title}</h3>
                        <p className="text-[10px] text-amber-600 font-semibold mb-2">{course.subtitle}</p>
                        <p className="text-[11px] text-gray-600 mb-2 leading-snug">{course.description}</p>
                        <div className="flex items-center justify-between text-[10px]">
                          <div>
                            <div className="text-gray-500 mb-0.5">Durata: <span className="font-bold text-gray-900">{course.duration}</span></div>
                            <div className="font-bold text-amber-600 text-xs">{course.price}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-amber-600" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-3 pb-4">
                  <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-orange-700 rounded-xl p-4 text-white">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm uppercase mb-1.5 tracking-wide">Corso su misura</h3>
                    <p className="text-xs opacity-90 mb-3 leading-snug">
                      Formazione personalizzata per il tuo istituto
                    </p>
                    <button className="w-full bg-white text-amber-600 px-5 py-2.5 rounded-lg font-bold text-xs uppercase">
                      Richiedi Info
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'community' && (
              <div>
                <div className="px-4 py-3 bg-white border-b border-gray-100">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-6 h-0.5 bg-amber-600"></div>
                    <h2 className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Community</h2>
                  </div>
                  <p className="text-[10px] text-gray-600">Progetto nazionale dal 1998</p>
                </div>

                <div className="px-3 py-4 space-y-2.5">
                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-xs text-gray-900">Mission P.E.A.V.</h3>
                    </div>
                    <p className="text-[11px] text-gray-700 leading-snug">
                      Progetto informazione-formazione per insegnanti, genitori e alunni. 
                      Educare, proteggere e allenare la visione per apprendimento corretto.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xs mb-2 text-gray-900">Progetti Nazionali</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <div className="text-[11px] flex-1">
                          <div className="font-bold text-gray-900 mb-0.5">"Educazione alla Visione"</div>
                          <div className="text-gray-600">Premio Ferrante 2000</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                          <Eye className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <div className="text-[11px] flex-1">
                          <div className="font-bold text-gray-900 mb-0.5">"Occhio agli Occhi"</div>
                          <div className="text-gray-600">Commissione Difesa Vista</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3.5 border border-amber-200">
                    <h3 className="font-bold text-xs mb-2 text-amber-900 flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5" />
                      Risorse Gratuite
                    </h3>
                    <div className="space-y-2">
                      <a href="https://www.peav.org" className="flex items-center gap-2 text-[11px] text-amber-800">
                        <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center">
                          <Globe className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <span className="font-bold">www.peav.org</span>
                      </a>
                      <div className="flex items-center gap-2 text-[11px] text-gray-700">
                        <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center">
                          <Youtube className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span>Canale Giorgio Bollani</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-gray-700">
                        <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center">
                          <Facebook className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <span>Quaderni RQ</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xs mb-2 text-gray-900">Provider Accreditati</h3>
                    <div className="space-y-1.5 text-[11px] text-gray-700">
                      {['Cultura e Formazione', 'Zahir SRL Napoli', 'Centro Ricerca Roma', 'Hattiva Lab Udine'].map((provider, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-amber-600" />
                          <span>{provider}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-4 text-white">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <Book className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm uppercase mb-1.5 tracking-wide">Materiali Gratuiti</h3>
                    <p className="text-xs opacity-90 mb-3 leading-snug">
                      Scarica articoli, esercizi e video
                    </p>
                    <button className="w-full bg-white text-blue-600 px-5 py-2.5 rounded-lg font-bold text-xs uppercase">
                      Vai a PEAV.org
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* COMPACT BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 z-40">
        <div className="flex justify-around items-center py-2">
          {currentSpace === 'negozio' ? (
            <>
              <button 
                onClick={() => setActiveSection('hero')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'hero' ? 'text-blue-600' : 'text-gray-400')}
              >
                <Home className="w-4.5 h-4.5" strokeWidth={activeSection === 'hero' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Home</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('servizi')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'servizi' ? 'text-blue-600' : 'text-gray-400')}
              >
                <Eye className="w-4.5 h-4.5" strokeWidth={activeSection === 'servizi' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Servizi</span>
              </button>
              
              <div className="w-14"></div>
              
              <button 
                onClick={() => setActiveSection('team')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'team' ? 'text-blue-600' : 'text-gray-400')}
              >
                <Users className="w-4.5 h-4.5" strokeWidth={activeSection === 'team' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Team</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('contatti')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'contatti' ? 'text-blue-600' : 'text-gray-400')}
              >
                <MapPin className="w-4.5 h-4.5" strokeWidth={activeSection === 'contatti' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Info</span>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setActiveSection('blog')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'blog' ? 'text-amber-600' : 'text-gray-400')}
              >
                <FileText className="w-4.5 h-4.5" strokeWidth={activeSection === 'blog' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Blog</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('prodotti')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'prodotti' ? 'text-amber-600' : 'text-gray-400')}
              >
                <Book className="w-4.5 h-4.5" strokeWidth={activeSection === 'prodotti' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Prodotti</span>
              </button>
              
              <div className="w-14"></div>
              
              <button 
                onClick={() => setActiveSection('corsi')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'corsi' ? 'text-amber-600' : 'text-gray-400')}
              >
                <GraduationCap className="w-4.5 h-4.5" strokeWidth={activeSection === 'corsi' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Corsi</span>
              </button>
              
              <button 
                onClick={() => setActiveSection('community')}
                className={'flex flex-col items-center gap-0.5 p-1.5 transition-all ' + (activeSection === 'community' ? 'text-amber-600' : 'text-gray-400')}
              >
                <Users className="w-4.5 h-4.5" strokeWidth={activeSection === 'community' ? 2.5 : 2} />
                <span className="text-[9px] font-bold uppercase tracking-wide">Community</span>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* COMPACT FLOATING PORTAL */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="relative h-20 flex items-start justify-center">
          <button 
            onClick={() => {
              setShowPortalAnimation(true);
              setTimeout(() => {
                setCurrentSpace(prev => prev === 'negozio' ? 'educazione' : 'negozio');
                setActiveSection(currentSpace === 'negozio' ? 'blog' : 'hero');
                setShowPortalAnimation(false);
              }, 400);
            }}
            className={'pointer-events-auto w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 ' + 
              (currentSpace === 'negozio' ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600' : 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800')}
          >
            {currentSpace === 'negozio' ? <Pen className="w-6 h-6" strokeWidth={2.5} /> : <Glasses className="w-6 h-6" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {showPortalAnimation && (
        <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white z-50 flex items-center justify-center">
          <div className="animate-pulse">
            <BollaniLogo size="lg" />
          </div>
        </div>
      )}

      {/* MODALS WILL CONTINUE IN NEXT UPDATE - keeping same compact style */}
    </div>
  );
                }
