"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, TrendingUp, AlertCircle } from "lucide-react";

interface DashboardOverviewProps {
  onNavigate?: (page: "relatorios" | "alertas") => void;
}

export default function DashboardOverview({
  onNavigate,
}: DashboardOverviewProps) {
  // Dados mockados - futuramente virão do banco
  const stats = [
    {
      title: "Doações Recebidas",
      value: "R$ 45.280,00",
      icon: Heart,
      color: "text-white",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      iconBg: "bg-white/20",
    },
    {
      title: "Voluntários Ativos",
      value: "127",
      icon: Users,
      color: "text-white",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      iconBg: "bg-white/20",
    },
    {
      title: "Doações Este Mês",
      value: "89",
      icon: TrendingUp,
      color: "text-white",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600",
      iconBg: "bg-white/20",
    },
    {
      title: "Alertas Ativos",
      value: "2",
      icon: AlertCircle,
      color: "text-white",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
      iconBg: "bg-white/20",
    },
  ];

  const recentDonations = [
    { name: "Maria Silva", value: "R$ 500,00", date: "Hoje, 14:32" },
    { name: "João Santos", value: "R$ 250,00", date: "Hoje, 12:15" },
    { name: "Ana Costa", value: "R$ 1.000,00", date: "Ontem, 18:45" },
    { name: "Pedro Oliveira", value: "R$ 150,00", date: "Ontem, 15:20" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Visão Geral</h2>
        <p className="text-muted-foreground">
          Resumo das principais métricas da fundação
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className={`${stat.bgColor} border-0 shadow-lg`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${stat.color}`}>
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${stat.iconBg}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Donations */}
      <Card>
        <CardHeader>
          <CardTitle>Doações Recentes</CardTitle>
          <CardDescription>
            Últimas doações recebidas pela fundação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDonations.map((donation, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border-1 rounded-lg hover:bg-gray-200  transition-colors"
              >
                <div>
                  <p className="font-medium">{donation.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {donation.date}
                  </p>
                </div>
                <div className="text-lg font-semibold text-green-600">
                  {donation.value}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          className="hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-0 bg-gradient-to-br from-indigo-50 to-purple-50"
          onClick={() => onNavigate?.("relatorios")}
        >
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">📊</span> Gerar Relatório
            </CardTitle>
            <CardDescription className="text-indigo-600">
              Crie relatórios detalhados de doações
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-0 bg-gradient-to-br from-rose-50 to-orange-50"
          onClick={() => onNavigate?.("alertas")}
        >
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="text-2xl">🚨</span> Criar Alerta
            </CardTitle>
            <CardDescription className="text-rose-600">
              Publique um alerta de doação urgente
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
