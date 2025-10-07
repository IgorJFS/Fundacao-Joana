"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye } from "lucide-react";

// Mock data - futuramente virá do Supabase
const mockDoacoes = [
  {
    id: "1",
    donor_name: "Maria Silva Santos",
    cpf_cnpj: "123.456.789-00",
    amount: 500.0,
    payment_method: "PIX",
    created_at: "2025-10-03T14:32:00",
  },
  {
    id: "2",
    donor_name: "João Carlos Oliveira",
    cpf_cnpj: "987.654.321-00",
    amount: 250.0,
    payment_method: "PIX",
    created_at: "2025-10-03T12:15:00",
  },
  {
    id: "3",
    donor_name: "Ana Paula Costa",
    cpf_cnpj: "456.789.123-00",
    amount: 1000.0,
    payment_method: "Cartão",
    created_at: "2025-10-02T18:45:00",
  },
  {
    id: "4",
    donor_name: "Pedro Henrique Lima",
    cpf_cnpj: "321.654.987-00",
    amount: 150.0,
    payment_method: "PIX",
    created_at: "2025-10-02T15:20:00",
  },
  {
    id: "5",
    donor_name: "Empresa Tech Solutions LTDA",
    cpf_cnpj: "12.345.678/0001-90",
    amount: 5000.0,
    payment_method: "Transferência",
    created_at: "2025-10-01T10:00:00",
  },
];

export default function DoacoesManager() {
  const [doacoes, setDoacoes] = useState<typeof mockDoacoes>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDonation, setSelectedDonation] = useState<
    (typeof mockDoacoes)[0] | null
  >(null);

  // Carregar doações do localStorage
  useEffect(() => {
    const doacoesStr = localStorage.getItem("doacoes");
    if (doacoesStr) {
      try {
        const doacoesLocal = JSON.parse(doacoesStr);
        // Combinar doações do localStorage com mock data
        setDoacoes([...doacoesLocal, ...mockDoacoes]);
      } catch (error) {
        console.error("Erro ao carregar doações:", error);
        setDoacoes(mockDoacoes);
      }
    } else {
      setDoacoes(mockDoacoes);
    }
  }, []);

  const filteredDoacoes = doacoes.filter(
    (doacao) =>
      doacao.donor_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doacao.cpf_cnpj.includes(searchTerm)
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Gestão de Doações</h2>
        <p className="text-muted-foreground">
          Visualize e gerencie todas as doações recebidas
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Total Arrecadado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {formatCurrency(
                mockDoacoes.reduce((acc, d) => acc + d.amount, 0)
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Total de Doações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {mockDoacoes.length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>Todas as Doações</CardTitle>
              <CardDescription>
                {filteredDoacoes.length} doações encontradas
              </CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome ou CPF/CNPJ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredDoacoes.map((doacao) => (
              <div
                key={doacao.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border hover:bg-gray-200  transition-colors"
              >
                <div className="flex-1 space-y-1">
                  <p className="font-semibold">{doacao.donor_name}</p>
                  <p className="text-sm text-muted-foreground">
                    CPF/CNPJ: {doacao.cpf_cnpj} • {doacao.payment_method}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(doacao.created_at)}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">
                      {formatCurrency(doacao.amount)}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedDonation(doacao)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal de Detalhes (simplificado) */}
      {selectedDonation && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDonation(null)}
        >
          <Card
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <CardTitle>Detalhes da Doação</CardTitle>
              <CardDescription>ID: {selectedDonation.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Doador
                </p>
                <p className="text-lg font-semibold">
                  {selectedDonation.donor_name}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  CPF/CNPJ
                </p>
                <p className="font-mono">{selectedDonation.cpf_cnpj}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Valor
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(selectedDonation.amount)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Método de Pagamento
                </p>
                <p>{selectedDonation.payment_method}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Data
                </p>
                <p>{formatDate(selectedDonation.created_at)}</p>
              </div>
              <Button
                onClick={() => setSelectedDonation(null)}
                className="w-full mt-4"
              >
                Fechar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
