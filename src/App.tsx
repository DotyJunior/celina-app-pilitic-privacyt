import { useState } from 'react';
import { Check, Copy, ExternalLink, Printer } from 'lucide-react';

const FILE_STRUCTURE = [
  {
    file: 'agen.py',
    boldLead: 'O Cérebro.',
    rest: 'Define a classe ',
    codeMid: 'Celina',
    tail: ', as instruções de sistema e a orquestração das ferramentas via LiveKit.',
  },
  {
    file: 'tools.py',
    boldLead: 'Biblioteca Central.',
    rest: 'Contém funções utilitárias como busca em pastas, memória local e navegação.',
  },
  {
    file: 'instagram_tools.py',
    boldLead: 'Módulo Instagram.',
    rest: 'Lógica de agendamento caótico, publicação via API e moderação de comentários.',
  },
  {
    file: 'controle_PC.py',
    boldLead: 'Mãos Digitais.',
    rest: 'Controle do mouse, teclado e navegador (Brave) com sistema de autorização falada.',
  },
  {
    file: 'gmail_celina.py',
    boldLead: 'Módulo E-mail.',
    rest: 'Leitura, envio e organização da caixa de entrada do Gmail.',
  },
  {
    file: 'prompt.py',
    boldLead: 'Personalidade.',
    rest: 'Contém os System Prompts, regras de tom de voz e instruções de sessão.',
  },
  {
    file: 'insta_cron.py',
    boldLead: 'O Vigia.',
    rest: 'Script em background que monitora a fila de posts e publica nos horários definidos.',
  },
  {
    file: '.env',
    boldLead: 'Segredos.',
    rest: 'Armazena tokens da Meta, chaves de API e configurações sensíveis.',
  },
  {
    file: 'insta_queue/',
    boldLead: 'Fila Local.',
    rest: 'Pasta onde os posts agendados ficam armazenados em JSON até a publicação.',
  },
];

