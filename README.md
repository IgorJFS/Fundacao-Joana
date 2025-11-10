# ❤️ Fundação Joanna - Website Oficial

Website institucional da Fundação Joanna de Ângelis, uma ONG brasileira localizada em Rio das Ostras - RJ.

---

## 📋 Sobre o Projeto

Este é o frontend completo do site da Fundação Joanna, desenvolvido com:

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Radix UI** (componentes)
- **Supabase** (backend - em integração)

---

## 🎨 Páginas Implementadas

### Páginas Públicas:

- ✅ **Home** (`/`) - Hero, estatísticas, conquistas, localização
- ✅ **Nossa História** (`/nossahistoria`) - História e valores da fundação
- ✅ **Doação** (`/doacao`) - Formulário de doação com validação
- ✅ **Voluntários** (`/voluntarios`) - Lista de voluntários ativos
- ✅ **Apoiadores** (`/apoiadores`) - Lista de apoiadores mensais

### Área Administrativa:

- ✅ **Login** (`/admin/login`) - Autenticação (temporária com localStorage)
- ✅ **Dashboard** (`/admin/dashboard`) - Overview com estatísticas
- ✅ **Gestão de Doações** - CRUD completo
- ✅ **Gestão de Voluntários** - CRUD completo
- ✅ **Relatórios** - Gerador de relatórios PDF
- ✅ **Alertas** - Sistema de alertas no site (máx 1 ativo)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos:

- Node.js 18+
- PNPM (gerenciador de pacotes)

### Instalação:

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Rodar produção
pnpm start
```

O site estará disponível em: **http://localhost:3000**

---

## 🔧 Configuração do Backend

**⚠️ O backend ainda não está integrado!**

O projeto usa dados mockados em `src/lib/mock-data.ts` para desenvolvimento.

Para integrar com Supabase, consulte: **[BACKEND-TODO.md](./BACKEND-TODO.md)**

### Variáveis de Ambiente:

Copie `.env.example` para `.env.local` e preencha:

```env
NEXT_PUBLIC_SUPABASE_URL=sua-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave
```

---

## 📝 TODOs Pendentes

### Alta Prioridade:

- [ ] **Refatorar Dashboard Admin** - Converter de SPA (estado) para rotas Next.js
- [ ] **Integrar Supabase** - Substituir mock data por queries reais
- [ ] **Autenticação Real** - Implementar Supabase Auth no admin
- [ ] **Deletar pasta duplicada** - Remover `/colaboradores` (agora é `/apoiadores`)

### Média Prioridade:

- [ ] Upload de imagens (voluntários, logos)
- [ ] Sistema de busca/filtros mais avançado
- [ ] Paginação nas listas
- [ ] Validação de CPF/CNPJ real
- [ ] Integração com gateway de pagamento

---

## 📞 Informações da Fundação

**Endereço**:  
R. Vassouras, Lote 20 - Quadra 16  
Jardim Mariléa, Rio das Ostras - RJ  
CEP: 28890-000

**Contato**:  
📧 Email: funjodangelis@yahoo.com.br  
📱 WhatsApp: (22) 91234-5678

**Informações Legais**:  
🏢 CNPJ: 06.261.897/0001-93  
📅 Ano de Fundação: 2004

---

## 🤝 Contribuindo

Para contribuir:

1. Clone o repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

© 2025 Fundação Joanna de Ângelis. Todos os direitos reservados.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
