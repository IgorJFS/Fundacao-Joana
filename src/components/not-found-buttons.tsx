"use client";

import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function NotFoundButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link href="/">
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-medium w-full sm:w-auto"
        >
          <Home className="w-5 h-5 mr-2" />
          Voltar para Home
        </Button>
      </Link>

      <Button
        size="lg"
        variant="outline"
        onClick={() => window.history.back()}
        className="w-full sm:w-auto"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </Button>
    </div>
  );
}
