"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/admin/dashboard-layout";
import DashboardOverview from "@/components/admin/dashboard-overview";
import EmDesenvolvimento from "@/components/admin/em-desenvolvimento";
import AlertasManager from "@/components/admin/alertas-manager";
import { toast } from "sonner";

type MenuItem =
  | "overview"
  | "doacoes"
  | "voluntarios"
  | "relatorios"
  | "alertas";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState<MenuItem>("overview");

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

  const renderContent = () => {
    switch (activeMenu) {
      case "overview":
        return <DashboardOverview onNavigate={setActiveMenu} />;
      case "doacoes":
        return <EmDesenvolvimento />;
      case "voluntarios":
        return <EmDesenvolvimento />;
      case "relatorios":
        return <EmDesenvolvimento />;
      case "alertas":
        return <AlertasManager />;
      default:
        return <DashboardOverview onNavigate={setActiveMenu} />;
    }
  };

  return (
    <DashboardLayout activeMenu={activeMenu} onMenuChange={setActiveMenu}>
      {renderContent()}
    </DashboardLayout>
  );
}
