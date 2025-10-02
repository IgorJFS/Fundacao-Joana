import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Cliente Supabase para uso em Server Components e Server Actions
 *
 * Use este cliente quando:
 * - Estiver em um Server Component (sem "use client")
 * - Estiver em uma Server Action
 * - Estiver em Route Handlers (app/api/...)
 * - Precisar de autenticação no servidor
 *
 * Exemplo em Server Component:
 * ```tsx
 * import { createClient } from "@/lib/supabase/server";
 *
 * export default async function Page() {
 *   const supabase = await createClient();
 *   const { data } = await supabase.from('tabela').select('*');
 *   return <div>{data}</div>;
 * }
 * ```
 *
 * Exemplo em Server Action:
 * ```tsx
 * "use server";
 * import { createClient } from "@/lib/supabase/server";
 *
 * export async function minhaAction() {
 *   const supabase = await createClient();
 *   const { data } = await supabase.from('tabela').insert({ ... });
 * }
 * ```
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Isso pode falhar em Server Components
            // Se falhar, ignore - o cookie será setado no próximo request
          }
        },
      },
    }
  );
}
