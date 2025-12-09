"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { CreditCard, QrCode, Copy, Check, Building2 } from "lucide-react";
import Image from "next/image";

export default function Doacao() {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "bank">("pix");
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
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="font-heading text-3xl md:text-6xl font-extrabold mb-4 text-gradient">Faça Sua Doação</h1>
                <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
                <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                  Cada real doado faz a diferença na vida de milhares de pessoas.
                  Contribua e seja parte desta transformação!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Card de Doação */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">

            <Card className="shadow-large border-primary/10">
              <CardContent className="p-6 space-y-6">
                {/* Título da seção */}
                <div className="text-center pb-4 border-b border-border">
                  <h2 className="text-xl font-bold text-primary mb-1">Escolha o Método de Pagamento</h2>
                  <p className="text-sm text-muted-foreground">
                    Selecione como deseja realizar sua doação
                  </p>
                </div>

                {/* Payment Method Selection */}
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod("pix")}
                    className={`flex flex-col items-center justify-center rounded-xl border-2 p-6 transition-all ${
                      paymentMethod === "pix"
                        ? "border-accent bg-accent/10 shadow-md"
                        : "border-muted hover:border-accent/50 hover:bg-accent/5"
                    }`}
                  >
                    <QrCode className={`mb-3 h-8 w-8 ${paymentMethod === "pix" ? "text-accent" : ""}`} />
                    <span className="text-sm font-medium">PIX</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Instantâneo
                    </span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("bank")}
                    className={`flex flex-col items-center justify-center rounded-xl border-2 p-6 transition-all ${
                      paymentMethod === "bank"
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-muted hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    <Building2 className={`mb-3 h-8 w-8 ${paymentMethod === "bank" ? "text-primary" : ""}`} />
                    <span className="text-sm font-medium">Transferência</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Bancária
                    </span>
                  </button>

                  <div
                    className="flex flex-col items-center justify-center rounded-xl border-2 p-6 border-muted/50 bg-muted/30 opacity-60 cursor-not-allowed relative"
                  >
                    <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      EM BREVE
                    </div>
                    <CreditCard className="mb-3 h-8 w-8 text-muted-foreground/70" />
                    <span className="text-sm font-medium text-muted-foreground/70">Cartão</span>
                    <span className="text-xs text-muted-foreground/50 mt-1">
                      Indisponível
                    </span>
                  </div>
                </div>

                {/* Aviso de Doação de Itens */}
                <Card className="bg-gradient-to-r from-secondary to-primary/5 border-primary/20 shadow-soft">
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
                  <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-soft">
                    <CardContent className="p-6 space-y-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-lg mb-4">
                          Escaneie o QR Code para doar
                        </h3>
                        <div className="bg-white p-4 rounded-xl inline-block shadow-md">
                          <Image
                            src="/pixFJA.png"
                            alt="QR Code PIX para doação - Fundação Joanna de Ângelis CNPJ 06.261.897/0001-93"
                            width={200}
                            height={200}
                            className="w-48 h-48"
                          />
                        </div>
                      </div>

                      {/* Warning com informações de confirmação */}
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-amber-500 text-lg">⚠️</span>
                          <div>
                            <p className="text-sm font-semibold text-amber-800 mb-1">
                              Verifique antes de confirmar:
                            </p>
                            <p className="text-xs text-amber-700 leading-relaxed">
                              Ao escanear ou colar a chave PIX, confirme os dados:
                            </p>
                            <ul className="text-xs text-amber-700 mt-2 space-y-1">
                              <li><strong>Nome:</strong> FUNDACAO JOANNA DE ANGELIS</li>
                              <li><strong>Banco:</strong> BCO DO BRASIL S.A</li>
                              <li><strong>CNPJ:</strong> 06.261.897/0001-93</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <p className="text-sm text-center font-medium">
                          Ou copie a chave PIX (CNPJ):
                        </p>
                        <div className="space-y-2">
                          <code className="block bg-white px-4 py-3 rounded-lg text-sm font-mono border border-accent/30 text-center break-all shadow-soft">
                            {pixKey}
                          </code>
                          <Button
                            onClick={() => handleCopy(pixKey, "Chave PIX")}
                            variant="link"
                            className="w-auto mx-auto flex gap-2"
                          >
                            {copied === "Chave PIX" ? (
                              <>
                                <Check className="h-4 w-4 text-accent" />
                                <span className="text-accent">Copiado!</span>
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
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-soft">
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
                        {[
                          { label: "CNPJ", value: bankData.cnpj, key: "CNPJ", mono: true },
                          { label: "Nome", value: bankData.nome, key: "Nome", mono: false },
                          { label: "Banco", value: bankData.banco, key: "Banco", mono: false },
                          { label: "Agência", value: bankData.agencia, key: "Agência", mono: true },
                          { label: "Conta Corrente", value: bankData.conta, key: "Conta", mono: true },
                        ].map((item) => (
                          <div key={item.key} className="bg-white p-4 rounded-lg border border-primary/30">
                            <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                            <div className="flex items-center justify-between gap-2">
                              {item.mono ? (
                                <code className="text-sm font-mono font-semibold">{item.value}</code>
                              ) : (
                                <span className="text-sm font-semibold">{item.value}</span>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleCopy(item.value, item.key)}
                                className="hover:bg-primary/10"
                              >
                                {copied === item.key ? (
                                  <Check className="h-4 w-4 text-primary" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-center text-sm text-muted-foreground">
                          Após realizar a transferência, você pode nos enviar o comprovante via WhatsApp: (22) 99938-2357 💙
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Info Section */}
            <Card className="mt-8 shadow-medium border-accent/10">
              <CardContent className="p-6 space-y-4">
                <div className="text-center pb-4 border-b border-border">
                  <h2 className="text-xl font-bold">Por que doar 🫶?</h2>
                </div>
                <div className="p-4 rounded-lg bg-rose-50 border border-rose-100">
                  <h3 className="font-semibold mb-2 text-rose-700">❤️ Transforme Vidas</h3>
                  <p className="text-sm text-rose-600/80">
                    Sua doação ajudará centenas de crianças, adolescentes e
                    idosos em situação de vulnerabilidade social. Cada
                    contribuição faz a diferença na vida de quem mais precisa.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <h3 className="font-semibold mb-2 text-blue-700">💙 Impacto Direto</h3>
                  <p className="text-sm text-blue-600/80">
                    100% das doações vão diretamente para nossos projetos
                    sociais: alimentação, educação, saúde e bem-estar.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
                  <h3 className="font-semibold mb-2 text-emerald-700">📜 Dedução no IR</h3>
                  <p className="text-sm text-emerald-600/80">
                    Suas doações podem ser deduzidas no Imposto de Renda,
                    beneficiando você e quem precisa.
                  </p>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>

        {/* Doação de Itens Section */}
        <section
          id="doacao-itens"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
                  Doação Presencial
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Prefere Doar Itens?
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                  Recebemos diversos tipos de doações na nossa sede. Sua contribuição 
                  ajuda famílias em situação de vulnerabilidade.
                </p>
              </div>

              {/* Grid de Itens */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                {[
                  { icon: "🍎", label: "Alimentos", desc: "Alimentos não perecíveis e produtos alimentícios em geral.", bg: "bg-orange-50 hover:bg-orange-100 border-orange-200" },
                  { icon: "👕", label: "Roupas e Calçados", desc: "Roupas limpas e em bom estado, calçados para todas as idades.", bg: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
                  { icon: "👶", label: "Enxovais de Bebês", desc: "Roupinhas, fraldas, cobertores e itens para recém-nascidos.", bg: "bg-pink-50 hover:bg-pink-100 border-pink-200" },
                  { icon: "🧵", label: "Tecidos", desc: "Tecidos diversos para confecção e artesanato.", bg: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
                  { icon: "🧴", label: "Higiene Pessoal", desc: "Sabonetes, shampoo, pasta de dente, fraldas e produtos de higiene.", bg: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200" },
                  { icon: "🧹", label: "Limpeza e Descartáveis", desc: "Produtos de limpeza, detergentes, desinfetantes e descartáveis.", bg: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200" },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`${item.bg} border-2 rounded-2xl p-5 transition-all`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{item.label}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Endereço e Mapa lado a lado */}
              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Card de Informações */}
                <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white">📍</span>
                      Nossa Sede
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-slate-500 mb-1">Endereço</p>
                        <p className="font-medium text-slate-800">
                          R. Vassouras, Lote 20 - Quadra 16<br />
                          Jardim Mariléa, Rio das Ostras - RJ
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-slate-500 mb-3">Horários de Funcionamento</p>
                        <div className="space-y-1.5 text-sm">
                          {[
                            { dia: "Segunda", hora: "8:30-12:00 / 13:00-17:00" },
                            { dia: "Terça", hora: "8:00-16:00" },
                            { dia: "Quarta", hora: "8:30-12:00" },
                            { dia: "Quinta", hora: "14:00-18:00" },
                            { dia: "Sexta", hora: "8:30-12:00" },
                            { dia: "Sábado", hora: "8:00-15:00" },
                            { dia: "Domingo", hora: "17:00-20:00" },
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-2 px-3 rounded-lg odd:bg-slate-50">
                              <span className="text-slate-700 font-semibold">{item.dia}</span>
                              <span className="text-teal-600 font-semibold">{item.hora}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4">
                        <p className="text-sm text-slate-500 mb-1">Contato</p>
                        <p className="font-medium text-teal-600">(22) 99938-2357</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/dir//R.+Vassouras,+Lote+20+-+Quadra+16+-+Jardim+Maril%C3%A9a,+Rio+das+Ostras+-+RJ,+28890-000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-xl py-6 text-base font-semibold" size="lg">
                      Abrir no Google Maps
                    </Button>
                  </a>
                </div>

                {/* Mapa */}
                <div className="rounded-3xl overflow-hidden shadow-lg h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1764651226313!6m8!1m7!1s2ES131dTYULvEh6Yh2BM-A!2m2!1d-22.50167289947236!2d-41.93094355159263!3f11.39317874846103!4f3.0190674857738173!5f1.088183033840005"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Fundação Joanna de Ângelis"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}