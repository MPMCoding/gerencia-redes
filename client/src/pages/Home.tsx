import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, X, ChevronRight, CheckCircle, XCircle, Play } from "lucide-react";
import { APP_TITLE } from "@/const";

// Componentes de Jogos
const BitErrorQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      question: "O que é um erro em bit único?",
      options: [
        "Quando um bit é alterado de valor durante a transmissão",
        "Quando múltiplos bits são alterados",
        "Quando o sinal é enfraquecido",
      ],
      correct: 0,
    },
    {
      question: "Qual técnica detecta erros em bit único?",
      options: ["Código de Hamming", "FEC", "Retransmissão"],
      correct: 0,
    },
    {
      question: "O que é FEC?",
      options: [
        "Forward Error Correction - transmissão de bits extras",
        "Fast Error Control",
        "Frequency Error Correction",
      ],
      correct: 0,
    },
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
        <h4 className="font-bold text-lg mb-2">🎉 Quiz Concluído!</h4>
        <p className="text-sm mb-4">Você acertou {score} de {questions.length} questões!</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${(score / questions.length) * 100}%` }}
          ></div>
        </div>
        <Button onClick={resetQuiz} className="w-full">Tentar Novamente</Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
      <h4 className="font-bold text-sm mb-3">🎮 Quiz: Erros em Bits</h4>
      <p className="text-xs mb-4 font-semibold">{questions[currentQuestion].question}</p>
      <div className="space-y-2 mb-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showResult}
            className={`w-full text-left p-3 rounded-lg text-xs transition-all ${
              showResult
                ? index === questions[currentQuestion].correct
                  ? "bg-green-200 border-2 border-green-500"
                  : "bg-red-200 border-2 border-red-500"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <Button onClick={nextQuestion} className="w-full text-xs">
          {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima Questão"}
        </Button>
      )}
    </div>
  );
};

const CryptoChallenge = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const challenge = {
    cipher: "KHOOR ZRUOG",
    hint: "Use a cifra de César com deslocamento de 3",
    answer: "HELLO WORLD",
  };

  const handleCheck = () => {
    setIsCorrect(userAnswer.toUpperCase() === challenge.answer);
  };

  const handleReset = () => {
    setUserAnswer("");
    setIsCorrect(null);
    setShowHint(false);
  };

  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg">
      <h4 className="font-bold text-sm mb-3">🔐 Desafio: Quebre a Cifra</h4>
      <p className="text-xs mb-3">Texto cifrado: <span className="font-mono bg-white p-2 rounded">{challenge.cipher}</span></p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Digite o texto descriptografado"
        className="w-full p-2 border border-gray-300 rounded-lg text-xs mb-3"
        disabled={isCorrect !== null}
      />
      <div className="flex gap-2 mb-3">
        <Button onClick={handleCheck} disabled={!userAnswer || isCorrect !== null} className="flex-1 text-xs">
          Verificar
        </Button>
        <Button onClick={() => setShowHint(true)} variant="outline" className="flex-1 text-xs">
          Dica
        </Button>
      </div>
      {showHint && <p className="text-xs bg-yellow-100 p-2 rounded mb-3">{challenge.hint}</p>}
      {isCorrect !== null && (
        <div className={`p-3 rounded-lg text-xs flex items-center gap-2 ${isCorrect ? "bg-green-200" : "bg-red-200"}`}>
          {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
          {isCorrect ? "✓ Correto! Você quebrou a cifra!" : "✗ Tente novamente!"}
        </div>
      )}
      {isCorrect !== null && <Button onClick={handleReset} className="w-full mt-3 text-xs">Tentar Novamente</Button>}
    </div>
  );
};

