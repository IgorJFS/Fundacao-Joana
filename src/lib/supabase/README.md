# Supabase Integration

Estrutura de integração do Supabase com Next.js 15 para o projeto Fundação Joanna.

## 📁 Estrutura

```
src/lib/supabase/
├── client.ts     # Cliente para uso em Client Components
├── server.ts     # Cliente para uso em Server Components
├── types.ts      # Tipos TypeScript do banco de dados
└── README.md     # Este arquivo
```

## 🚀 Como Usar

### 1. Client Components (uso no navegador)

Para componentes com `"use client"` que precisam fazer queries no navegador:

```tsx
"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function MeuComponente() {
  const [dados, setDados] = useState([]);
  const supabase = createClient();

  useEffect(() => {
    async function carregarDados() {
      const { data } = await supabase.from("minhaTabela").select("*");
      setDados(data || []);
    }
    carregarDados();
  }, []);

  return <div>{/* Renderizar dados */}</div>;
}
```

### 2. Server Components (uso no servidor)

Para componentes sem `"use client"` (padrão no Next.js 15):

```tsx
import { createClient } from "@/lib/supabase/server";

export default async function MinhaPagina() {
  const supabase = await createClient();

  const { data: dados } = await supabase.from("minhaTabela").select("*");

  return (
    <div>
      {dados?.map((item) => (
        <div key={item.id}>{item.nome}</div>
      ))}
    </div>
  );
}
```

### 3. Server Actions

Para ações do servidor (create, update, delete):

```tsx
"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function criarDoacao(formData: FormData) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("doacoes").insert({
    valor: Number(formData.get("valor")),
    nome_doador: formData.get("nome"),
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/doacoes");
  return data;
}
```

### 4. Route Handlers (API Routes)

Para criar APIs personalizadas:

```tsx
// app/api/doacoes/route.ts
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data } = await supabase.from("doacoes").select("*");

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const body = await request.json();

  const { data } = await supabase.from("doacoes").insert(body);

  return NextResponse.json(data);
}
```

## 🔧 Gerar Tipos do Banco

Após criar suas tabelas no Supabase, gere os tipos TypeScript automaticamente:

```bash
npx supabase gen types typescript --project-id vljcamajcgvjrdklvutj > src/lib/supabase/types.ts
```

Isso substituirá o arquivo `types.ts` com os tipos reais do seu banco de dados.

## 🔐 Variáveis de Ambiente

As seguintes variáveis estão configuradas no `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://vljcamajcgvjrdklvutj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
```

## 📚 Recursos

- [Documentação Supabase](https://supabase.com/docs)
- [Supabase com Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)

## 🎯 Próximos Passos

1. Criar as tabelas no Supabase Dashboard
2. Gerar os tipos TypeScript
3. Implementar autenticação (se necessário)
4. Criar queries e mutations
