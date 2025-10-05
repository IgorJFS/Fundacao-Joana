# 🚀 Backend Integration - Fundação Joanna

Este documento lista tudo que precisa ser feito no backend (Supabase) para integrar com o frontend.

---

## 📋 Tabelas Necessárias no Supabase

### 1. **voluntarios**

```sql
CREATE TABLE voluntarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo TEXT NOT NULL,
  funcao TEXT NOT NULL,
  foto_url TEXT,
  descricao TEXT,
  data_entrada TIMESTAMP DEFAULT NOW(),
  ativo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### 2. **Doadores** (Doações via PIX ou Cartão)

```sql
CREATE TABLE doadores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo TEXT NOT NULL,
  cpf_cnpj TEXT NOT NULL,
  valor NUMERIC NOT NULL,
  metodo_pagamento TEXT CHECK (metodo_pagamento IN ('pix', 'cartao')) NOT NULL,
  data_contribuicao DATE DEFAULT CURRENT_DATE,
  eternizar_nome BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Observação**:

- `eternizar_nome`: Se TRUE, o nome aparece publicamente na página de apoiadores
- Apenas PIX e Cartão são aceitos (doações físicas não entram nesta tabela)

### 3. **alertas**

```sql
CREATE TABLE alertas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  tipo TEXT CHECK (tipo IN ('urgente', 'info')) NOT NULL,
  mensagem TEXT NOT NULL,
  ativo BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Constraint: apenas 1 alerta ativo por vez
CREATE UNIQUE INDEX idx_alerta_ativo ON alertas (ativo) WHERE ativo = TRUE;
```

### 4. **admin_users** (Opcional - pode usar Supabase Auth)

```sql
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  nome TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔒 Políticas de Segurança (RLS)

### Habilitar RLS em todas as tabelas:

```sql
ALTER TABLE voluntarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE doadores ENABLE ROW LEVEL SECURITY;
ALTER TABLE alertas ENABLE ROW LEVEL SECURITY;
```

### Políticas de Leitura Pública:

```sql
-- Voluntários (público)
CREATE POLICY "Voluntários são públicos"
  ON voluntarios FOR SELECT
  USING (ativo = TRUE);

-- Doadores eternizados (público - apenas quem autorizou)
CREATE POLICY "Doadores eternizados são públicos"
  ON doadores FOR SELECT
  USING (eternizar_nome = TRUE);

-- Alertas ativos (público)
CREATE POLICY "Alertas ativos são públicos"
  ON alertas FOR SELECT
  USING (ativo = TRUE);

-- Instituições (público)
CREATE POLICY "Instituições são públicas"
  ON instituicoes_parceiras FOR SELECT
  USING (ativo = TRUE);
```

### Políticas de Escrita (apenas admin):

```sql
-- Doadores (qualquer um pode doar)
CREATE POLICY "Qualquer um pode criar doação"
  ON doadores FOR INSERT
  WITH CHECK (TRUE);

-- Admin pode visualizar todas as doações
CREATE POLICY "Admin pode ver todas doações"
  ON doadores FOR SELECT
  USING (auth.jwt() ->> 'role' = 'admin');

-- Admin pode fazer tudo (substituir auth.uid() pela lógica de admin)
CREATE POLICY "Admin acesso total voluntarios"
  ON voluntarios FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');
```

---

## 🔐 Autenticação

### Opção 1: Supabase Auth (RECOMENDADO)

```typescript
// Substituir localStorage por:
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email: "admin@fundacao.com",
  password: "senha",
});

