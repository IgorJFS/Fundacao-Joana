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
  tipo: "pessoa_fisica" | "empresa";
  logo_url?: string;
  valor_contribuicao?: number;
  data_inicio: string;
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

export interface InstituicaoParceira {
  id: string;
  nome: string;
  logo_url: string;
}

// Fotos genéricas do Unsplash (gratuitas)
const FOTO_GENERICA_MASCULINO =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
const FOTO_GENERICA_FEMININO =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop";
const FOTO_GENERICA_2 =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop";
const FOTO_GENERICA_3 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop";
const FOTO_GENERICA_4 =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop";
const FOTO_GENERICA_5 =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop";

// Mock de Voluntários
export const voluntariosMock: Voluntario[] = [
  {
    id: "1",
    nome_completo: "Ana Paula Silva",
    funcao: "Coordenadora de Voluntários",
    foto_url: FOTO_GENERICA_FEMININO,
    data_entrada: "2020-03-15",
    descricao:
      "Responsável por organizar e coordenar as atividades dos voluntários, além de fazer a ponte entre a ONG e a comunidade.",
  },
  {
    id: "2",
    nome_completo: "Carlos Eduardo Santos",
    funcao: "Instrutor de Informática",
    foto_url: FOTO_GENERICA_MASCULINO,
    data_entrada: "2021-06-20",
    descricao:
      "Ministra aulas de informática básica para crianças e adolescentes da comunidade.",
  },
  {
    id: "3",
    nome_completo: "Mariana Costa",
    funcao: "Psicóloga Voluntária",
    foto_url: FOTO_GENERICA_3,
    data_entrada: "2019-08-10",
    descricao:
      "Oferece atendimento psicológico gratuito para famílias em situação de vulnerabilidade.",
  },
  {
    id: "4",
    nome_completo: "Roberto Oliveira",
    funcao: "Responsável pela Distribuição de Alimentos",
    foto_url: FOTO_GENERICA_2,
    data_entrada: "2022-01-05",
    descricao:
      "Organiza a logística de recebimento e distribuição de cestas básicas.",
  },
  {
    id: "5",
    nome_completo: "Juliana Ferreira",
    funcao: "Professora de Reforço Escolar",
    foto_url: FOTO_GENERICA_5,
    data_entrada: "2020-09-12",
    descricao:
      "Auxilia crianças com dificuldades escolares através de aulas de reforço.",
  },
  {
    id: "6",
    nome_completo: "Pedro Henrique Lima",
    funcao: "Coordenador de Eventos",
    foto_url: FOTO_GENERICA_4,
    data_entrada: "2021-11-03",
    descricao:
      "Planeja e executa eventos para arrecadação de fundos e conscientização.",
  },
  {
    id: "7",
    nome_completo: "Fernanda Almeida",
    funcao: "Assistente Social",
    foto_url: FOTO_GENERICA_3,
    data_entrada: "2018-05-22",
    descricao:
      "Realiza visitas domiciliares e auxilia famílias em situação de vulnerabilidade.",
  },
  {
    id: "8",
    nome_completo: "Lucas Rodrigues",
    funcao: "Instrutor de Esportes",
    foto_url: FOTO_GENERICA_MASCULINO,
    data_entrada: "2022-03-18",
    descricao:
      "Ministra aulas de futebol e outros esportes para crianças e adolescentes.",
  },
];

