"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { toast } from "sonner";
import {
  LayoutDashboard,
  Heart,
  Users,
  FileText,
  AlertCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

type MenuItem =
  | "overview"
  | "doacoes"
  | "voluntarios"
  | "relatorios"
  | "alertas";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeMenu: MenuItem;
  onMenuChange: (menu: MenuItem) => void;
}

const menuItems = [
  { id: "overview" as MenuItem, label: "Visão Geral", icon: LayoutDashboard },
  { id: "doacoes" as MenuItem, label: "Doações", icon: Heart },
  { id: "voluntarios" as MenuItem, label: "Voluntários", icon: Users },
  { id: "relatorios" as MenuItem, label: "Relatórios", icon: FileText },
  { id: "alertas" as MenuItem, label: "Alertas Urgentes", icon: AlertCircle },
];

export default function DashboardLayout({
  children,
  activeMenu,
  onMenuChange,
}: DashboardLayoutProps) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    toast.success("Logout realizado com sucesso!");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </Button>
            <Logo width={40} height={40} />
            <div>
              <h1 className="text-lg font-bold">Painel Administrativo</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Fundação Joanna
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Sair</span>
          </Button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-lg
            transform transition-transform duration-200 ease-in-out
            lg:min-h-[calc(100vh-57px)]
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            mt-[57px] lg:mt-0
          `}
        >
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onMenuChange(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-150
                    ${
                      isActive
                        ? "bg-gradient-hero text-white shadow-medium"
                        : "hover:bg-primary/10 text-gray-700"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Overlay para mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