const ThroughputCalculator = () => {
  const [volumeGB, setVolumeGB] = useState("");
  const [timeSeconds, setTimeSeconds] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (volumeGB && timeSeconds) {
      const volumeMB = parseFloat(volumeGB) * 1024;
      const throughput = (volumeMB / parseFloat(timeSeconds)).toFixed(2);
      setResult(throughput);
    }
  };

  const reset = () => {
    setVolumeGB("");
    setTimeSeconds("");
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
      <h4 className="font-bold text-sm mb-3">⚡ Calculadora: Vazão (Throughput)</h4>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold">Volume (GB):</label>
          <input
            type="number"
            value={volumeGB}
            onChange={(e) => setVolumeGB(e.target.value)}
            placeholder="Ex: 1"
            className="w-full p-2 border border-gray-300 rounded-lg text-xs mt-1"
            disabled={result !== null}
          />
        </div>
        <div>
          <label className="text-xs font-semibold">Tempo (segundos):</label>
          <input
            type="number"
            value={timeSeconds}
            onChange={(e) => setTimeSeconds(e.target.value)}
            placeholder="Ex: 10"
            className="w-full p-2 border border-gray-300 rounded-lg text-xs mt-1"
            disabled={result !== null}
          />
        </div>
        <Button onClick={calculate} disabled={!volumeGB || !timeSeconds || result !== null} className="w-full text-xs">
          Calcular
        </Button>
      </div>
      {result && (
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-xs font-semibold mb-2">Resultado:</p>
          <p className="text-sm font-bold text-green-600">{result} MB/s</p>
          <Button onClick={reset} variant="outline" className="w-full mt-3 text-xs">Novo Cálculo</Button>
        </div>
      )}
    </div>
  );
};

