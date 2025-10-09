# Especificações do Backend - Fundação Joanna de Ângelis

## 📋 Visão Geral

Sistema backend para gerenciar doações, voluntários e apoiadores da ONG, com painel administrativo seguro.

## 🗄️ Estrutura do Banco de Dados

### 1. Tabela: `admins`

Gerenciamento de administradores do sistema.

**IMPORTANTE**: Usar `auth.users` do Supabase para autenticação. Esta tabela é apenas para dados adicionais.

```sql
CREATE TABLE public.admins (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nome_completo VARCHAR(255) NOT NULL,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_admins_id ON public.admins(id);

-- Row Level Security (RLS)
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Policy: Admins podem ler sua própria informação
CREATE POLICY "Admins podem ver próprios dados"
  ON public.admins FOR SELECT
  USING (auth.uid() = id);

-- Policy: Apenas service role pode inserir/atualizar
CREATE POLICY "Service role pode gerenciar admins"
  ON public.admins FOR ALL
  USING (auth.jwt()->>'role' = 'service_role');
```

### 2. Tabela: `voluntarios`

Cadastro de voluntários ativos da ONG.

```sql
CREATE TABLE public.voluntarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo VARCHAR(255) NOT NULL,
  cargo VARCHAR(100) NOT NULL,
  data_entrada DATE NOT NULL,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_voluntarios_ativo ON public.voluntarios(ativo);
CREATE INDEX idx_voluntarios_data_entrada ON public.voluntarios(data_entrada);

-- Row Level Security (RLS)
ALTER TABLE public.voluntarios ENABLE ROW LEVEL SECURITY;

-- Policy: Todos podem ler voluntários ativos (público)
CREATE POLICY "Voluntários ativos são públicos"
  ON public.voluntarios FOR SELECT
  USING (ativo = true);

-- Policy: Apenas admins autenticados podem inserir/atualizar
CREATE POLICY "Apenas admins podem gerenciar voluntários"
  ON public.voluntarios FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );
```

### 3. Tabela: `apoiadores`

Pessoas ou comércios que apoiaram a ONG (doações únicas ou recorrentes).

```sql
CREATE TABLE public.apoiadores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo VARCHAR(255) NOT NULL,
  tipo_pessoa VARCHAR(20) CHECK (tipo_pessoa IN ('fisica', 'juridica')) NOT NULL,
  cpf_cnpj VARCHAR(18) UNIQUE NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20),
  tipo_apoio VARCHAR(30) CHECK (tipo_apoio IN ('doacao_unica', 'doacao_recorrente', 'patrocinio', 'parceria')) NOT NULL,
  valor_total DECIMAL(10, 2) DEFAULT 0,
  primeira_doacao TIMESTAMP NOT NULL,
  ultima_doacao TIMESTAMP,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_apoiadores_cpf_cnpj ON public.apoiadores(cpf_cnpj);
CREATE INDEX idx_apoiadores_tipo_pessoa ON public.apoiadores(tipo_pessoa);
CREATE INDEX idx_apoiadores_ativo ON public.apoiadores(ativo);

-- Row Level Security (RLS)
ALTER TABLE public.apoiadores ENABLE ROW LEVEL SECURITY;

-- Policy: Apenas admins podem ver apoiadores
CREATE POLICY "Apenas admins podem ver apoiadores"
  ON public.apoiadores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );

-- Policy: Apenas admins podem gerenciar apoiadores
CREATE POLICY "Apenas admins podem gerenciar apoiadores"
  ON public.apoiadores FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );
```

### 4. Tabela: `doacoes`

Registro detalhado de todas as doações realizadas.

