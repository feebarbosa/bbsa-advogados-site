import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

/**
 * BBSA Advogados - Site Institucional
 * Design: Corporativo Minimalista com Tipografia Forte
 * Paleta: Verde Institucional, Off-White, Cinza Neutro
 * Tipografia: Libre Baskerville (títulos), Montserrat (corpo), Beautifully Delicious (logo)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Navegação */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container py-2 md:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327877713/qshxdeqijwkePNWD.png" alt="BBSA Advogados" className="w-24 md:w-40 lg:w-[170px] h-auto" />
          </div>
          <ul className="hidden md:flex gap-6 lg:gap-8 text-xs md:text-sm font-medium">
            <li><a href="#quem-somos" className="link-underline">Quem Somos</a></li>
            <li><a href="#areas" className="link-underline">Áreas de Atuação</a></li>
            <li><a href="#como-atuamos" className="link-underline">Como Atuamos</a></li>
            <li><a href="#contato" className="link-underline">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section com Imagem do Mar */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Imagem do mar com sobreposição verde */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663327877713/jyeEGgdhyKHXgAmC.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}></div>
        
        {/* Overlay verde suave */}
        <div className="absolute inset-0 z-1 overlay-green-light"></div>
        
        {/* Conteúdo */}
        <div className="container relative z-10 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="mb-4 md:mb-6 text-foreground text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
              <div className="animate-slide-in delay-100 block">Experiência que transforma</div>
              <div className="animate-slide-in delay-300 block">desafios em soluções</div>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-2xl font-medium text-justify animate-fade-in-up delay-500">
              Consultoria trabalhista estratégica e contencioso especializado para empresas que buscam segurança jurídica, conformidade regulatória e soluções práticas para seus desafios laborais.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#contato" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
                Entrar em Contato
                <ChevronRight size={16} className="md:w-5 md:h-5" />
              </a>
              <a href="#areas" className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
                Conhecer Áreas de Atuação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="divider-vertical"></div>
                <span className="subtitle text-primary text-sm md:text-base">Sobre Nós</span>
              </div>
              <h2 className="mb-4 md:mb-6 text-foreground text-xl md:text-3xl lg:text-4xl leading-snug md:leading-tight">Experiência e Excelência em Direito Trabalhista</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-medium text-justify">
                <p>
                  O BBSA Advogados é um escritório especializado em Direito do Trabalho Empresarial, conduzido por advogado com mais de 10 anos de experiência na área trabalhista, com atuação em diferentes frentes da advocacia.
                </p>
                <p>
                  Nossa abordagem é fundamentada em análise profunda da realidade de cada cliente, oferecendo orientação prática e aplicável que equilibra conformidade regulatória com eficiência operacional.
                </p>
                <p>
                  Atualmente, atendemos empresas de diversos setores, com visão estratégica de consolidar, no médio e longo prazo, especialização em varejo de calçados e varejo esportivo.
                </p>
              </div>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                <p className="text-xs md:text-sm text-muted-foreground mb-2">Filosofia de Atuação</p>
                <p className="text-base md:text-lg font-semibold text-foreground">Análise profunda, orientação prática, atuação preventiva e condução estratégica de demandas.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg blur-2xl"></div>
              <div className="relative bg-secondary/50 rounded-lg p-12 border border-border card-bordered-left">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <p className="text-sm text-muted-foreground font-medium">Anos de experiência em Direito Trabalhista</p>
                  </div>
                  <div className="section-divider"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">Múltiplas</div>
                    <p className="text-sm text-muted-foreground font-medium">Frentes de atuação em advocacia trabalhista</p>
                  </div>
                  <div className="section-divider"></div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">Estratégica</div>
                    <p className="text-sm text-muted-foreground font-medium">Abordagem preventiva e corretiva integrada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="divider-vertical"></div>
              <span className="subtitle text-primary text-sm md:text-base">Especialidades</span>
            </div>
            <h2 className="text-foreground text-xl md:text-3xl lg:text-4xl leading-snug md:leading-tight">Áreas de Atuação</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'Consultoria Trabalhista Empresarial',
                description: 'Orientação estratégica em conformidade trabalhista, políticas internas e gestão de riscos laborais.',
              },
              {
                title: 'Contencioso Trabalhista',
                description: 'Defesa em processos trabalhistas, negociação de acordos e representação em todas as instâncias.',
              },
              {
                title: 'Diagnóstico Trabalhista',
                description: 'Análise completa da situação trabalhista da empresa, identificando riscos e oportunidades de conformidade.',
              },
              {
                title: 'Auditoria Trabalhista',
                description: 'Revisão detalhada de documentação, registros e práticas para assegurar conformidade regulatória.',
              },
              {
                title: 'Contratos de Trabalho',
                description: 'Elaboração e revisão de contratos individuais, coletivos e acordos de trabalho.',
              },
              {
                title: 'Banco de Horas e Compensação',
                description: 'Estruturação de sistemas de banco de horas, compensação de jornada e gestão de horas extras.',
              },
              {
                title: 'Enquadramento e Negociação Sindical',
                description: 'Análise de enquadramento funcional e negociação com sindicatos e entidades representativas.',
              },
              {
                title: 'Defesa Administrativa',
                description: 'Representação em procedimentos administrativos, fiscalizações e processos junto ao Ministério do Trabalho.',
              },
              {
                title: 'Planos de Cargos e Salários',
                description: 'Desenvolvimento e implementação de estruturas de carreiras, remuneração e benefícios.',
              },
              {
                title: 'Programas de Remuneração (PLR)',
                description: 'Estruturação de Programas de Participação nos Lucros ou Resultados em conformidade com legislação.',
              },
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 card-bordered-left"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Atuamos */}
      <section id="como-atuamos" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="divider-vertical"></div>
              <span className="subtitle text-primary text-sm md:text-base">Metodologia</span>
            </div>
            <h2 className="text-foreground text-xl md:text-3xl lg:text-4xl leading-snug md:leading-tight">Como Atuamos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Análise da Realidade',
                  description: 'Compreendemos profundamente a estrutura, desafios e objetivos específicos de cada empresa, considerando seu setor, tamanho e contexto operacional.',
                },
                {
                  step: '02',
                  title: 'Orientação Prática',
                  description: 'Oferecemos recomendações aplicáveis e viáveis, que consideram não apenas conformidade legal, mas também eficiência operacional e sustentabilidade.',
                },
                {
                  step: '03',
                  title: 'Atuação Preventiva',
                  description: 'Identificamos riscos potenciais e estruturamos soluções que evitam conflitos, reduzem passivos trabalhistas e fortalecem a segurança jurídica.',
                },
                {
                  step: '04',
                  title: 'Condução Estratégica',
                  description: 'Quando demandas surgem, conduzimos com estratégia clara, buscando sempre as melhores soluções para proteger os interesses de nossos clientes.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium text-justify">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-secondary/60 to-background border border-border rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary/20">✓</div>
                    <p className="text-lg font-semibold text-foreground">Segurança Jurídica</p>
                    <p className="text-sm text-muted-foreground font-medium">Conformidade regulatória aliada a eficiência operacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="divider-vertical"></div>
              <span className="subtitle text-primary text-sm md:text-base">Fale Conosco</span>
            </div>
            <h2 className="mb-8 md:mb-12 text-foreground text-xl md:text-3xl lg:text-4xl leading-snug md:leading-tight">Entre em Contato</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">E-mail</p>
                  <a href="mailto:contato@bbsaadvogados.com.br" className="link-underline font-semibold text-foreground text-sm break-all">
                    contato@bbsaadvogados.com.br
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">WhatsApp</p>
                  <a href="https://wa.me/5511970366992" target="_blank" rel="noopener noreferrer" className="link-underline font-semibold text-foreground">
                    (11 ) 97036-6992
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Localização</p>
                  <p className="font-semibold text-foreground">Av. Brig. Faria Lima, 1478, 7º Andar, São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 font-semibold">Horário de Atendimento</p>
              <p className="text-foreground font-semibold">Segunda a Sexta: 9h às 18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5511970366992"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Enviar mensagem via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-background/20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327877713/qshxdeqijwkePNWD.png" alt="BBSA Advogados" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-background/80 font-medium">Direito do Trabalho Empresarial voltado à realidade das empresas.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-background">Navegação</h4>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li><a href="#quem-somos" className="hover:text-background transition">Quem Somos</a></li>
                <li><a href="#areas" className="hover:text-background transition">Áreas de Atuação</a></li>
                <li><a href="#como-atuamos" className="hover:text-background transition">Como Atuamos</a></li>
                <li><a href="#contato" className="hover:text-background transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-background">Contato</h4>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li><a href="mailto:contato@bbsaadvogados.com.br" className="hover:text-background transition">contato@bbsaadvogados.com.br</a></li>
                <li><a href="https://wa.me/5511970366992" target="_blank" rel="noopener noreferrer" className="hover:text-background transition">(11) 97036-6992</a></li>
                <li>Av. Brig. Faria Lima, 1478, 7º Andar, São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-background/60 font-medium">
            <p>&copy; {new Date().getFullYear()} BBSA Advogados. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
