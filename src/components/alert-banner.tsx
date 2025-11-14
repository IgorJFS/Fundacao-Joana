"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Alerta {
  id: string;
  titulo: string;
  mensagem: string;
  tipo: "urgente" | "info";
  ativo: boolean;
  data_criacao: string;
}

export default function AlertBanner() {
  const [alerta, setAlerta] = useState<Alerta | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ler alertas do localStorage
    const alertasStr = localStorage.getItem("alertas");
    if (!alertasStr) return;

    try {
      const alertas: Alerta[] = JSON.parse(alertasStr);

      // Pegar apenas o primeiro alerta ativo
      const alertaAtivo = alertas.find((a) => a.ativo);
      if (!alertaAtivo) return;

      // Verificar se o usuário já fechou este alerta
      const alertasFechados = localStorage.getItem("alertas_fechados");
      if (alertasFechados) {
        const fechados: string[] = JSON.parse(alertasFechados);
        if (fechados.includes(alertaAtivo.id)) return;
      }

      setAlerta(alertaAtivo);
      setIsVisible(true);
    } catch (error) {
      console.error("Erro ao ler alertas:", error);
    }
  }, []);

  const handleClose = () => {
    if (!alerta) return;

    // Salvar que o usuário fechou este alerta
    const alertasFechados = localStorage.getItem("alertas_fechados");
    const fechados: string[] = alertasFechados
      ? JSON.parse(alertasFechados)
      : [];

    if (!fechados.includes(alerta.id)) {
      fechados.push(alerta.id);
      localStorage.setItem("alertas_fechados", JSON.stringify(fechados));
    }

    setIsVisible(false);
  };

  if (!isVisible || !alerta) return null;

  const bgColor =
    alerta.tipo === "urgente"
      ? "bg-red-50 border-red-200"
      : "bg-primary/5 border-primary/20";

  const textColor =
    alerta.tipo === "urgente" ? "text-red-900" : "text-primary";

  const iconColor =
    alerta.tipo === "urgente" ? "text-red-600" : "text-primary";

  return (
    <div
      className={`sticky top-16 z-40 ${bgColor} border-b-2 py-3 px-4 animate-in slide-in-from-top duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex items-start gap-3">
          {alerta.tipo === "urgente" ? (
            <AlertCircle
              className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconColor}`}
            />
          ) : (
            <Info className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconColor}`} />
          )}

          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-sm md:text-base ${textColor}`}>
              {alerta.titulo}
            </h3>
            <p className={`text-xs md:text-sm ${textColor} opacity-90 mt-1`}>
              {alerta.mensagem}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className={`flex-shrink-0 h-8 w-8 ${textColor} hover:bg-black/10`}
            aria-label="Fechar alerta"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