const LatencyCalculator = () => {
  const [packetSize, setPacketSize] = useState("");
  const [transmissionSpeed, setTransmissionSpeed] = useState("");
  const [distance, setDistance] = useState("");
  const [propagationSpeed, setPropagationSpeed] = useState("200000");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (packetSize && transmissionSpeed && distance) {
      const transmissionTime = parseFloat(packetSize) / parseFloat(transmissionSpeed);
      const propagationTime = parseFloat(distance) / parseFloat(propagationSpeed);
      const totalLatency = (transmissionTime + propagationTime) * 1000; // em ms
      setResult(totalLatency.toFixed(3));
    }
  };

  const reset = () => {
    setPacketSize("");
    setTransmissionSpeed("");
    setDistance("");
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
      <h4 className="font-bold text-sm mb-3">⏱️ Calculadora: Latência</h4>
      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold">Tamanho do Pacote (bits):</label>
          <input
            type="number"
            value={packetSize}
            onChange={(e) => setPacketSize(e.target.value)}
            placeholder="Ex: 10000"
            className="w-full p-2 border border-gray-300 rounded-lg text-xs mt-1"
            disabled={result !== null}
          />
        </div>
        <div>
          <label className="text-xs font-semibold">Velocidade de Transmissão (bps):</label>
          <input
            type="number"
            value={transmissionSpeed}
            onChange={(e) => setTransmissionSpeed(e.target.value)}
            placeholder="Ex: 1000000"
            className="w-full p-2 border border-gray-300 rounded-lg text-xs mt-1"
            disabled={result !== null}
          />
        </div>
        <div>
          <label className="text-xs font-semibold">Distância (km):</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Ex: 1000"
            className="w-full p-2 border border-gray-300 rounded-lg text-xs mt-1"
            disabled={result !== null}
          />
        </div>
        <div>
          <label className="text-xs font-semibold">Velocidade de Propagação (km/s):</label>
          <input
            type="number"
            value={propagationSpeed}
            onChange={(e) => setPropagationSpeed(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-xs mt-1"
            disabled={result !== null}
          />
        </div>
        <Button onClick={calculate} disabled={!packetSize || !transmissionSpeed || !distance || result !== null} className="w-full text-xs">
          Calcular
        </Button>
      </div>
      {result && (
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-xs font-semibold mb-2">Latência Total:</p>
          <p className="text-sm font-bold text-orange-600">{result} ms</p>
          <Button onClick={reset} variant="outline" className="w-full mt-3 text-xs">Novo Cálculo</Button>
        </div>
      )}
    </div>
  );
};

const AvailabilityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = [
    {
      question: "O que significa MTTF?",
      options: [
        "Mean Time To Failure",
        "Mean Time To Fix",
        "Maximum Time To Failure",
      ],
      correct: 0,
    },
    {
      question: "Qual fórmula calcula a disponibilidade?",
      options: [
        "D = MTTF / (MTTF + MTTR)",
        "D = MTTR / MTTF",
        "D = MTTF * MTTR",
      ],
      correct: 0,
    },
    {
      question: "Se MTTF=8000h e MTTR=36h, qual é a disponibilidade?",
      options: [
        "99,5%",
        "95,5%",
        "98,5%",
      ],
      correct: 0,
    },
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg">
        <h4 className="font-bold text-lg mb-2">🎉 Quiz Concluído!</h4>
        <p className="text-sm mb-4">Você acertou {score} de {questions.length} questões!</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all"
            style={{ width: `${(score / questions.length) * 100}%` }}
          ></div>
        </div>
        <Button onClick={resetQuiz} className="w-full">Tentar Novamente</Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg">
      <h4 className="font-bold text-sm mb-3">🎮 Quiz: Disponibilidade</h4>
      <p className="text-xs mb-4 font-semibold">{questions[currentQuestion].question}</p>
      <div className="space-y-2 mb-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showResult}
            className={`w-full text-left p-3 rounded-lg text-xs transition-all ${
              showResult
                ? index === questions[currentQuestion].correct
                  ? "bg-green-200 border-2 border-green-500"
                  : "bg-red-200 border-2 border-red-500"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <Button onClick={nextQuestion} className="w-full text-xs">
          {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima Questão"}
        </Button>
      )}
    </div>
  );
};

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
            Use o menu lateral para navegar entre os tópicos e acompanhe os slides da apresentação simultaneamente. Teste os jogos interativos para aprender ainda mais!
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

        <BitErrorQuiz />
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

        <CryptoChallenge />
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

        <ThroughputCalculator />
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

        <LatencyCalculator />
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

        <AvailabilityQuiz />
      </div>
    ),
  },
  {
    id: "wireshark",
    title: "Wireshark e Hercules",
    presenter: "Eric",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">Introdução</h3>
          <p className="text-xs leading-relaxed">
            Este guia detalha como utilizar o Wireshark para capturar e analisar o tráfego de rede gerado pelo Hercules SETUP utility, com foco em testes de comunicação TCP e UDP em um ambiente local (localhost). Abordaremos desde a configuração do ambiente até a análise prática dos pacotes, permitindo uma compreensão clara da comunicação entre aplicações na mesma máquina.
          </p>
        </div>


        <div>
          <h3 className="font-semibold text-sm mb-2">Pré-requisitos</h3>
          <p className="text-xs leading-relaxed mb-2">Para seguir este guia, você precisará dos seguintes softwares instalados:</p>
          <ul className="text-xs space-y-1 ml-3">
            <li>• <strong>Wireshark:</strong> Versão 3.0 ou superior. A instalação padrão no Windows inclui o Npcap, que é essencial para a captura de tráfego local.</li>
            <li>• <strong>Hercules SETUP utility:</strong> A versão mais recente pode ser baixada gratuitamente no site do desenvolvedor.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">O Desafio: Captura de Tráfego Localhost</h3>
          <p className="text-xs leading-relaxed mb-2">
            Capturar tráfego de rede que se origina e termina na mesma máquina (localhost, 127.0.0.1) apresenta um desafio particular, especialmente no Windows. Por padrão, o sistema operacional otimiza essa comunicação, não a enviando para as interfaces de rede físicas. Portanto, o Wireshark não consegue capturá-la sem um componente especial.
          </p>
          <div className="bg-orange-50 p-3 rounded text-xs space-y-2">
            <div><strong>No Windows:</strong> A solução é o Npcap, um driver de captura de pacotes que cria uma interface de loopback virtual. O Wireshark utiliza essa interface para "enxergar" o tráfego localhost.</div>
            <div><strong>No Linux e macOS:</strong> Esses sistemas operacionais possuem uma interface de loopback nativa (lo no Linux, lo0 no macOS), tornando a captura de tráfego local um processo direto.</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Ferramentas Utilizadas</h3>
          <div className="space-y-2">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-1">Wireshark</h4>
              <p className="text-xs text-gray-700">
                É o analisador de protocolos de rede mais utilizado no mundo. Permite capturar e inspecionar o tráfego que passa por uma interface de rede em tempo real, decodificando os pacotes de diversos protocolos.
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-1">Hercules SETUP Utility</h4>
              <p className="text-xs text-gray-700">
                É um utilitário multifuncional que atua como terminal para portas seriais (RS-232/485), e também como cliente e servidor para protocolos TCP e UDP. É uma ferramenta extremamente útil para testes e depuração de comunicação de rede.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Configurando o Ambiente de Captura</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-2">No Windows</h4>
              <ol className="text-xs space-y-1 ml-3 list-decimal">
                <li>Inicie o Wireshark como administrador para garantir que todas as interfaces sejam listadas.</li>
                <li>Na tela inicial, localize a interface chamada "Adapter for loopback traffic capture". Este é o adaptador virtual criado pelo Npcap.</li>
                <li>Selecione esta interface para iniciar a captura.</li>
              </ol>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <h4 className="font-semibold text-xs mb-2">No Linux / macOS</h4>
              <ol className="text-xs space-y-1 ml-3 list-decimal">
                <li>Inicie o Wireshark (pode ser necessário usar sudo no Linux).</li>
                <li>Na lista de interfaces, selecione a interface de loopback, que geralmente é nomeada lo (Linux) ou lo0 (macOS).</li>
                <li>Inicie a captura.</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Cenários Práticos</h3>
          <p className="text-xs leading-relaxed mb-3">Agora, vamos simular a comunicação entre duas instâncias do Hercules e capturar o tráfego com o Wireshark.</p>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Cenário 1: Cliente-Servidor TCP</h3>
          <p className="text-xs leading-relaxed mb-2">
            Neste cenário, uma instância do Hercules atuará como um servidor TCP e a outra como um cliente TCP.
          </p>
          <div className="bg-blue-50 p-3 rounded text-xs space-y-3">
            <div>
              <strong>Passo 1: Configurar o Servidor TCP no Hercules</strong>
              <ol className="text-xs space-y-1 ml-3 mt-1 list-decimal">
                <li>Abra o Hercules.</li>
                <li>Vá para a aba "TCP Server".</li>
                <li>No campo "Port", digite uma porta para o servidor escutar, por exemplo, 5000.</li>
                <li>Clique em "Listen".</li>
                <li>O status do servidor mudará para "Listening on port 5000".</li>
              </ol>
            </div>
            <div>
              <strong>Passo 2: Configurar o Cliente TCP no Hercules</strong>
              <ol className="text-xs space-y-1 ml-3 mt-1 list-decimal">
                <li>Abra uma segunda instância do Hercules.</li>
                <li>Vá para a aba "TCP Client".</li>
                <li>Em "Module IP", digite 127.0.0.1 (o endereço do seu localhost).</li>
                <li>Em "Port", digite a mesma porta do servidor: 5000.</li>
                <li>Clique em "Connect".</li>
              </ol>
            </div>
            <div>
              <strong>Passo 3: Capturar e Analisar o Tráfego</strong>
              <ol className="text-xs space-y-1 ml-3 mt-1 list-decimal">
                <li>No Wireshark, inicie a captura na interface de loopback, como descrito na seção anterior.</li>
                <li>No Hercules (cliente), digite uma mensagem no campo de envio e clique em "Send".</li>
                <li>Observe que a mensagem aparece na janela de dados recebidos do Hercules (servidor).</li>
                <li>Pare a captura no Wireshark.</li>
              </ol>
            </div>
            <div className="bg-white p-2 rounded mt-2">
              <strong className="text-xs">Análise no Wireshark:</strong>
              <ul className="text-xs space-y-1 ml-3 mt-1">
                <li>• <strong>Filtro:</strong> Para facilitar a visualização, use o filtro tcp.port == 5000</li>
                <li>• <strong>Handshake:</strong> Você verá o handshake de três vias do TCP (SYN, SYN-ACK, ACK) quando a conexão foi estabelecida.</li>
                <li>• <strong>Transmissão de Dados:</strong> Pacotes com a flag PSH (Push) conterão os dados que você enviou.</li>
                <li>• <strong>Finalização:</strong> Ao fechar a conexão, você verá os pacotes de finalização (FIN, ACK).</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Cenário 2: Comunicação UDP</h3>
          <p className="text-xs leading-relaxed mb-2">
            Agora, vamos testar a comunicação UDP, que não estabelece uma conexão formal.
          </p>
          <div className="bg-green-50 p-3 rounded text-xs space-y-3">
            <div>
              <strong>Passo 1: Configurar as Instâncias do Hercules para UDP</strong>
              <ol className="text-xs space-y-1 ml-3 mt-1 list-decimal">
                <li>Abra duas instâncias do Hercules.</li>
                <li>Em ambas, vá para a aba "UDP".</li>
                <li>Instância 1 (Servidor):
                  <ul className="text-xs space-y-1 ml-3 mt-1">
                    <li>• Module IP: 127.0.0.1</li>
                    <li>• Port: 6001 (porta de destino)</li>
                    <li>• Local Port: 6000 (porta de escuta)</li>
                  </ul>
                </li>
                <li>Instância 2 (Cliente):
                  <ul className="text-xs space-y-1 ml-3 mt-1">
                    <li>• Module IP: 127.0.0.1</li>
                    <li>• Port: 6000 (porta de destino)</li>
                    <li>• Local Port: 6001 (porta de escuta)</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div>
              <strong>Passo 2: Capturar e Analisar o Tráfego</strong>
              <ol className="text-xs space-y-1 ml-3 mt-1 list-decimal">
                <li>Inicie a captura no Wireshark na interface de loopback.</li>
                <li>Em qualquer uma das instâncias do Hercules, envie uma mensagem.</li>
                <li>A mensagem aparecerá na outra instância.</li>
                <li>Pare a captura no Wireshark.</li>
              </ol>
            </div>
            <div className="bg-white p-2 rounded mt-2">
              <strong className="text-xs">Análise no Wireshark:</strong>
              <ul className="text-xs space-y-1 ml-3 mt-1">
                <li>• <strong>Filtro:</strong> Use o filtro udp.port == 6000 || udp.port == 6001</li>
                <li>• <strong>Datagramas:</strong> Você verá os pacotes UDP sendo enviados diretamente, sem qualquer handshake. Cada pacote é um datagrama independente.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Dicas de Análise no Wireshark</h3>
          <ul className="text-xs space-y-2 ml-3">
                <li>• <strong>Seguir Fluxo TCP:</strong> Clique com botão direito em um pacote TCP e selecione "Follow &gt; TCP Stream". Isso abrirá uma nova janela mostrando toda a conversa entre cliente e servidor de forma legível.</li>
            <li>• <strong>Colorização:</strong> O Wireshark usa cores para destacar diferentes tipos de tráfego. Por padrão, verde claro é para HTTP, azul claro para DNS e azul escuro para TCP.</li>
            <li>• <strong>Detalhes do Pacote:</strong> Clique em um pacote para ver todos os detalhes das camadas de rede, desde o frame físico até a camada de aplicação.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
          <h3 className="font-semibold text-xs mb-2">📝 Conclusão</h3>
          <p className="text-xs text-gray-700">
            A integração entre o Wireshark e o Hercules cria um poderoso ambiente de aprendizado e depuração para comunicação de rede. Ao configurar corretamente a captura de tráfego localhost com o Npcap (no Windows) ou usando as interfaces nativas (Linux/macOS), é possível visualizar em detalhes os protocolos TCP e UDP em ação, validando o comportamento de aplicações cliente-servidor e aprofundando o conhecimento sobre os fundamentos de redes de computadores.
          </p>
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
