import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, X, ChevronRight } from "lucide-react";
import { APP_TITLE } from "@/const";

const sections = [
  {
    id: "intro",
    title: "Introdução",
    presenter: "Todos",
    content: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed">
          Bem-vindo ao material de acompanhamento da apresentação sobre <strong>Gerência de Redes: Segurança, Desempenho e Confiabilidade</strong>.
        </p>
        <p className="text-sm leading-relaxed">
          Este material foi desenvolvido para que você possa acompanhar a apresentação em tempo real em seu dispositivo móvel, com resumos dos principais conceitos, definições, fórmulas e exemplos práticos.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
          <p className="text-xs font-semibold text-blue-900">💡 Dica:</p>
          <p className="text-xs text-blue-800 mt-1">
            Use o menu lateral para navegar entre os tópicos e acompanhe os slides da apresentação simultaneamente.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "falhas",
    title: "Gerência de Falhas e Segurança",
    presenter: "Leonardo",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">Erros em Sistemas de Comunicação</h3>
          <p className="text-xs leading-relaxed mb-3">
            Os erros na transmissão de dados são inevitáveis. Segundo Shannon (1984), os erros não podem ser eliminados completamente, apenas detectados e corrigidos.
          </p>
          <div className="bg-gray-50 p-3 rounded text-xs space-y-2">
            <div><strong>Erro de Inferência:</strong> Alteração dos dados durante transmissão</div>
            <div><strong>Erro de Distorção:</strong> Deformação do sinal</div>
            <div><strong>Erro de Atenuação:</strong> Enfraquecimento do sinal</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Erro em Bit Único</h3>
          <p className="text-xs leading-relaxed mb-2">
            Ocorre quando um bit é alterado de valor durante a transmissão. Detectado e corrigido através do <strong>Código de Hamming</strong>.
          </p>
          <p className="text-xs text-gray-600">O código de Hamming usa bits de paridade para detectar e corrigir erros em um único bit.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Erro em Bit de Rajada</h3>
          <p className="text-xs leading-relaxed mb-2">
            Quando múltiplos bits consecutivos são alterados. Corrigido através de:
          </p>
          <ul className="text-xs space-y-1 ml-3">
            <li>• <strong>FEC</strong> (Forward Error Correction): Transmissão de bits extras</li>
            <li>• <strong>Retransmissão:</strong> Pedido para reenviar dados</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <h3 className="font-semibold text-xs mb-2">📊 Fórmulas Importantes</h3>
          <div className="text-xs space-y-2">
            <div><strong>MTBF</strong> = Tempo Médio Entre Falhas (Mean Time Between Failures)</div>
            <div><strong>MTTR</strong> = Tempo Médio para Reparos (Mean Time To Repair)</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "criptografia",
    title: "Criptografia e Controle de Acesso",
    presenter: "Daniel",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">O que é Criptografia?</h3>
          <p className="text-xs leading-relaxed">
            Transformação de uma mensagem de texto em um texto cifrado usando um algoritmo criptográfico com uma chave parametrizada.
          </p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded">
          <h3 className="font-semibold text-xs mb-2">Conceitos Fundamentais</h3>
          <div className="text-xs space-y-2">
            <div><strong>Criptografia:</strong> Arte de criar mensagens cifradas</div>
            <div><strong>Criptoanálise:</strong> Arte de solucionar mensagens cifradas</div>
            <div><strong>Criptologia:</strong> Estudo de criptoanálise e criptografia</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Modelo Matemático (Tanenbaum)</h3>
          <div className="bg-blue-50 p-3 rounded text-xs space-y-2">
            <div><strong>Criptografia:</strong> C = E<sub>k</sub>(P)</div>
            <div><strong>Descriptografia:</strong> P = D<sub>k</sub>(C)</div>
            <div className="text-xs text-gray-600 mt-2">P = texto simples | K = chave | C = texto cifrado</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Princípio de Kerckhoff (1883)</h3>
          <p className="text-xs leading-relaxed italic text-gray-700">
            "Todos os algoritmos devem ser públicos; apenas as chaves são secretas."
          </p>
          <div className="mt-3 text-xs">
            <strong>Tamanho de Chave Recomendado:</strong>
            <ul className="mt-2 space-y-1 ml-3">
              <li>• 64 bits: Comunicação instantânea</li>
              <li>• 128 bits: Uso comercial</li>
              <li>• 256 bits: Interesse governamental</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Logs e Monitoramento</h3>
          <p className="text-xs leading-relaxed mb-2">
            Ferramentas essenciais para administradores de redes. Devem estar sincronizados com servidores NTP.
          </p>
          <p className="text-xs text-gray-600">A inspeção de logs deve ser uma rotina de trabalho para identificar anomalias.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Controle de Acesso (NAC)</h3>
          <p className="text-xs leading-relaxed">
            Network Access Control - Recurso importante para gerenciamento de segurança que auxilia em:
          </p>
          <ul className="text-xs space-y-1 ml-3 mt-2">
            <li>• Controle de acesso de pessoas e equipamentos não autorizados</li>
            <li>• Evitar intrusões fraudulentas</li>
            <li>• Detectar dispositivos vulneráveis ou infectados</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "vazao",
    title: "Gerência de Desempenho - Vazão",
    presenter: "Danilo",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">O que é Vazão (Throughput)?</h3>
          <p className="text-xs leading-relaxed">
            Taxa efetiva em que os bits são transmitidos de um emissor até o receptor em um determinado período de tempo, medido em <strong>bits por segundo (bps)</strong>.
          </p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded">
          <h3 className="font-semibold text-xs mb-2">Diferenças Importantes</h3>
          <div className="text-xs space-y-2">
            <div><strong>Latência:</strong> Tempo de atraso na transmissão</div>
            <div><strong>Largura de Banda:</strong> Capacidade máxima teórica</div>
            <div><strong>Vazão:</strong> Quantidade real de dados transmitidos</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Tipos de Medição</h3>
          <div className="text-xs space-y-2">
            <div><strong>Medição Média:</strong> Taxa ao longo de um período de tempo</div>
            <div><strong>Medição Instantânea:</strong> Taxa em um determinado instante</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Fatores que Afetam a Vazão</h3>
          <ul className="text-xs space-y-2 ml-3">
            <li>• <strong>Latência:</strong> Aumenta o tempo de resposta</li>
            <li>• <strong>Perda de Pacotes:</strong> Reduz a eficiência</li>
            <li>• <strong>Tráfego de Rede:</strong> Congestionamento reduz vazão</li>
            <li>• <strong>Meio Físico:</strong> Qualidade afeta a transmissão</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <h3 className="font-semibold text-xs mb-2">📊 Fórmula de Vazão</h3>
          <div className="text-xs bg-white p-2 rounded mt-2 font-mono overflow-x-auto">
            Vazão = VT / T
          </div>
          <div className="text-xs mt-2 space-y-1">
            <div>VT = Volume de Dados Transferidos</div>
            <div>T = Tempo Total da Transferência</div>
          </div>
          <div className="text-xs mt-3 bg-blue-50 p-2 rounded">
            <strong>Exemplo:</strong> 1 GB em 10 segundos = 100 MB/s
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Princípio da Limitação</h3>
          <p className="text-xs leading-relaxed">
            A vazão é limitada pela menor capacidade do "tubo" (link) no caminho:
          </p>
          <div className="bg-blue-50 p-2 rounded text-xs font-mono mt-2 overflow-x-auto">
            Vazão Real = min(Rs, Rc)
          </div>
          <p className="text-xs text-gray-600 mt-2">Rs = Taxa de envio | Rc = Taxa de recebimento</p>
        </div>
      </div>
    ),
  },
  {
    id: "latencia",
    title: "Perda de Pacotes e Jitter",
    presenter: "Yan",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">O que é Latência?</h3>
          <p className="text-xs leading-relaxed">
            Tempo total que um pacote de dados leva para ir de um ponto A (emissor) até um ponto B (receptor) em uma rede. É o "atraso" entre envio e recebimento.
          </p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <h3 className="font-semibold text-xs mb-2">📊 Fórmula da Latência</h3>
          <div className="text-xs bg-white p-2 rounded mt-2 font-mono overflow-x-auto">
            Latência = Tempo de Transmissão + Tempo de Propagação
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Componentes da Latência</h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-1">Tempo de Transmissão</h4>
              <p className="text-xs mb-2">Tempo para empurrar todos os bits do pacote para o meio de transmissão.</p>
              <div className="text-xs font-mono bg-white p-2 rounded overflow-x-auto">
                = Tamanho do Pacote / Velocidade de Transmissão
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-1">Tempo de Propagação</h4>
              <p className="text-xs mb-2">Tempo que o sinal leva para viajar fisicamente pelo meio até o destino.</p>
              <div className="text-xs font-mono bg-white p-2 rounded overflow-x-auto">
                = Distância / Velocidade de Propagação
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded p-3">
          <h3 className="font-semibold text-xs mb-2">📝 Exemplo Prático</h3>
          <div className="text-xs space-y-1 mt-2">
            <div>Pacote: 10.000 bits</div>
            <div>Velocidade: 1 Mbps</div>
            <div>Distância: 1.000 km</div>
            <div>Velocidade de propagação: 200.000 km/s</div>
          </div>
          <div className="text-xs mt-3 bg-white p-2 rounded overflow-x-auto">
            <strong>Tempo de Transmissão:</strong> 10.000 / 1.000.000 = 0,01 s
          </div>
          <div className="text-xs mt-2 bg-white p-2 rounded overflow-x-auto">
            <strong>Tempo de Propagação:</strong> 1.000 / 200.000 = 0,005 s
          </div>
          <div className="text-xs mt-2 bg-white p-2 rounded overflow-x-auto">
            <strong>Latência Total:</strong> 0,01 + 0,005 = 0,015 s = 15 ms
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">O que é Jitter?</h3>
          <p className="text-xs leading-relaxed">
            Variação no tempo e na sequência de entrega dos pacotes (Packet Delay Variation) devido à variação da latência na rede.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Quando pacotes chegam fora de ordem, podem ser considerados como perdidos, afetando especialmente VoIP e vídeo.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "disponibilidade",
    title: "Disponibilidade e Qualidade",
    presenter: "Matheus",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">O que é Disponibilidade?</h3>
          <p className="text-xs leading-relaxed">
            Capacidade de um sistema ou rede de operar continuamente (sem interrupção) por um período determinado, frequentemente estipulada em Acordos de Nível de Serviço (SLA).
          </p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded">
          <h3 className="font-semibold text-xs mb-2">Métricas Importantes</h3>
          <div className="text-xs space-y-2">
            <div><strong>MTTF:</strong> Mean Time To Failure - Tempo médio até falha</div>
            <div><strong>MTTR:</strong> Mean Time To Repair - Tempo médio para reparo</div>
            <div><strong>MTTD:</strong> Mean Time To Detect - Tempo médio para detectar falha</div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <h3 className="font-semibold text-xs mb-2">📊 Fórmula de Disponibilidade</h3>
          <div className="text-xs bg-white p-2 rounded mt-2 font-mono overflow-x-auto">
            D = MTTF / (MTTF + MTTR)
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Exemplos de Cálculo</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-1">Cenário Ideal</h4>
              <div className="text-xs space-y-1 mt-2">
                <div>MTTF = 8.000 horas</div>
                <div>MTTR = 36 horas</div>
                <div className="mt-2 font-mono bg-white p-1 rounded overflow-x-auto">D = 8000 / 8036 ≈ 99,5%</div>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-1">Cenário com MTTR Elevado</h4>
              <div className="text-xs space-y-1 mt-2">
                <div>MTTF = 8.000 horas</div>
                <div>MTTR = 365 horas</div>
                <div className="mt-2 font-mono bg-white p-1 rounded overflow-x-auto">D = 8000 / 8365 ≈ 95,63%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-sm mb-2">Qualidade de Serviço (QoS)</h3>
          <p className="text-xs leading-relaxed mb-2">
            Conjunto de mecanismos e tecnologias que garantem o uso eficaz dos recursos de rede, priorizando tráfego sensível.
          </p>
          <div className="text-xs space-y-2 ml-3">
            <div>• <strong>Latência:</strong> Tempo de atraso na transmissão</div>
            <div>• <strong>Jitter:</strong> Variação no tempo de entrega</div>
            <div>• <strong>Perda de Pacotes:</strong> Taxa de pacotes perdidos</div>
            <div>• <strong>Largura de Banda:</strong> Capacidade disponível</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSection = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center justify-between px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-sm sm:text-base font-bold text-slate-900 truncate">{APP_TITLE}</h1>
            <p className="text-xs text-slate-500">Material de Acompanhamento</p>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 p-2 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-0 md:gap-4 md:p-4 md:max-w-6xl md:mx-auto">
        {/* Sidebar Navigation */}
        <aside
          className={`fixed inset-0 top-16 left-0 right-0 z-40 bg-white border-r border-slate-200 p-3 overflow-y-auto transition-transform md:static md:w-64 md:top-auto md:inset-auto md:z-auto md:translate-x-0 md:p-0 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all text-xs sm:text-sm font-medium flex items-center justify-between ${
                  activeSection === section.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="min-w-0">
                  <div className="truncate">{section.title}</div>
                  <div className={`text-xs font-normal truncate ${
                    activeSection === section.id ? "text-blue-100" : "text-slate-500"
                  }`}>
                    {section.presenter}
                  </div>
                </div>
                {activeSection === section.id && <ChevronRight size={16} className="flex-shrink-0 ml-2" />}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pb-8 px-3 sm:px-4 md:pb-0 md:px-0 w-full">
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg p-3 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">{currentSection.title}</CardTitle>
              <CardDescription className="text-blue-100 text-xs sm:text-sm">
                Apresentador: {currentSection.presenter}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 sm:pt-6 p-3 sm:p-6">
              {currentSection.content}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
            <Button
              variant="outline"
              onClick={() => {
                const currentIndex = sections.findIndex((s) => s.id === activeSection);
                if (currentIndex > 0) {
                  setActiveSection(sections[currentIndex - 1].id);
                }
              }}
              disabled={activeSection === sections[0].id}
              className="flex-1 text-xs sm:text-sm py-2 sm:py-3"
            >
              ← Anterior
            </Button>
            <Button
              onClick={() => {
                const currentIndex = sections.findIndex((s) => s.id === activeSection);
                if (currentIndex < sections.length - 1) {
                  setActiveSection(sections[currentIndex + 1].id);
                }
              }}
              disabled={activeSection === sections[sections.length - 1].id}
              className="flex-1 text-xs sm:text-sm py-2 sm:py-3"
            >
              Próximo →
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
