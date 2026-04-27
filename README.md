<h1 align="center" style="font-weight: bold;">Nome do Projeto 💻</h1>

<p align="center">
 - <a href="#layout">Layout</a> 
 - <a href="#sobre">Sobre</a> 
 - <a href="#tecnologias-utilizadas">Tec Utilizadas</a>
 - <a href="#como-usar">Instruções de uso </a>  
 - <a href="#funcionalidades">Funcionalidades</a>  
 - <a href="#estrutura do projeto">estrutura do projeto</a>  
 - <a href="#status">Status</a> 
</p>

<p align="center">
    Sistema de agendamento online para barbearias, permitindo que clientes escolham horários disponíveis e enviem solicitações diretamente para o WhatsApp do barbeiro.
</p>

<p align="center">
     <a href="URL_DO_PROJETO">📱 Ver Projeto</a>
</p>


<h2 id="layout">🎨 Layout</h2>

<p align="center">
    <img src="public/imgs/printTela01.png" alt="Screenshot 1" width="400px">
    <img src="public/imgs/printTela02.png" alt="Screenshot 2" width="400px">
</p>

---
<br>

<h2 id="sobre">💡 Sobre</h2>
<h4> oque ele resolve </h4>
<p>
Este projeto foi desenvolvido em parceria com um desenvolvedor sênior, que forneceu o layout e direcionamento técnico, enquanto a implementação foi realizada por mim como forma de consolidar conhecimentos em React e boas práticas de desenvolvimento.

A proposta do sistema é resolver um problema comum em barbearias locais: a organização manual de agendamentos, muitas vezes feita diretamente pelo WhatsApp, o que pode gerar conflitos de horário e perda de tempo.

Com essa aplicação, o cliente pode acessar o site, visualizar os horários disponíveis e ocupados em tempo real, escolher o melhor horário e enviar automaticamente uma solicitação via WhatsApp para o barbeiro. A confirmação final ainda fica sob responsabilidade do profissional, garantindo controle total da agenda.

Além de ser um projeto prático para aprendizado, ele também foi pensado como um produto real, com potencial de ser comercializado para barbearias da região.
</p>

---
<br>

<h2 id="funcionalidades">⚡ Funcionalidades</h2>

- **Visualização de horários disponíveis e ocupados**
- **Seleção de serviços oferecidos pela barbearia**
- **Escolha de data e horário para agendamento**
- **Validação de disponibilidade antes do envio**
- **Envio automático de mensagem para o WhatsApp do barbeiro**
- **Interface responsiva e adaptada para diferentes dispositivos**

---
<br>

<h2 id="tecnologias-utilizadas">💻 Tecnologias Utilizadas</h2>

- **React + TypeScript**
- **Tailwind CSS**
- **Axios (requisições HTTP)**
- **JSON Server (simulação de API)**
- **TanStack Query (gerenciamento de dados e cache)**

---
<br>

<h2 id="como-usar">📚 Intruções iniciais de Uso</h2>


<h3 id="instalação">⚙️ Instalação </h3>

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# 2. Entre na pasta do projeto
cd nome-do-projeto

# 3. Instale todas as dependências
npm install

# 4. Inicie o servidor fake (JSON Server)
npm run server

