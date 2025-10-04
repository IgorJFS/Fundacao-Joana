"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Lock } from "lucide-react";
import Logo from "@/components/logo";

export default function AdminLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula delay de autenticação
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Credenciais de teste: 123 / 123
    if (credentials.username === "123" && credentials.password === "123") {
      // Salva token simples no localStorage
      localStorage.setItem("admin_token", "authenticated");
      toast.success("Login realizado com sucesso!");
      router.push("/admin/dashboard");
    } else {
      toast.error("Credenciais inválidas. Tente: 123 / 123");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <Logo width={80} height={80} />
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl">Painel Administrativo</CardTitle>
            <CardDescription>
              Faça login para acessar o painel de controle
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90"
              disabled={isLoading}
            >
              {isLoading ? (
                "Entrando..."
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Entrar
                </>
              )}
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                💡 Dica: Use <strong>123</strong> / <strong>123</strong> para
                testes
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