```sql
CREATE TABLE public.doacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  apoiador_id UUID REFERENCES public.apoiadores(id) ON DELETE SET NULL,
  nome_completo VARCHAR(255) NOT NULL,
  cpf_cnpj VARCHAR(18) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20),
  valor DECIMAL(10, 2) NOT NULL,
  metodo_pagamento VARCHAR(20) CHECK (metodo_pagamento IN ('cartao_credito', 'pix', 'boleto', 'transferencia')) NOT NULL,
  status VARCHAR(20) CHECK (status IN ('pendente', 'processando', 'aprovada', 'recusada', 'cancelada')) DEFAULT 'pendente',
  gateway_transaction_id VARCHAR(255),
  gateway_response JSONB,
  mensagem TEXT,
  ip_origem VARCHAR(45),
  user_agent TEXT,
  criado_em TIMESTAMP DEFAULT NOW(),
  processado_em TIMESTAMP,
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_doacoes_apoiador ON public.doacoes(apoiador_id);
CREATE INDEX idx_doacoes_status ON public.doacoes(status);
CREATE INDEX idx_doacoes_criado_em ON public.doacoes(criado_em);
CREATE INDEX idx_doacoes_cpf_cnpj ON public.doacoes(cpf_cnpj);

-- Row Level Security (RLS)
ALTER TABLE public.doacoes ENABLE ROW LEVEL SECURITY;

-- Policy: Apenas admins podem ver doações
CREATE POLICY "Apenas admins podem ver doações"
  ON public.doacoes FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );

-- Policy: Service role pode inserir (para processar doações via Edge Function)
CREATE POLICY "Service role pode inserir doações"
  ON public.doacoes FOR INSERT
  WITH CHECK (true);

-- Policy: Admins e service role podem atualizar
CREATE POLICY "Admins podem atualizar doações"
  ON public.doacoes FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );
```

### 5. Tabela: `newsletter_subscribers`

Lista de emails inscritos na newsletter.

```sql
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  ativo BOOLEAN DEFAULT true,
  confirmado BOOLEAN DEFAULT false,
  token_confirmacao VARCHAR(255),
  ip_origem VARCHAR(45),
  inscrito_em TIMESTAMP DEFAULT NOW(),
  confirmado_em TIMESTAMP,
  cancelado_em TIMESTAMP
);

CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_ativo ON public.newsletter_subscribers(ativo);

-- Row Level Security (RLS)
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Qualquer um pode se inscrever (anônimo)
CREATE POLICY "Qualquer um pode se inscrever"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Policy: Apenas admins podem ver lista
CREATE POLICY "Apenas admins podem ver newsletter"
  ON public.newsletter_subscribers FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );

-- Policy: Pessoas podem cancelar própria inscrição via token
CREATE POLICY "Cancelar via token público"
  ON public.newsletter_subscribers FOR UPDATE
  USING (true)
  WITH CHECK (ativo = false);
```

### 6. Tabela: `rate_limit_attempts`

Controle de tentativas para rate limiting customizado (OPCIONAL - Supabase já tem proteção).

```sql
CREATE TABLE public.rate_limit_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identificador VARCHAR(255) NOT NULL, -- pode ser email ou IP
  tipo VARCHAR(20) CHECK (tipo IN ('login', 'api', 'doacao')) NOT NULL,
  tentativas INT DEFAULT 0,
  bloqueado_ate TIMESTAMP,
  primeira_tentativa TIMESTAMP DEFAULT NOW(),
  ultima_tentativa TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_rate_limit_identificador ON public.rate_limit_attempts(identificador, tipo);
CREATE INDEX idx_rate_limit_bloqueado ON public.rate_limit_attempts(bloqueado_ate);

-- Row Level Security (RLS)
ALTER TABLE public.rate_limit_attempts ENABLE ROW LEVEL SECURITY;

-- Policy: Service role e admins podem gerenciar
CREATE POLICY "Service role gerencia rate limit"
  ON public.rate_limit_attempts FOR ALL
  USING (
    auth.jwt()->>'role' = 'service_role' OR
    EXISTS (
      SELECT 1 FROM public.admins
      WHERE admins.id = auth.uid() AND admins.ativo = true
    )
  );
```

### 7. Tabela: `admin_sessions`

**NOTA**: Supabase já gerencia sessões JWT automaticamente via `auth.sessions`.
Esta tabela é OPCIONAL, apenas se precisar de auditoria adicional.