# 5. Inicie a aplicação
npm run dev
```
---

<h2 id="estrutura do projeto">⚡ Estrutura do Projeto</h2>

### 📁 Árvore de Diretórios

```
barber-site/
├── app/
│   ├── page.tsx                      # Renderiza a página Home
│   │
│   ├── components/                   # 🎨 Componentes reutilizáveis
│   │   ├── button.tsx                # Botão genérico
│   │   ├── cardStandard.tsx          # Card padrão para serviços/avaliações
│   │   ├── header.tsx                # Cabeçalho da aplicação
│   │   ├── footer.tsx                # Rodapé com informações
│   │   ├── whoWeAre.tsx              # Seção "Quem Somos"
│   │   ├── services.tsx              # Seção de serviços (inicia agendamento)
│   │   ├── reviews.tsx               # Seção de avaliações dos clientes
│   │   ├── contactLocation.tsx       # Seção de contato e localização
│   │   ├── modalChoseTime.tsx        # Modal de seleção de horários
│   │   └── modalFinish.tsx           # Modal de confirmação final
│   │
│   ├── pages/                        # 📄 Páginas/Fluxo de agendamento
│   │   ├── home.tsx                  # Home (renderiza componentes da landing)
│   │   ├── selectAppointmentDate.tsx # Página de seleção de datas
│   │   └── confirmAppointment.tsx    # Página de confirmação de dados
│   │
│   ├── contexts/                     # 🔗 Gerenciamento de estado global
│   │   └── appointmentCtx.tsx        # Context + Provider de agendamento
│   │
│   ├── reducer/                      # 🔄 Lógica de redução de estado
│   │   └── reducer.ts                # Ações: UPDATE_SERVICE, UPDATE_DATE, etc.
│   │
│   ├── types/                        # 📝 Definições TypeScript
│   │   ├── appointmentsType.ts       # Interface de agendamentos
│   │   ├── ctxAppointmentType.ts     # Interface do contexto
│   │   ├── ClientType.ts             # Interface do cliente
│   │   ├── ClientsDataType.ts        # Interface de dados do cliente
│   │   ├── servicesType.ts           # Interface de serviços
│   │   ├── reviewType.ts             # Interface de avaliações
│   │   ├── BarberShopType.ts         # Interface da barbearia
│   │   ├── headerDataType.ts         # Interface de dados do header
│   │   └── [...outras types]         # Demais tipos específicos
│   │
│   ├── mocks/                        # 📊 Dados estáticos
│   │   └── mock.ts                   # Dados da barbearia, avaliações, etc.
│   │
│   └── axiosUrlBase/                 # 🌐 Configuração de requisições
│       └── urlBaseAxios.ts           # Instância e configuração Axios
│
├── public/
│   └── imgs/                         # 🖼️ Imagens estáticas
│
├── server.json                       # 🗄️ Banco de dados (JSON Server)
```

---

### 🔄 Fluxo de Funcionamento

```
┌─────────────────────────────────────────────────────────────────┐
│                        USUÁRIO NA HOME                          │
│                   (Home Page - home.tsx)                        │
└────────────┬────────────────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────────────────┐
│         1️⃣  NAVEGAÇÃO → SELEÇÃO DE SERVIÇO                      │
│    Components: Services.tsx + Button.tsx + CardStandard.tsx     │
│                                                                 │
│  Ação: Usuário seleciona um serviço (ex: "Corte + Barba")       │
│  Estado: SERVICE_UPDATE → Context (AppointmentCtx)             │
└────────────┬────────────────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────────────────┐
│       2️⃣  NAVEGAÇÃO → SELEÇÃO DE DATA/HORÁRIO                   │
│          (selectAppointmentDate.tsx)                            │
│                                                                 │
│  Ação: Exibe dias disponíveis do servidor (server.json)         │
│  Requisição: axios GET /appointments → days list               │
│  Estado: DATE_UPDATE → Context                                 │
└────────────┬────────────────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────────────────┐
│     3️⃣  MODAL DE HORÁRIOS → SELEÇÃO DE HORÁRIO                  │
│           (modalChoseTime.tsx)                                  │
│                                                                 │
│  Ação: Abre modal com horários do dia selecionado               │
│  Filtro: Remove horários já ocupados                            │
│  Estado: TIME_UPDATE → Context                                 │
└────────────┬────────────────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────────────────┐
│    4️⃣  COLETA DE DADOS DO CLIENTE                               │
│        (confirmAppointment.tsx)                                 │
│                                                                 │
│  Campos: Nome + Telefone                                        │
│  Validação: Form validation (não vazio)                         │
│  Estado: CLIENT_UPDATE → Context                               │
└────────────┬────────────────────────────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────────────────────────────┐
│    5️⃣  MODAL DE CONFIRMAÇÃO FINAL                               │
│          (modalFinish.tsx)                                      │
│                                                                 │
│  Exibe: Resumo completo do agendamento                          │
│  Ações:                                                         │
│    • POST /appointments → Salva agendamento no servidor         │
│    • Envia mensagem WhatsApp via API                            │
│    • RESET_STATE → Limpa contexto                              │
│    • Navega de volta para Home                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🧠 Gerenciamento de Estado

**Context & Reducer Pattern:**

```typescript
// Estado Global (AppointmentCtx)
{
  service: { name: string; price: number };
  date: string;
  time: string;
  client: { name: string; phone: string };
}

// Ações (reducer.ts)
UPDATE_SERVICE    → atualiza serviço selecionado
UPDATE_DATE       → atualiza data escolhida
UPDATE_TIME       → atualiza horário escolhido
UPDATE_CLIENT     → atualiza dados do cliente
RESET_STATE       → reseta tudo para o estado inicial
```

---

### 📡 Integração com Backend

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/appointments` | GET | Lista dias e horários disponíveis |
| `/appointments` | POST | Salva novo agendamento |
| `/barbershop` | GET | Dados da barbearia (idade, avaliações) |
| WhatsApp API | POST | Envia confirmação para barbeiro |

---

### 💡 Fluxo de Dados

```
Mock Data (mock.ts)
    ↓
Home Page → Distribui para Components
    ↓
Services Component → Usuário seleciona serviço
    ↓
Context (AppointmentCtx) → Armazena estado global
    ↓
SelectAppointmentDate → Busca dados do servidor (axios)
    ↓
ModalChoseTime → Filtra horários disponíveis
    ↓
ConfirmAppointment → Valida dados do cliente
    ↓
ModalFinish → POST dados + WhatsApp + RESET
    ↓
Volta para Home
```

---

### 🎯 Componentes Críticos

| Componente | Responsabilidade | Dependências |
|-----------|------------------|--------------|
| `AppointmentCtx` | Centralizar estado | `useReducer`, `reducer.ts` |
| `modalChoseTime` | Filtrar horários livres | `server.json`, `axios`, `Context` |
| `modalFinish` | Enviar dados finais | `axios`, `WhatsApp API`, `Context` |
| `selectAppointmentDate` | Listar datas | `axios`, `server.json`, `Context` |


---
<br>


<h2 id="status">🚀 Status do Projeto</h2>

![status](https://img.shields.io/badge/status-concluído-brightgreen)

---

<h2>🤝 Autor</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/mateus073">
        <img src="public/imgs/eu.jpeg" width="100px;" alt="Sua foto"/><br>
        <sub><b>Mateus Marques</b></sub>
      </a>
    </td>
  </tr>
</table>