import { redirect } from "next/navigation";

export default function AdminPage() {
  // Redireciona automaticamente para a página de login
  redirect("/admin/login");
}
