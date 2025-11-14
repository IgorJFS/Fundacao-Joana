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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Plus, Edit, Trash2, X, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

interface Alerta {
  id: string;
  titulo: string;
  mensagem: string;
  tipo: "urgente" | "info";
  ativo: boolean;
  data_criacao: string;
}

const mockAlertas: Alerta[] = [
  {
    id: "1",
    titulo: "Doações de Alimentos Urgentes",
    mensagem:
      "Estamos precisando de doações de alimentos não perecíveis para atender 50 famílias neste mês.",
    tipo: "urgente",
    ativo: true,
    data_criacao: "2025-10-01",
  },
  {
    id: "2",
    titulo: "Aceitamos Voluntários",
    mensagem:
      "Estamos com vagas abertas para voluntários em diversas áreas. Venha fazer parte da nossa equipe!",
    tipo: "info",
    ativo: false,
    data_criacao: "2025-09-28",
  },
];

export default function AlertasManager() {
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  // Carregar alertas do localStorage ao montar
  useEffect(() => {
    const alertasStr = localStorage.getItem("alertas");
    if (alertasStr) {
      try {
        setAlertas(JSON.parse(alertasStr));
      } catch (error) {
        console.error("Erro ao carregar alertas:", error);
        setAlertas(mockAlertas);
        localStorage.setItem("alertas", JSON.stringify(mockAlertas));
      }
    } else {
      // Inicializar com dados mock na primeira vez
      setAlertas(mockAlertas);
      localStorage.setItem("alertas", JSON.stringify(mockAlertas));
    }
  }, []);

  // Salvar no localStorage sempre que alertas mudar
  const salvarAlertas = (novosAlertas: Alerta[]) => {
    setAlertas(novosAlertas);
    localStorage.setItem("alertas", JSON.stringify(novosAlertas));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAlerta, setEditingAlerta] = useState<Alerta | null>(null);
  const [formData, setFormData] = useState({
    titulo: "",
    mensagem: "",
    tipo: "urgente" as "urgente" | "info",
  });

  const handleOpenModal = (alerta?: Alerta) => {
    if (alerta) {
      setEditingAlerta(alerta);
      setFormData({
        titulo: alerta.titulo,
        mensagem: alerta.mensagem,
        tipo: alerta.tipo,
      });
    } else {
      setEditingAlerta(null);
      setFormData({ titulo: "", mensagem: "", tipo: "urgente" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAlerta(null);
    setFormData({ titulo: "", mensagem: "", tipo: "urgente" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingAlerta) {
      // Editar
      const novosAlertas = alertas.map((a) =>
        a.id === editingAlerta.id ? { ...a, ...formData } : a
      );
      salvarAlertas(novosAlertas);
      toast.success("Alerta atualizado com sucesso!");
    } else {
      // Verificar se já existe um alerta ativo
      if (alertas.some((a) => a.ativo)) {
        toast.error(
          "Apenas um alerta pode estar ativo por vez! Desative o alerta atual antes de criar um novo."
        );
        return;
      }

      // Adicionar
      const newAlerta: Alerta = {
        id: String(Date.now()),
        ...formData,
        ativo: true,
        data_criacao: new Date().toISOString().split("T")[0],
      };
      salvarAlertas([...alertas, newAlerta]);
      toast.success(
        "Alerta criado com sucesso! Agora está visível no site público."
      );
    }

    handleCloseModal();
  };

  const handleToggleAtivo = (id: string) => {
    const alerta = alertas.find((a) => a.id === id);

    // Se está ativando e já existe um alerta ativo, mostrar erro
    if (!alerta?.ativo && alertas.some((a) => a.ativo && a.id !== id)) {
      toast.error(
        "Apenas um alerta pode estar ativo por vez! Desative o alerta atual primeiro."
      );
      return;
    }

    const novosAlertas = alertas.map((a) =>
      a.id === id ? { ...a, ativo: !a.ativo } : a
    );
    salvarAlertas(novosAlertas);

    toast.success(
      `Alerta ${alerta?.ativo ? "desativado" : "ativado"} com sucesso!`
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este alerta?")) {
      salvarAlertas(alertas.filter((a) => a.id !== id));
      toast.success("Alerta excluído com sucesso!");
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "urgente":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "info":
        return "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoBorder = (tipo: string) => {
    switch (tipo) {
      case "urgente":
        return "border-yellow-500";
      case "info":
        return "border-blue-500";
      default:
        return "border-gray-500";
    }
  };

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
  };

  const alertasAtivos = alertas.filter((a) => a.ativo).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Alertas Urgentes
          </h2>
          <p className="text-muted-foreground">
            Gerencie os alertas exibidos no site público
          </p>
        </div>
        <Button onClick={() => handleOpenModal()} className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Criar Alerta
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-hero border-0 shadow-large">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Total de Alertas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {alertas.length}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-large">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Alertas Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{alertasAtivos}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-500 to-slate-600 border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Alertas Inativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {alertas.length - alertasAtivos}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas List */}
      <div className="space-y-4">
        {alertas.map((alerta) => (
          <Card
            key={alerta.id}
            className={`border-l-4 ${getTipoBorder(alerta.tipo)}`}
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className={`flex-1 ${!alerta.ativo ? "opacity-50" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{alerta.titulo}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getTipoColor(
                        alerta.tipo
                      )}`}
                    >
                      {alerta.tipo.toUpperCase()}
                    </span>
                  </div>
                  <CardDescription>
                    Criado em {formatDate(alerta.data_criacao)}
                  </CardDescription>
                </div>
                <div className="flex gap-2 items-start">
                  {/* Visual Status */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                    {alerta.ativo ? (
                      <Eye className="h-4 w-4 text-green-600" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        alerta.ativo ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      {alerta.ativo ? "Visível" : "Oculto"}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <Button
                    variant={alerta.ativo ? "destructive" : "default"}
                    size="sm"
                    onClick={() => handleToggleAtivo(alerta.id)}
                    className="min-w-[90px]"
                  >
                    {alerta.ativo ? "Desativar" : "Ativar"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenModal(alerta)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(alerta.id)}
                    className="hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className={!alerta.ativo ? "opacity-50" : ""}>
              <p className="text-muted-foreground">{alerta.mensagem}</p>
            </CardContent>
          </Card>
        ))}

        {alertas.length === 0 && (
          <Card>
            <CardContent className="py-12">
              <div className="text-center text-muted-foreground">
                <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Nenhum alerta criado</p>
                <p className="text-sm">
                  Clique em Criar Alerta para adicionar um novo alerta
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Preview do Site */}
      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Preview - Como aparece no site
          </CardTitle>
          <CardDescription>
            Alertas ativos são exibidos no topo da página inicial
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alertas
              .filter((a) => a.ativo)
              .map((alerta) => (
                <div
                  key={alerta.id}
                  className={`p-4 rounded-lg border-l-4 ${getTipoBorder(
                    alerta.tipo
                  )} bg-gradient-to-r ${
                    alerta.tipo === "urgente"
                      ? "from-accent/10 to-transparent"
                      : "from-primary/10 to-transparent"
                  }`}
                >
                  <div className="flex gap-3">
                    <AlertCircle
                      className={`h-5 w-5 flex-shrink-0 ${
                        alerta.tipo === "urgente"
                          ? "text-yellow-600"
                          : "text-primary"
                      }`}
                    />
                    <div>
                      <h4 className="font-semibold mb-1">{alerta.titulo}</h4>
                      <p className="text-sm text-muted-foreground">
                        {alerta.mensagem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {alertasAtivos === 0 && (
              <p className="text-center text-muted-foreground py-8">
                Nenhum alerta ativo para exibir
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <Card
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    {editingAlerta ? "Editar Alerta" : "Criar Novo Alerta"}
                  </CardTitle>
                  <CardDescription>
                    {editingAlerta
                      ? "Atualize as informações do alerta"
                      : "Preencha os dados do novo alerta"}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={handleCloseModal}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título do Alerta</Label>
                  <Input
                    id="titulo"
                    value={formData.titulo}
                    onChange={(e) =>
                      setFormData({ ...formData, titulo: e.target.value })
                    }
                    placeholder="Ex: Doações Urgentes de Alimentos"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({ ...formData, mensagem: e.target.value })
                    }
                    placeholder="Descreva o que a fundação precisa..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Alerta</Label>
                  <select
                    id="tipo"
                    value={formData.tipo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        tipo: e.target.value as "urgente" | "info",
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="urgente">
                      🔴 Urgente (Doações Necessárias)
                    </option>
                    <option value="info">
                      🔵 Informação (Eventos, Voluntários)
                    </option>
                  </select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCloseModal}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" className="flex-1">
                    {editingAlerta ? "Atualizar" : "Criar Alerta"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
