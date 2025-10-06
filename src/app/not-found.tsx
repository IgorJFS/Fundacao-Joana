import Image from "next/image";
import logoSemFundo from "../../public/logoSemFundo.png";
import { NotFoundButtons } from "@/components/not-found-buttons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-page px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src={logoSemFundo}
              alt="Fundação Joanna de Ângelis"
              fill
              sizes="" // Apenas para Next não reclamar no console
              className="object-contain opacity-80"
            />
          </div>
        </div>

        {/* Número 404 */}
        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
          404
        </h1>

        {/* Mensagem */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Página Não Encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Ops! Parece que você se perdeu. A página que você está procurando não
          existe ou foi movida.
        </p>

        {/* Botões */}
        <NotFoundButtons />
      </div>
    </div>
  );
}
