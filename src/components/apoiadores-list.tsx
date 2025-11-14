"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Apoiador {
  id: string;
  nome_completo: string;
}

interface ApoiadoresListProps {
  apoiadores: Apoiador[];
}

export function ApoiadoresList({ apoiadores }: ApoiadoresListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Limites: 10 no mobile, 15 no desktop
  const limiteMobile = 10;
  const limiteDesktop = 15;

  // Determinar quantos mostrar baseado no tamanho da tela
  // No servidor, começamos com o limite mobile como padrão
  const apoiadoresVisiveis = isExpanded
    ? apoiadores
    : apoiadores.slice(0, limiteDesktop);

  const temMaisMobile = apoiadores.length > limiteMobile;
  const temMaisDesktop = apoiadores.length > limiteDesktop;

  return (
    <>
      {/* Botão Flutuante - Mostrar apenas quando expandido */}
      {isExpanded && (
        <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4">
          <Button
            onClick={() => {
              setIsExpanded(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            size="lg"
            className="rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-primary hover:bg-primary/90"
          >
            <ChevronUp className="w-5 h-5 mr-2" />
            Recolher Lista
          </Button>
        </div>
      )}

      <Card className="border-2 bg-card shadow-medium">
        <CardContent className="p-8 md:p-12">
          {/* Grid: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Mobile: mostra até limiteMobile se não expandido */}
            {apoiadores
              .slice(0, isExpanded ? apoiadores.length : limiteMobile)
              .map((apoiador) => (
                <div key={apoiador.id} className="group relative lg:hidden">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold shadow-soft">
                      {apoiador.nome_completo.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {apoiador.nome_completo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            {/* Desktop: mostra até limiteDesktop se não expandido */}
            {apoiadoresVisiveis.map((apoiador) => (
              <div
                key={`desktop-${apoiador.id}`}
                className="group relative hidden lg:block"
              >
                <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold shadow-soft">
                    {apoiador.nome_completo.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {apoiador.nome_completo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Expandir/Recolher - Mobile */}
          {temMaisMobile && (
            <div className="mt-6 flex justify-center lg:hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Mostrar Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Ver Todos ({apoiadores.length})
                  </>
                )}
              </button>
            </div>
          )}

          {/* Botão Expandir/Recolher - Desktop */}
          {temMaisDesktop && (
            <div className="mt-8 justify-center hidden lg:flex">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-200 hover:scale-105"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    Mostrar Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    Ver Todos ({apoiadores.length} apoiadores)
                  </>
                )}
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
