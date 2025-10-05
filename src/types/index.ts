/**
 * Tipos TypeScript para o projeto Fundação Joanna
 * Mantenha estes tipos sincronizados com o schema do Supabase
 */

export interface Voluntario {
  id: string;
  nome_completo: string;
  funcao: string;
  data_entrada: string;
  ativo?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Doador {
  id: string;
  nome_completo: string;
  cpf_cnpj: string;
  valor: number;
  metodo_pagamento: "pix" | "cartao";
  data_contribuicao: string;
  eternizar_nome?: boolean; // Se quer aparecer no site público
  created_at?: string;
}

export interface Alerta {
  id: string;
  titulo: string;
  tipo: "urgente" | "info";
  mensagem: string;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  nome?: string;
}

// Tipos para formulários
export interface DoacaoFormData {
  nome_completo: string;
  cpf_cnpj: string;
  valor: number;
  metodo_pagamento: "pix" | "cartao";
  eternizar_nome?: boolean; // Checkbox: "Quero que meu nome apareça no site"
}

export interface AlertaFormData {
  titulo: string;
  tipo: "urgente" | "info";
  mensagem: string;
  ativo: boolean;
}
