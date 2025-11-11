/**
 * Dados mockados para desenvolvimento
 * Use estes dados enquanto trabalha no front-end
 * Depois substitua pelas queries reais do Supabase
 */

export interface Voluntario {
  id: string;
  nome_completo: string;
  funcao: string;
  foto_url: string;
  data_entrada: string;
  descricao?: string;
}

export interface Colaborador {
  id: string;
  nome_completo: string;
}

export interface Doacao {
  id: string;
  nome_doador: string;
  email?: string;
  valor: number;
  mensagem?: string;
  data: string;
  status: "pendente" | "confirmado" | "cancelado";
}

// Retorna apenas doadores que optaram por eternizar o nome
export async function getDoadoresEternizados(): Promise<Colaborador[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  // Importa os colaboradores do arquivo JSON
  const colaboradoresData = await import('./colaboradores.json');
  const colaboradores = colaboradoresData.default as Colaborador[];
  
  // Filtra apenas os que têm eternizar_nome = true
  // Por enquanto retorna todos do mock (na integração real, filtrar no Supabase)
  return colaboradores;
}