// Mock de Colaboradores
export const colaboradoresMock: Colaborador[] = [
  {
    id: "1",
    nome_completo: "Maria Souza",
    tipo: "pessoa_fisica",
    valor_contribuicao: 100,
    data_inicio: "2020-01-10",
  },
  {
    id: "2",
    nome_completo: "João Carlos Mendes",
    tipo: "pessoa_fisica",
    valor_contribuicao: 50,
    data_inicio: "2021-03-15",
  },
  {
    id: "3",
    nome_completo: "Empresa Tech Solutions Ltda",
    tipo: "empresa",
    logo_url: "https://via.placeholder.com/200x100?text=Tech+Solutions",
    valor_contribuicao: 1000,
    data_inicio: "2019-06-01",
  },
  {
    id: "4",
    nome_completo: "Patricia Lima",
    tipo: "pessoa_fisica",
    valor_contribuicao: 75,
    data_inicio: "2022-02-20",
  },
  {
    id: "5",
    nome_completo: "Supermercado Bom Preço",
    tipo: "empresa",
    logo_url: "https://via.placeholder.com/200x100?text=Bom+Preço",
    valor_contribuicao: 500,
    data_inicio: "2020-09-12",
  },
  {
    id: "6",
    nome_completo: "Ricardo Alves",
    tipo: "pessoa_fisica",
    valor_contribuicao: 150,
    data_inicio: "2021-07-08",
  },
  {
    id: "7",
    nome_completo: "Farmácia Saúde & Vida",
    tipo: "empresa",
    logo_url: "https://via.placeholder.com/200x100?text=Saúde+e+Vida",
    valor_contribuicao: 300,
    data_inicio: "2022-01-15",
  },
  {
    id: "8",
    nome_completo: "Camila Rodrigues",
    tipo: "pessoa_fisica",
    valor_contribuicao: 200,
    data_inicio: "2020-11-22",
  },
  {
    id: "9",
    nome_completo: "Construtora Horizonte",
    tipo: "empresa",
    logo_url: "https://via.placeholder.com/200x100?text=Horizonte",
    valor_contribuicao: 2000,
    data_inicio: "2019-04-10",
  },
  {
    id: "10",
    nome_completo: "André Santos",
    tipo: "pessoa_fisica",
    valor_contribuicao: 80,
    data_inicio: "2021-12-05",
  },
  {
    id: "11",
    nome_completo: "Gabriela Ferreira",
    tipo: "pessoa_fisica",
    valor_contribuicao: 120,
    data_inicio: "2022-05-18",
  },
  {
    id: "12",
    nome_completo: "Padaria Pão Quentinho",
    tipo: "empresa",
    logo_url: "https://via.placeholder.com/200x100?text=Pão+Quentinho",
    valor_contribuicao: 250,
    data_inicio: "2021-08-30",
  },
];

// Mock de Doações (histórico)
export const doacoesMock: Doacao[] = [
  {
    id: "1",
    nome_doador: "Anônimo",
    valor: 50,
    data: "2025-09-28",
    status: "confirmado",
  },
  {
    id: "2",
    nome_doador: "Maria Silva",
    email: "maria@email.com",
    valor: 100,
    mensagem: "Que Deus abençoe o trabalho de vocês!",
    data: "2025-09-27",
    status: "confirmado",
  },
  {
    id: "3",
    nome_doador: "José Carlos",
    valor: 200,
    data: "2025-09-25",
    status: "confirmado",
  },
  {
    id: "4",
    nome_doador: "Ana Paula",
    email: "ana@email.com",
    valor: 75,
    mensagem: "Continuem com esse lindo trabalho!",
    data: "2025-09-24",
    status: "confirmado",
  },
];

// Mock de Instituições Parceiras
export const instituicoesParceirasMock: InstituicaoParceira[] = [
  {
    id: "1",
    nome: "Governo Federal",
    logo_url:
      "https://via.placeholder.com/200x80/003366/FFFFFF?text=Governo+Federal",
  },
  {
    id: "2",
    nome: "Governo do Estado do Rio de Janeiro",
    logo_url:
      "https://via.placeholder.com/200x80/1E3A8A/FFFFFF?text=Governo+RJ",
  },
  {
    id: "3",
    nome: "Ministério Público",
    logo_url:
      "https://via.placeholder.com/200x80/7C3AED/FFFFFF?text=Ministério+Público",
  },
];

/**
 * Funções helper para simular async (como se fosse chamada ao banco)
 */

export async function getVoluntarios(): Promise<Voluntario[]> {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 500));
  return voluntariosMock;
}

export async function getColaboradores(): Promise<Colaborador[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return colaboradoresMock;
}

export async function getDoacoes(): Promise<Doacao[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return doacoesMock;
}

export async function getVoluntarioById(
  id: string
): Promise<Voluntario | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return voluntariosMock.find((v) => v.id === id) || null;
}

export async function getColaboradorById(
  id: string
): Promise<Colaborador | null> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return colaboradoresMock.find((c) => c.id === id) || null;
}

export async function getInstituicoesParceiras(): Promise<
  InstituicaoParceira[]
> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return instituicoesParceirasMock;
}