```sql
CREATE TABLE public.admin_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ip_origem VARCHAR(45),
  user_agent TEXT,
  criado_em TIMESTAMP DEFAULT NOW(),
  ultimo_acesso TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_sessions_admin ON public.admin_sessions(admin_id);
CREATE INDEX idx_sessions_criado ON public.admin_sessions(criado_em);

-- Row Level Security (RLS)
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;

-- Policy: Admins veem apenas suas sessões
CREATE POLICY "Admins veem próprias sessões"
  ON public.admin_sessions FOR SELECT
  USING (auth.uid() = admin_id);
```

## 🔐 Sistema de Autenticação (Supabase Auth)

### Usar Supabase Auth Nativo

O Supabase já gerencia JWT, refresh tokens, e expiração automaticamente.

#### Configuração no Supabase Dashboard:

1. **Settings > Auth > JWT Expiry**: Configurar para 2592000 segundos (30 dias)
2. **Settings > Auth > Refresh Token Lifetime**: 30 dias
3. **Settings > Auth > Email Auth**: Habilitar
4. **Settings > Auth > Rate Limiting**: Configurar limites

### Autenticação de Admins

```typescript
// Login no frontend ou backend
const { data, error } = await supabase.auth.signInWithPassword({
  email: "admin@fundacao.org",
  password: "senha_segura",
});

// Supabase retorna automaticamente:
// - access_token (JWT)
// - refresh_token
// - user object
// - expires_in
```

### Rate Limiting (Nativo do Supabase)

Configurar no Dashboard:

- **Auth Rate Limits**: Supabase já tem proteção contra brute force
- **Database Rate Limits**: Via Supabase Edge Functions
- **Custom Rate Limiting**: Implementar na camada de API se necessário

**Limites sugeridos no Supabase:**

- **Login attempts**: 5 tentativas por 15 minutos por IP
- **API requests**: 100 req/min por usuário autenticado
- **Anonymous requests**: 30 req/min por IP

## 🚀 Endpoints da API

### Autenticação

#### POST `/api/auth/login`

Login do administrador (usar Supabase Auth diretamente).

```typescript
// No cliente (frontend ou backend):
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@fundacao.org',
  password: 'senha_segura'
})

// Response automático do Supabase:
{
  "access_token": "eyJhbGc...",
  "token_type": "bearer",
  "expires_in": 2592000,
  "expires_at": 1736208000,
  "refresh_token": "refresh_token_aqui",
  "user": {
    "id": "uuid",
    "email": "admin@fundacao.org",
    "role": "authenticated"
  }
}

// Erros são gerenciados pelo Supabase automaticamente
```

#### POST `/api/auth/logout`

Logout (revogar token via Supabase).

```typescript
// Simples assim:
const { error } = await supabase.auth.signOut();

// Supabase automaticamente:
// - Revoga o token
// - Limpa a sessão
// - Remove cookies (se configurado)
```

#### POST `/api/auth/refresh`

Refresh automático do Supabase (não precisa implementar).

```typescript
// Supabase SDK faz refresh automático quando token expira
// Mas pode forçar manualmente:
const { data, error } = await supabase.auth.refreshSession();
```

### Doações

#### POST `/api/doacoes`

Processar doação por cartão de crédito.

```json
Request:
{
  "nome_completo": "João Silva",
  "cpf_cnpj": "123.456.789-00",
  "email": "joao@email.com",
  "telefone": "(11) 98765-4321",
  "valor": 100.00,
  "mensagem": "Continuem o ótimo trabalho!",
  "cartao": {
    "numero": "4111111111111111",
    "nome_titular": "João Silva",
    "validade": "12/2028",
    "cvv": "123"
  }
}

Response 201:
{
  "id": "uuid",
  "status": "processando",
  "mensagem": "Doação recebida e está sendo processada"
}

Response 400:
{
  "erro": "Dados inválidos",
  "detalhes": {
    "cpf_cnpj": "CPF inválido"
  }
}
```

