"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Download, Calendar } from "lucide-react";
import { toast } from "sonner";
import Logo from "@/components/logo";

// Mock data
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

export default function RelatoriosDoacoes() {
  const printRef = useRef<HTMLDivElement>(null);
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });
  const [filteredData, setFilteredData] = useState(mockDoacoes);

  const handleGenerateReport = () => {
    if (dateRange.start && dateRange.end) {
      const filtered = mockDoacoes.filter((doacao) => {
        const doacaoDate = new Date(doacao.created_at);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return doacaoDate >= startDate && doacaoDate <= endDate;
      });
      setFilteredData(filtered);
      toast.success(`Relatório gerado com ${filtered.length} doações`);
    } else {
      setFilteredData(mockDoacoes);
      toast.success("Relatório gerado com todas as doações");
    }
  };

  const handlePrint = () => {
    window.print();
  };

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

  const totalAmount = filteredData.reduce((acc, d) => acc + d.amount, 0);

  return (
    <>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-report,
          #printable-report * {
            visibility: visible;
          }
          #printable-report {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="space-y-6">
        {/* Header - No Print */}
        <div className="no-print">
          <h2 className="text-3xl font-bold tracking-tight">
            Relatórios de Doações
          </h2>
          <p className="text-muted-foreground">
            Gere relatórios detalhados e imprimíveis das doações
          </p>
        </div>

        {/* Filters - No Print */}
        <Card className="no-print">
          <CardHeader>
            <CardTitle>Filtros do Relatório</CardTitle>
            <CardDescription>
              Configure o período para gerar o relatório
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="start-date">Data Início</Label>
                <Input
                  id="start-date"
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, start: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="end-date">Data Fim</Label>
                <Input
                  id="end-date"
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, end: e.target.value })
                  }
                />
              </div>

              <div className="flex items-end">
                <Button onClick={handleGenerateReport} className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Gerar Relatório
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions - No Print */}
        <div className="flex gap-2 no-print">
          <Button onClick={handlePrint} variant="default">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir Relatório
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.info("Em desenvolvimento")}
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar PDF
          </Button>
        </div>

        {/* Printable Report */}
        <div ref={printRef} id="printable-report">
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-4">
                <Logo width={60} height={60} />
                <div>
                  <CardTitle className="text-2xl">Fundação Joanna</CardTitle>
                  <CardDescription className="text-base">
                    Relatório de Doações
                  </CardDescription>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Data de Geração
                  </p>
                  <p className="font-semibold">
                    {new Date().toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Período</p>
                  <p className="font-semibold">
                    {dateRange.start && dateRange.end
                      ? `${new Date(dateRange.start).toLocaleDateString(
                          "pt-BR"
                        )} - ${new Date(dateRange.end).toLocaleDateString(
                          "pt-BR"
                        )}`
                      : "Todas as doações"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total de Doações
                  </p>
                  <p className="font-semibold">{filteredData.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Valor Total Arrecadado
                  </p>
                  <p className="text-xl font-bold text-green-600">
                    {formatCurrency(totalAmount)}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left p-3 font-semibold">
                        Nome Completo
                      </th>
                      <th className="text-left p-3 font-semibold">CPF/CNPJ</th>
                      <th className="text-right p-3 font-semibold">Valor</th>
                      <th className="text-left p-3 font-semibold">Pagamento</th>
                      <th className="text-left p-3 font-semibold">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((doacao, index) => (
                      <tr
                        key={doacao.id}
                        className={`border-b ${
                          index % 2 === 0
                            ? "bg-gray-50 dark:bg-gray-800/50"
                            : ""
                        }`}
                      >
                        <td className="p-3">{doacao.donor_name}</td>
                        <td className="p-3 font-mono text-sm">
                          {doacao.cpf_cnpj}
                        </td>
                        <td className="p-3 text-right font-semibold text-green-600">
                          {formatCurrency(doacao.amount)}
                        </td>
                        <td className="p-3 text-sm">{doacao.payment_method}</td>
                        <td className="p-3 text-sm">
                          {formatDate(doacao.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 font-bold">
                      <td colSpan={2} className="p-3 text-right">
                        TOTAL GERAL:
                      </td>
                      <td className="p-3 text-right text-xl text-green-600">
                        {formatCurrency(totalAmount)}
                      </td>
                      <td colSpan={2}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="mt-8 pt-4 border-t text-sm text-muted-foreground">
                <p>
                  Fundação Joanna - R. Vassouras, Lote 20 - Quadra 16 - Jardim
                  Mariléa, Rio das Ostras - RJ, 28890-000
                </p>
                <p>
                  Este relatório foi gerado automaticamente pelo sistema
                  administrativo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
