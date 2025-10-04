"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogOut, Shield } from "lucide-react";
import Logo from "@/components/logo";
import { toast } from "sonner";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se está autenticado
    const token = localStorage.getItem("admin_token");

    if (token === "authenticated") {
      setIsAuthenticated(true);
    } else {
      toast.error("Você precisa fazer login primeiro!");
      router.push("/admin/login");
    }

    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    toast.success("Logout realizado com sucesso!");
    router.push("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verificando autenticação...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirecionando...
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header Admin */}
      <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo width={40} height={40} />
              <div>
                <h1 className="text-xl font-bold">Painel Administrativo</h1>
                <p className="text-sm text-muted-foreground">Fundação Joanna</p>
              </div>
            </div>

            <Button
              variant="outline"
              onClick={handleLogout}
              className="hover:bg-destructive hover:text-destructive-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Card */}
          <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">
                    Bem-vindo ao Painel Admin! 🎉
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Sou a página admin - Sistema em desenvolvimento
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    Status do Sistema
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Você está autenticado e com acesso ao painel administrativo.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-blue-500">ℹ️</span>
                    Próximos Passos
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Gestão de Doações</li>
                    <li>Gerenciamento de Voluntários</li>
                    <li>Cadastro de Colaboradores</li>
                    <li>Relatórios e Estatísticas</li>
                    <li>Configurações da ONG</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-yellow-500">🔑</span>
                    Credenciais de Teste
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Usuário:{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      123
                    </code>
                    {" | "}
                    Senha:{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      123
                    </code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Em Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">🚧</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Funcionalidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">Em Breve</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500">
                  ✅ Ativo
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