// Verificar sessão
const {
  data: { session },
} = await supabase.auth.getSession();
```

### Criar usuário admin inicial:

```sql
-- Via Supabase Dashboard > Authentication > Users
-- Ou via SQL:
INSERT INTO auth.users (email, encrypted_password, email_confirmed_at)
VALUES ('admin@fundacaojoanna.org.br', crypt('senha_segura', gen_salt('bf')), NOW());
```

---

## 📦 Variáveis de Ambiente

Criar arquivo `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Admin (opcional)
ADMIN_EMAIL=admin@fundacaojoanna.org.br
```

Criar arquivo `.env.example` (versionado):

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

---

## 🔄 Migrations/Seeds

### Dados iniciais para teste:

```sql
-- Instituições Parceiras (para o carousel)
INSERT INTO instituicoes_parceiras (nome, logo_url, ordem) VALUES
  ('Prefeitura de Rio das Ostras', '/logos/prefeitura.png', 1),
  ('Governo do Estado RJ', '/logos/governo-rj.png', 2),
  ('Ministério da Cidadania', '/logos/ministerio.png', 3);

-- Voluntários exemplo
INSERT INTO voluntarios (nome_completo, funcao, foto_url, descricao) VALUES
  ('Maria Silva', 'Coordenadora', 'https://...', 'Coordena projetos educacionais'),
  ('João Santos', 'Voluntário', 'https://...', 'Atua na distribuição de alimentos');

-- Doadores exemplo
INSERT INTO doadores (nome_completo, cpf_cnpj, valor, metodo_pagamento, data_contribuicao, eternizar_nome) VALUES
  ('Maria Santos', '123.456.789-00', 100.00, 'pix', '2024-01-15', TRUE),
  ('José Oliveira', '987.654.321-00', 50.00, 'cartao', '2024-01-20', FALSE),
  ('Ana Costa LTDA', '12.345.678/0001-90', 500.00, 'pix', '2024-02-01', TRUE);
```

---

## 📝 Funções do Frontend que precisam ser substituídas

### Arquivo: `src/lib/mock-data.ts`

Todas as funções async precisam ser substituídas:

- `getVoluntarios()` → Query: `SELECT * FROM voluntarios WHERE ativo = TRUE`
- `getDoadoresEternizados()` → Query: `SELECT nome_completo FROM doadores WHERE eternizar_nome = TRUE ORDER BY data_contribuicao DESC`
- `getTodasDoacoes()` (Admin) → Query: `SELECT * FROM doadores ORDER BY data_contribuicao DESC`

### Arquivo: `src/app/(public)/doacao/page.tsx`

Linha 67 tem comentário:

```typescript
// TODO: Backend integration - Uncomment when ready
```

Substituir por:

```typescript
const { data, error } = await supabase.from("doadores").insert({
  nome_completo: formData.nome_completo,
  cpf_cnpj: formData.cpf_cnpj,
  valor: formData.valor,
  metodo_pagamento: formData.metodo_pagamento,
  eternizar_nome: formData.eternizar_nome || false,
});
```

### Admin Dashboard (todas as páginas em `src/components/admin/`)

Precisam ser substituídos os mock data por queries reais:

- `doacoes-manager.tsx` → Visualização de doações (tabela doadores)
- `voluntarios-manager.tsx` → CRUD de voluntários
- `alertas-manager.tsx` → CRUD de alertas (com validação de 1 ativo)
- `relatorios-doacoes.tsx` → Query com filtro de datas na tabela doadores

---

## 🎯 Próximos Passos

### Para você (Frontend):

1. ✅ Refatorar admin dashboard para usar rotas Next.js (em vez de SPA)
2. ✅ Deletar pasta `/colaboradores` (duplicada)
3. ✅ Criar `.env.example`
4. ✅ Mover interfaces TypeScript para `src/types/`

### Para o Backend Developer:

1. ⬜ Criar projeto no Supabase
2. ⬜ Criar tabelas usando SQL acima
3. ⬜ Configurar políticas RLS
4. ⬜ Criar usuário admin inicial
5. ⬜ Testar queries básicas
6. ⬜ Compartilhar variáveis de ambiente
7. ⬜ Criar função de integração em `src/lib/supabase/`

---

## 📞 Dúvidas?

Qualquer dúvida sobre a estrutura do frontend ou integração, consultar este documento ou o código em:

- Mock data: `src/lib/mock-data.ts`
- Componentes admin: `src/components/admin/`
- Páginas públicas: `src/app/(public)/`