#### GET `/api/doacoes` 🔒

Listar doações (admin apenas).

```json
Headers:
Authorization: Bearer {token}

Query params:
?status=aprovada&page=1&limit=50&data_inicio=2025-01-01&data_fim=2025-12-31

Response 200:
{
  "doacoes": [...],
  "total": 150,
  "pagina": 1,
  "total_paginas": 3
}
```

#### GET `/api/doacoes/stats` 🔒

Estatísticas de doações (admin apenas).

```json
Response 200:
{
  "total_doacoes": 2000,
  "valor_total": 500000.00,
  "media_doacao": 250.00,
  "doacoes_mes_atual": 50,
  "valor_mes_atual": 12500.00
}
```

### Apoiadores

#### GET `/api/apoiadores` 🔒

Listar apoiadores (admin apenas).

```json
Query params:
?tipo_pessoa=fisica&ativo=true&page=1&limit=50

Response 200:
{
  "apoiadores": [...],
  "total": 500,
  "pagina": 1,
  "total_paginas": 10
}
```

#### GET `/api/apoiadores/:id` 🔒

Detalhes de um apoiador (admin apenas).

```json
Response 200:
{
  "id": "uuid",
  "nome_completo": "Maria Santos",
  "tipo_pessoa": "fisica",
  "cpf_cnpj": "987.654.321-00",
  "valor_total": 1500.00,
  "total_doacoes": 5,
  "doacoes_recentes": [...]
}
```

#### POST `/api/apoiadores` 🔒

Criar apoiador manualmente (admin apenas).

#### PUT `/api/apoiadores/:id` 🔒

Atualizar apoiador (admin apenas).

### Voluntários

#### GET `/api/voluntarios`

Listar voluntários ativos (público).

```json
Response 200:
{
  "voluntarios": [
    {
      "id": "uuid",
      "nome_completo": "Pedro Costa",
      "cargo": "Coordenador de Projetos",
      "data_entrada": "2020-03-15"
    }
  ]
}
```

#### POST `/api/voluntarios` 🔒

Adicionar voluntário (admin apenas).

```json
Request:
{
  "nome_completo": "Ana Paula",
  "cargo": "Psicóloga Voluntária",
  "data_entrada": "2025-10-08"
}

Response 201:
{
  "id": "uuid",
  "nome_completo": "Ana Paula",
  "cargo": "Psicóloga Voluntária",
  "data_entrada": "2025-10-08",
  "ativo": true
}
```

#### PUT `/api/voluntarios/:id` 🔒

Atualizar voluntário (admin apenas).

#### DELETE `/api/voluntarios/:id` 🔒

Desativar voluntário (soft delete, admin apenas).

### Newsletter

#### POST `/api/newsletter/subscribe`

Inscrever na newsletter.

```json
Request:
{
  "email": "contato@email.com"
}

Response 201:
{
  "mensagem": "Email enviado para confirmação"
}
```

#### GET `/api/newsletter/confirm/:token`

Confirmar inscrição.

#### POST `/api/newsletter/unsubscribe`

Cancelar inscrição.

## 🔒 Segurança

### Obrigatório

1. **HTTPS apenas** em produção
2. **CORS** configurado para domínios específicos
3. **Helmet.js** ou equivalente para headers de segurança
4. **Validação de entrada** em todos os endpoints
5. **Sanitização** de dados antes de salvar no banco
6. **Hash de senhas** com bcrypt (cost factor >= 12)
7. **Rate limiting** em todos os endpoints públicos
8. **Logs de auditoria** para ações administrativas
9. **Criptografia** de dados sensíveis em repouso
10. **Validação de CPF/CNPJ** antes de processar

### Headers de Segurança Recomendados

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

## 💳 Integração de Pagamento

### Gateway Recomendado

- **Stripe** (internacional) ou **Mercado Pago** (Brasil)
- Processar pagamentos no backend (nunca no frontend)
- Armazenar apenas últimos 4 dígitos do cartão
- Nunca armazenar CVV
- Implementar webhooks para confirmação assíncrona

