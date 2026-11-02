# CelinaCriater 🤖📸

**Automação Inteligente de Instagram via Agente Local de IA**

O `CelinaCriater` é um sistema de automação social desenvolvido com base em agentes de IA locais (LiveKit Agents). Ele permite que uma IA autônoma gere conteúdo, agende posts em horários "caóticos" (anti-algoritmo) e modere comentários em tempo real, tudo integrado à Meta Graph API.

## 🌟 Recursos Principais

- **Agendamento Caótico (Anti-Padrão):** Sorteia horários próximos às janelas de pico (07h, 12h, 20h) com variações aleatórias de minutos para evitar detecção de comportamento robótico pelo algoritmo.
- **Moderação Semântica:** Analisa o sentimento de comentários e gera respostas contextuais no tom da persona.
- **Integração Local:** Funciona offline para geração de conteúdo, usando APIs externas apenas para execução (Meta, Clima, Web).
- **Segurança por Autorização:** Ações sensíveis (publicar, apagar) exigem confirmação verbal do operador ("Autoriza?").
- **Arquitetura Modular:** Separação clara entre a "mente" (Agente), as "mãos" (Tools) e a "memória" (Banco local).

## 🛠️ Stack Tecnológica

- **Linguagem:** Python 3.10+
- **Framework de IA:** LiveKit Agents
- **Modelo de Linguagem:** Google Gemini Realtime (via LiveKit Plugin)
- **Visão Computacional:** Qwen3-VL (Local via Ollama)
- **APIs Externas:**
  - Meta Graph API (Instagram Business)
  - Google Gmail API
  - Open-Meteo (Clima)
- **Automação de Sistema:** PyAutoGUI (Controle de Mouse/Teclado)

## 📂 Estrutura de Arquivos

| Arquivo | Descrição |
| :--- | :--- |
| `agen.py` | **O Cérebro.** Define a classe `Celina`, as instruções de sistema e a orquestração das ferramentas via LiveKit. |
| `tools.py` | **Biblioteca Central.** Contém funções utilitárias como busca em pastas, memória local e navegação. |
| `instagram_tools.py` | **Módulo Instagram.** Lógica de agendamento caótico, publicação via API e moderação de comentários. |
| `controle_PC.py` | **Mãos Digitais.** Controle do mouse, teclado e navegador (Brave) com sistema de autorização falada. |
| `gmail_celina.py` | **Módulo E-mail.** Leitura, envio e organização da caixa de entrada do Gmail. |
| `prompt.py` | **Personalidade.** Contém os System Prompts, regras de tom de voz e instruções de sessão. |
| `insta_cron.py` | **O Vigia.** Script em background que monitora a fila de posts e publica nos horários definidos. |
| `.env` | **Segredos.** Armazena tokens da Meta, chaves de API e configurações sensíveis. |
| `insta_queue/` | **Fila Local.** Pasta onde os posts agendados ficam armazenados em JSON até a publicação. |

## 🚀 Como Executar

### 1. Instalação de Dependências
```bash
pip install livekit-agents livekit-agents[google] python-dotenv requests pyautogui pyperclip