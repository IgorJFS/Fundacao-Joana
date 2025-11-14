"use client";

import { useState } from "react";
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
import { Search, Plus, Edit, Trash2, X } from "lucide-react";
import { toast } from "sonner";

// Mock data
const mockVoluntarios = [
  {
    id: "1",
    nome: "Carlos Silva",
    email: "carlos@email.com",
    telefone: "(22) 98765-4321",
    area_atuacao: "Educação",
    data_cadastro: "2025-01-15",
  },
  {
    id: "2",
    nome: "Mariana Santos",
    email: "mariana@email.com",
    telefone: "(22) 91234-5678",
    area_atuacao: "Saúde",
    data_cadastro: "2025-02-20",
  },
  {
    id: "3",
    nome: "José Oliveira",
    email: "jose@email.com",
    telefone: "(22) 99876-5432",
    area_atuacao: "Meio Ambiente",
    data_cadastro: "2025-03-10",
  },
];

export default function VoluntariosManager() {
  const [voluntarios, setVoluntarios] = useState(mockVoluntarios);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVoluntario, setEditingVoluntario] = useState<
    (typeof mockVoluntarios)[0] | null
  >(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area_atuacao: "",
  });

  const filteredVoluntarios = voluntarios.filter(
    (v) =>
      v.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.area_atuacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (voluntario?: (typeof mockVoluntarios)[0]) => {
    if (voluntario) {
      setEditingVoluntario(voluntario);
      setFormData({
        nome: voluntario.nome,
        email: voluntario.email,
        telefone: voluntario.telefone,
        area_atuacao: voluntario.area_atuacao,
      });
    } else {
      setEditingVoluntario(null);
      setFormData({ nome: "", email: "", telefone: "", area_atuacao: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingVoluntario(null);
    setFormData({ nome: "", email: "", telefone: "", area_atuacao: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingVoluntario) {
      // Editar
      setVoluntarios(
        voluntarios.map((v) =>
          v.id === editingVoluntario.id ? { ...v, ...formData } : v
        )
      );
      toast.success("Voluntário atualizado com sucesso!");
    } else {
      // Adicionar
      const newVoluntario = {
        id: String(voluntarios.length + 1),
        ...formData,
        data_cadastro: new Date().toISOString().split("T")[0],
      };
      setVoluntarios([...voluntarios, newVoluntario]);
      toast.success("Voluntário adicionado com sucesso!");
    }

    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja remover este voluntário?")) {
      setVoluntarios(voluntarios.filter((v) => v.id !== id));
      toast.success("Voluntário removido com sucesso!");
    }
  };

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Gerenciador de Voluntários
          </h2>
          <p className="text-muted-foreground">
            Gerencie a equipe de voluntários da fundação
          </p>
        </div>
        <Button onClick={() => handleOpenModal()} className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Voluntário
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-hero border-0 shadow-large">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Total de Voluntários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {voluntarios.length}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-accent border-0 shadow-large">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-white">
              Novos Este Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">
              {
                voluntarios.filter(
                  (v) =>
                    new Date(v.data_cadastro).getMonth() ===
                    new Date().getMonth()
                ).length
              }
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>Todos os Voluntários</CardTitle>
              <CardDescription>
                {filteredVoluntarios.length} voluntários encontrados
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar voluntários..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredVoluntarios.map((voluntario) => (
              <div
                key={voluntario.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border hover:bg-gray-200 transition-colors"
              >
                <div className="flex-1 space-y-1">
                  <p className="font-semibold">{voluntario.nome}</p>
                  <p className="text-sm text-muted-foreground">
                    {voluntario.email} • {voluntario.telefone}
                  </p>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {voluntario.area_atuacao}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Desde {formatDate(voluntario.data_cadastro)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenModal(voluntario)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(voluntario.id)}
                    className="hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
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
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>
                    {editingVoluntario
                      ? "Editar Voluntário"
                      : "Adicionar Voluntário"}
                  </CardTitle>
                  <CardDescription>
                    {editingVoluntario
                      ? "Atualize as informações do voluntário"
                      : "Preencha os dados do novo voluntário"}
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
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area_atuacao">Área de Atuação</Label>
                  <Input
                    id="area_atuacao"
                    value={formData.area_atuacao}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        area_atuacao: e.target.value,
                      })
                    }
                    required
                  />
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
                    {editingVoluntario ? "Atualizar" : "Adicionar"}
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
