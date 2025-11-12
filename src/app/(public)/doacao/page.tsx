"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { CreditCard, QrCode, Copy, Check, Building2 } from "lucide-react";
import Image from "next/image";

export default function Doacao() {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "bank">("pix");
  const [copied, setCopied] = useState<string | null>(null);

  const pixKey = "06.261.897/0001-93";
  const bankData = {
    cnpj: "06.261.897/0001-93",
    nome: "Fundação Joanna de Ângelis",
    banco: "Banco do Brasil",
    agencia: "3315-4",
    conta: "17031-3",
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast.success(`${type} copiado!`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Faça Sua Doação</h1>
              <p className="text-muted-foreground">
                Cada real doado faz a diferença na vida de milhares de pessoas.
                Contribua e seja parte desta transformação!
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Escolha o Método de Pagamento</CardTitle>
                <CardDescription>
                  Selecione como deseja realizar sua doação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Method Selection */}
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod("pix")}
                    className={`flex flex-col items-center justify-center rounded-lg border-2 p-6 transition-all ${
                      paymentMethod === "pix"
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <QrCode className="mb-3 h-8 w-8" />
                    <span className="text-sm font-medium">PIX</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Instantâneo
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("bank")}
                    className={`flex flex-col items-center justify-center rounded-lg border-2 p-6 transition-all ${
                      paymentMethod === "bank"
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <Building2 className="mb-3 h-8 w-8" />
                    <span className="text-sm font-medium">Transferência</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Bancária
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center rounded-lg border-2 p-6 transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5"
                        : "border-muted hover:border-primary/50"
                    }`}
                  >
                    <CreditCard className="mb-3 h-8 w-8" />
                    <span className="text-sm font-medium">Cartão</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Em breve
                    </span>
                  </button>
                </div>

                {/* Aviso de Doação de Itens */}
                <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground mb-1">
                          💝 Prefere doar itens?
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Aceitamos roupas, alimentos, materiais de higiene e
                          muito mais! Clique em Ver opções
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          document
                            .getElementById("doacao-itens")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="whitespace-nowrap"
                      >
                        Ver opções
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* PIX Payment Info */}
                {paymentMethod === "pix" && (
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6 space-y-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-lg mb-4">
                          Escaneie o QR Code para doar
                        </h3>
                        <div className="bg-white p-4 rounded-xl inline-block shadow-md">
                          <Image
                            src="/pixFJA.png"
                            alt="QR Code PIX - Fundação Joanna de Ângelis"
                            width={200}
                            height={200}
                            className="w-48 h-48"
                          />
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <p className="text-sm text-center font-medium">
                          Ou copie a chave PIX (CNPJ):
                        </p>
                        <div className="space-y-2">
                          <code className="block bg-white px-4 py-3 rounded-lg text-sm font-mono border border-green-200 text-center break-all">
                            {pixKey}
                          </code>
                          <Button
                            onClick={() => handleCopy(pixKey, "Chave PIX")}
                            variant="link"
                            className="w-auto mx-auto flex gap-2"
                          >
                            {copied === "Chave PIX" ? (
                              <>
                                <Check className="h-4 w-4 text-green-600" />
                                <span className="text-green-600">Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                <span>Copiar chave PIX</span>
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-center text-sm text-muted-foreground">
                          Faça sua doação via PIX! Cada contribuição faz a
                          diferença na vida de quem precisa. 💚
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Bank Transfer Info */}
                {paymentMethod === "bank" && (
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                    <CardContent className="p-6 space-y-6">
                      <div className="text-center mb-4">
                        <h3 className="font-semibold text-lg mb-2">
                          Dados para Transferência Bancária
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Utilize os dados abaixo para fazer sua transferência
                        </p>
                      </div>

                      <div className="space-y-3">
                        {/* CNPJ */}
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="text-xs text-muted-foreground mb-1">CNPJ</p>
                          <div className="flex items-center justify-between gap-2">
                            <code className="text-sm font-mono font-semibold">
                              {bankData.cnpj}
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy(bankData.cnpj, "CNPJ")}
                            >
                              {copied === "CNPJ" ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Nome */}
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="text-xs text-muted-foreground mb-1">Nome</p>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold">
                              {bankData.nome}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy(bankData.nome, "Nome")}
                            >
                              {copied === "Nome" ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Banco */}
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="text-xs text-muted-foreground mb-1">Banco</p>
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold">
                              {bankData.banco}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy(bankData.banco, "Banco")}
                            >
                              {copied === "Banco" ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Agência */}
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="text-xs text-muted-foreground mb-1">Agência</p>
                          <div className="flex items-center justify-between gap-2">
                            <code className="text-sm font-mono font-semibold">
                              {bankData.agencia}
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy(bankData.agencia, "Agência")}
                            >
                              {copied === "Agência" ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Conta */}
                        <div className="bg-white p-4 rounded-lg border border-blue-200">
                          <p className="text-xs text-muted-foreground mb-1">Conta Corrente</p>
                          <div className="flex items-center justify-between gap-2">
                            <code className="text-sm font-mono font-semibold">
                              {bankData.conta}
                            </code>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleCopy(bankData.conta, "Conta")}
                            >
                              {copied === "Conta" ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-center text-sm text-muted-foreground">
                          Após realizar a transferência, você pode nos enviar o comprovante via WhatsApp: (22) 99938-2357 💙
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Card Payment Info */}
                {paymentMethod === "card" && (
                  <Card className="bg-secondary">
                    <CardContent className="p-8 text-center space-y-4">
                      <CreditCard className="h-12 w-12 mx-auto text-muted-foreground" />
                      <h3 className="font-semibold text-lg">
                        Pagamento com Cartão
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        O processamento de cartão de crédito estará disponível
                        em breve. Por enquanto, utilize o PIX para realizar sua
                        doação de forma rápida e segura.
                      </p>
                      <Button
                        onClick={() => setPaymentMethod("pix")}
                        variant="outline"
                      >
                        Doar via PIX
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Info Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Por que doar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">❤️ Transforme Vidas</h3>
                  <p className="text-sm text-muted-foreground">
                    Sua doação ajudará centenas de crianças, adolescentes e
                    idosos em situação de vulnerabilidade social. Cada
                    contribuição faz a diferença na vida de quem mais precisa.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">💙 Impacto Direto</h3>
                  <p className="text-sm text-muted-foreground">
                    100% das doações vão diretamente para nossos projetos
                    sociais: alimentação, educação, saúde e bem-estar.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">📜 Dedução no IR</h3>
                  <p className="text-sm text-muted-foreground">
                    Suas doações podem ser deduzidas no Imposto de Renda,
                    beneficiando você e quem precisa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Doação de Itens Section */}
        <section
          id="doacao-itens"
          className="py-16 mt-28 bg-secondary border-t border-border"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Doe Itens Presencialmente
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Além de doações financeiras, aceitamos roupas, alimentos não
                  perecíveis, materiais escolares, brinquedos e muito mais!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Lista de Itens Aceitos */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Itens que Aceitamos</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          👕 Roupas e Calçados
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Roupas limpas e em bom estado, calçados, cobertores e
                          lençóis.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          🍎 Alimentos
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Alimentos não perecíveis (arroz, feijão, macarrão,
                          óleo, açúcar, etc).
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          📚 Material Escolar
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Cadernos, lápis, canetas, mochilas, livros didáticos e
                          paradidáticos.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          🧸 Brinquedos
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Brinquedos em bom estado, jogos educativos e materiais
                          de recreação.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          🧴 Higiene
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Sabonetes, shampoo, pasta de dente, fraldas e produtos
                          de limpeza.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          📍 Como Chegar
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          R. Vassouras, Lote 20 - Quadra 16
                          <br />
                          Jardim Mariléa
                          <br />
                          Rio das Ostras - RJ
                          <br />
                          CEP: 28890-000
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong>Horário de recebimento:</strong>
                          <br />
                          <strong>2ª Feira:</strong> 8:30-12:00 / 13:00-17:00
                          <br />
                          <strong>3ª Feira:</strong> 8:00-16:00
                          <br />
                          <strong>4ª Feira:</strong> 8:30-12:00
                          <br />
                          <strong>5ª Feira:</strong> 14:00-18:00
                          <br />
                          <strong>6ª Feira:</strong> 8:30-12:00
                          <br />
                          <strong>Sábado:</strong> 8:00-15:00
                          <br />
                          <strong>Domingo:</strong> 17:00-20:00
                        </p>
                      </div>

                      <a
                        href="https://www.google.com/maps/dir//R.+Vassouras,+Lote+20+-+Quadra+16+-+Jardim+Maril%C3%A9a,+Rio+das+Ostras+-+RJ,+28890-000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full" size="lg">
                          Abrir no Google Maps
                        </Button>
                      </a>

                      <p className="text-xs text-muted-foreground text-center">
                        📞 Dúvidas? Mande mensagem para: (22) 99938-2357
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Mapa */}
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0 h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1759306537451!6m8!1m7!1sD7yGkO9TPswgLzK_sp4csA!2m2!1d-22.50166265609518!2d-41.93095581335224!3f14.819350323818071!4f3.228379886412796!5f0.7820865974627469"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "600px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização para Doação de Itens - Rio das Ostras"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