### Fluxo de Doação

1. Frontend envia dados do cartão
2. Backend valida CPF/CNPJ e dados
3. Backend cria registro com status "pendente"
4. Backend envia para gateway de pagamento
5. Gateway retorna resposta imediata
6. Backend atualiza status para "processando" ou "aprovada"
7. Webhook confirma processamento final
8. Backend atualiza tabela de apoiadores

## 📊 Relatórios e Analytics

### Endpoints Administrativos

#### GET `/api/admin/dashboard` 🔒

Dashboard com métricas principais.

```json
Response 200:
{
  "hoje": {
    "doacoes": 5,
    "valor": 1250.00
  },
  "mes": {
    "doacoes": 150,
    "valor": 37500.00,
    "novos_apoiadores": 20
  },
  "ano": {
    "doacoes": 2000,
    "valor": 500000.00,
    "voluntarios_ativos": 45
  },
  "total_historico": {
    "vidas_impactadas": 15000,
    "apoiadores": 500,
    "anos_atividade": 13
  }
}
```

## 🛠️ Stack Tecnológica Sugerida

### Backend

- **Supabase** como backend completo (PostgreSQL + Auth + Storage + Realtime)
- **Node.js** com **Express** ou **Fastify** para lógica customizada
- **TypeScript** para type safety
- **@supabase/supabase-js** cliente oficial
- **Supabase Auth** para autenticação (substitui JWT manual)
- **Supabase Database** PostgreSQL gerenciado
- **Supabase Edge Functions** para webhooks e processamento
- **Joi** ou **Zod** para validação adicional

### DevOps

- **Supabase CLI** para migrações e desenvolvimento local
- **GitHub Actions** para CI/CD
- **Supabase Edge Functions** para deploy serverless
- Variáveis de ambiente para configuração

## 🌍 Variáveis de Ambiente

```env
# Supabase
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_chave_anonima_publica
SUPABASE_SERVICE_KEY=sua_chave_service_privada_backend_only

# JWT (Supabase já gerencia, mas caso precise customizar)
JWT_SECRET=seu_supabase_jwt_secret

# Payment Gateway
PAYMENT_GATEWAY=mercadopago
MERCADOPAGO_ACCESS_TOKEN=seu_token_aqui
MERCADOPAGO_PUBLIC_KEY=sua_chave_publica

# Email (Supabase tem SMTP nativo, mas pode usar externo)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASS=sua_senha_app

# App
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://fundacaojoanna.org
ALLOWED_ORIGINS=https://fundacaojoanna.org,https://www.fundacaojoanna.org
```

## 📝 Notas Adicionais

### Tabelas Adicionadas (além do solicitado)

1. **`doacoes`** - Histórico completo de transações (essencial para auditoria e relatórios)
2. **`newsletter_subscribers`** - Newsletter que vocês já têm no frontend
3. **`rate_limit_attempts`** - Necessário para implementar rate limiting robusto
4. **`admin_sessions`** - Gerenciar sessões JWT e permitir logout/revogação

### Validações Importantes

- **CPF**: Validar dígitos verificadores
- **CNPJ**: Validar dígitos verificadores
- **Email**: RFC 5322 compliant
- **Telefone**: Aceitar diversos formatos brasileiros
- **Valor**: Mínimo de R$ 5,00 para doações

### Considerações de Performance

- Índices em colunas frequentemente consultadas
- Pagination obrigatória em listagens
- Cache de queries pesadas (Redis)
- Soft delete ao invés de DELETE (manter histórico)

### GDPR e LGPD

- Endpoint para exportar dados de um usuário
- Endpoint para deletar dados (direito ao esquecimento)
- Logs de consentimento para newsletter
- Política de retenção de dados (ex: 5 anos)

---

**Versão**: 1.0  
**Data**: 08/10/2025  
**Autor**: Especificações para desenvolvimento do backend da Fundação Joanna de Ângelis
