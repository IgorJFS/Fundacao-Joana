/**
 * Tipos do banco de dados Supabase
 *
 * Este arquivo deve ser gerado automaticamente usando o CLI do Supabase:
 *
 * npx supabase gen types typescript --project-id vljcamajcgvjrdklvutj > src/lib/supabase/types.ts
 *
 * Por enquanto, vamos usar tipos genéricos. Quando você criar as tabelas no Supabase,
 * rode o comando acima para gerar os tipos automaticamente.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// Tipos auxiliares para usar com Supabase
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Inserts<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
export type Updates<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