const INSTALL_CMD =
  'pip install livekit-agents livekit-agents[google] python-dotenv requests pyautogui pyperclip';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_CMD);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f9f9fb] text-[#292524] font-sans">
      {/* Clean 3-Zone Top Bar */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200/80">
        <div className="max-w-[960px] mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
          <a
            href="#privacy"
            className="text-lg font-bold tracking-tight text-[#292524] hover:text-[#8e44ad] transition-colors whitespace-nowrap shrink-0"
          >
            CelinaCriater
          </a>

          <nav
            aria-label="Navegação legal"
            className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600"
          >
            <a
              href="#privacy"
              className="hover:text-[#8e44ad] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Política de Privacidade
            </a>
            <a
              href="#terms"
              className="hover:text-[#8e44ad] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Termos de Serviço
            </a>
            <a
              href="#deletion"
              className="hover:text-[#8e44ad] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Exclusão de Dados
            </a>
            <a
              href="#celinacriater"
              className="hover:text-[#8e44ad] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Documentação
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8e44ad]"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              Imprimir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-5 sm:px-6 py-8 sm:py-12">
        {/* Mobile quick links matching attached HTML nav-links */}
        <div className="flex md:hidden flex-wrap items-center gap-x-5 gap-y-2 mb-6 text-sm font-bold text-[#8e44ad] no-print">
          <a href="#privacy" className="hover:underline whitespace-nowrap shrink-0">
            Política de Privacidade
          </a>
          <a href="#terms" className="hover:underline whitespace-nowrap shrink-0">
            Termos de Serviço
          </a>
          <a href="#deletion" className="hover:underline whitespace-nowrap shrink-0">
            Exclusão de Dados
          </a>
          <a href="#celinacriater" className="hover:underline whitespace-nowrap shrink-0">
            Documentação
          </a>
        </div>

        <div className="space-y-7">
          {/* SECTION 1: Política de Privacidade (Verbatim from index.html) */}
          <section
            id="privacy"
            className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-9"
          >
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#8e44ad] border-b-2 border-[#9b59b6] pb-3 mb-5 text-balance">
              Política de Privacidade
            </h1>
            <p className="mb-3 text-base text-slate-900">
              <strong>CelinaCriater</strong>
            </p>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              Esta política descreve como o CelinaCriater (aqui denominado &quot;Serviço&quot;) coleta, usa e protege as informações dos usuários e das contas de Instagram conectadas.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              1. Dados Coletados
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700 mb-2.5">
              O Serviço interage com a Meta Graph API para acessar:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[15.5px] leading-relaxed text-slate-700">
              <li>Identificadores públicos da conta do Instagram Business (ID, nome de usuário).</li>
              <li>Métricas de engajamento (número de seguidores, contagem de likes).</li>
              <li>Conteúdo de posts e comentários públicos vinculados à conta do usuário.</li>
              <li>Metadados de interação do usuário com o agente (comandos de voz/texto enviados ao agente).</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              2. Uso dos Dados
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700 mb-2.5">
              Os dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[15.5px] leading-relaxed text-slate-700">
              <li>Gerar e agendar conteúdo conforme instruções do operador.</li>
              <li>Analizar sentimento de comentários para moderação automática.</li>
              <li>Otimizar horários de publicação com base em janelas de atividade.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              3. Compartilhamento
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros, exceto quando necessário para a execução dos comandos via API da Meta (ex: publicar um post). Os dados processados localmente pelo agente não saem do servidor do usuário, a menos que a interação com a API da Meta exija transmissão.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              4. Segurança
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              Utilizamos tokens de acesso criptografados e armazenados localmente no arquivo{' '}
              <code className="font-mono text-[13.5px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                .env
              </code>
              . Recomenda-se a rotação periódica de tokens na Meta Business Suite.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              5. Exclusão de Dados
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              O operador pode revogar o acesso do aplicativo a qualquer momento na Meta Business Suite, o que resultará na interrupção imediata do acesso a quaisquer dados.
            </p>
          </section>

          {/* SECTION 2: Termos de Serviço (Verbatim from index.html) */}
          <section
            id="terms"
            className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-9"
          >
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#8e44ad] border-b-2 border-[#9b59b6] pb-3 mb-5 text-balance">
              Termos de Serviço
            </h1>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              Ao utilizar o CelinaCriater, o usuário concorda com os seguintes termos:
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              1. Natureza do Serviço
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              O CelinaCriater é uma ferramenta de automação baseada em IA para gestão de conteúdo e moderação em redes sociais. As ações tomadas pelo agente (postagens, respostas) refletem as instruções dadas pelo operador e o treinamento do modelo de linguagem.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              2. Responsabilidade do Operador
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              O operador é responsável pelo conteúdo publicado e pelas respostas enviadas em nome da sua conta. O operador deve revisar amostras de conteúdo gerado para garantir conformidade com as diretrizes da comunidade do Instagram.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              3. Limitação de Responsabilidade
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700 mb-2.5">
              O CelinaCriater não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[15.5px] leading-relaxed text-slate-700">
              <li>Banimentos ou restrições de conta causados por violação dos Termos da Meta.</li>
              <li>Erros de interpretação semântica da IA que resultem em respostas inadequadas.</li>
              <li>Perda de dados não sincronizados na fila local.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              4. Conformidade
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              O operador concorda em não utilizar o agente para spam, disseminação de desinformação ou violação de direitos de terceiros.
            </p>
          </section>

          {/* SECTION 3: Como Excluir Seus Dados (Verbatim from index.html) */}
          <section
            id="deletion"
            className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-9"
          >
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#8e44ad] border-b-2 border-[#9b59b6] pb-3 mb-5 text-balance">
              Como Excluir Seus Dados
            </h1>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              Para garantir a exclusão completa dos seus dados e a desconexão total do serviço, siga os passos abaixo:
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              1. Revogar Acesso na Meta (Obrigatório)
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15.5px] leading-relaxed text-slate-700 tabular-nums">
              <li>
                Acesse sua{' '}
                <a
                  href="https://business.facebook.com/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#8e44ad] underline underline-offset-2 hover:text-[#6c3483]"
                >
                  Meta Business Suite
                  <ExternalLink className="w-3.5 h-3.5 inline shrink-0" aria-hidden="true" />
                </a>
                .
              </li>
              <li>
                Vá em <strong className="font-semibold text-slate-900">Apps</strong>.
              </li>
              <li>
                Selecione o aplicativo{' '}
                <strong className="font-semibold text-slate-900">CelinaCriater</strong> (ID:{' '}
                <span className="font-mono text-[14px]">1509523271008975</span>).
              </li>
              <li>
                Clique em <strong className="font-semibold text-slate-900">Remove Access</strong> ou{' '}
                <strong className="font-semibold text-slate-900">Revoke Access</strong>.
              </li>
              <li>
                Isso invalida o Token de Acesso imediatamente. A API deixará de responder aos nossos pedidos.
              </li>
            </ol>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              2. Limpeza Local
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-[15.5px] leading-relaxed text-slate-700 tabular-nums">
              <li>
                No seu servidor local, apague o arquivo{' '}
                <code className="font-mono text-[13.5px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                  .env
                </code>
                .
              </li>
              <li>
                Apague a pasta{' '}
                <code className="font-mono text-[13.5px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                  insta_queue
                </code>{' '}
                (que contém a fila de posts agendados).
              </li>
              <li>
                Apague o arquivo{' '}
                <code className="font-mono text-[13.5px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                  memoria_celina_regras.md
                </code>{' '}
                se contiver dados sensíveis pessoais.
              </li>
            </ol>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              3. Confirmação
            </h2>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              Após a revogação do token, nenhum dado novo será coletado. Os dados já processados localmente serão apagados conforme o passo 2.
            </p>
          </section>

          {/* SECTION 4: CelinaCriater Documentation (Verbatim from CelinaCriater.md) */}
          <section
            id="celinacriater"
            className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-9"
          >
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#8e44ad] border-b-2 border-[#9b59b6] pb-3 mb-5 text-balance">
              CelinaCriater 🤖📸
            </h1>
            <p className="mb-3 text-base text-slate-900">
              <strong>Automação Inteligente de Instagram via Agente Local de IA</strong>
            </p>
            <p className="text-[15.5px] leading-relaxed text-slate-700">
              O{' '}
              <code className="font-mono text-[13.5px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                CelinaCriater
              </code>{' '}
              é um sistema de automação social desenvolvido com base em agentes de IA locais (LiveKit Agents). Ele permite que uma IA autônoma gere conteúdo, agende posts em horários &quot;caóticos&quot; (anti-algoritmo) e modere comentários em tempo real, tudo integrado à Meta Graph API.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-3">
              🌟 Recursos Principais
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[15.5px] leading-relaxed text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">
                  Agendamento Caótico (Anti-Padrão):
                </strong>{' '}
                Sorteia horários próximos às janelas de pico (07h, 12h, 20h) com variações aleatórias de minutos para evitar detecção de comportamento robótico pelo algoritmo.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Moderação Semântica:</strong>{' '}
                Analisa o sentimento de comentários e gera respostas contextuais no tom da persona.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Integração Local:</strong>{' '}
                Funciona offline para geração de conteúdo, usando APIs externas apenas para execução (Meta, Clima, Web).
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Segurança por Autorização:
                </strong>{' '}
                Ações sensíveis (publicar, apagar) exigem confirmação verbal do operador (&quot;Autoriza?&quot;).
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Arquitetura Modular:</strong>{' '}
                Separação clara entre a &quot;mente&quot; (Agente), as &quot;mãos&quot; (Tools) e a &quot;memória&quot; (Banco local).
              </li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-3">
              🛠️ Stack Tecnológica
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[15.5px] leading-relaxed text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">Linguagem:</strong> Python 3.10+
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Framework de IA:</strong> LiveKit Agents
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Modelo de Linguagem:</strong>{' '}
                Google Gemini Realtime (via LiveKit Plugin)
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Visão Computacional:</strong>{' '}
                Qwen3-VL (Local via Ollama)
              </li>
              <li>
                <strong className="font-semibold text-slate-900">APIs Externas:</strong>
                <ul className="list-disc pl-6 mt-1.5 space-y-1">
                  <li>Meta Graph API (Instagram Business)</li>
                  <li>Google Gmail API</li>
                  <li>Open-Meteo (Clima)</li>
                </ul>
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Automação de Sistema:</strong>{' '}
                PyAutoGUI (Controle de Mouse/Teclado)
              </li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-3">
              📂 Estrutura de Arquivos
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left border-collapse text-[14.5px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800">
                    <th className="py-2.5 px-4 font-semibold whitespace-nowrap">Arquivo</th>
                    <th className="py-2.5 px-4 font-semibold">Descrição</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 text-slate-700">
                  {FILE_STRUCTURE.map((row) => (
                    <tr key={row.file} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-2.5 px-4 align-top whitespace-nowrap">
                        <code className="font-mono text-[13px] bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">
                          {row.file}
                        </code>
                      </td>
                      <td className="py-2.5 px-4 leading-relaxed">
                        <strong className="font-semibold text-slate-900">{row.boldLead}</strong>{' '}
                        {row.rest}
                        {row.codeMid ? (
                          <>
                            <code className="font-mono text-[13px] bg-slate-100 text-slate-800 px-1 py-0.5 rounded">
                              {row.codeMid}
                            </code>
                            {row.tail}
                          </>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-7 mb-2.5">
              🚀 Como Executar
            </h2>
            <h3 className="text-base font-semibold text-slate-800 mb-2.5">
              1. Instalação de Dependências
            </h3>
            <div className="relative bg-slate-900 text-slate-100 rounded-lg p-4 pr-24 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-relaxed whitespace-pre-wrap break-all sm:whitespace-pre">
                <code>{INSTALL_CMD}</code>
              </pre>
              <button
                type="button"
                onClick={handleCopyCommand}
                className="no-print absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    Copiar
                  </>
                )}
              </button>
            </div>
          </section>
        </div>

        {/* Footer (Verbatim from index.html) */}
        <footer className="mt-12 pt-6 border-t border-slate-200/80 text-center text-sm text-slate-500">
          &copy; 2024-2026 CelinaCriater. Powered by Kindo DeepHat Architecture.
        </footer>
      </main>
    </div>
  );
}
