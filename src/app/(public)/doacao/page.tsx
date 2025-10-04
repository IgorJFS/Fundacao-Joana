"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { CreditCard, QrCode } from "lucide-react";
import Image from "next/image";

const donationSchema = z.object({
  amount: z.string().min(1, "Por favor, insira o valor da doação"),
  donor_name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100),
  cpf_cnpj: z.string().min(11, "CPF/CNPJ deve ter pelo menos 11 caracteres"),
  payment_method: z.enum(["pix", "card"]),
  show_name: z.boolean().default(false),
});

type DonationForm = z.infer<typeof donationSchema>;

export default function Doacao() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DonationForm>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      payment_method: "pix",
      show_name: false,
    },
  });

  const onSubmit = async (data: DonationForm) => {
    setIsSubmitting(true);
    try {
      // Convert amount string to number
      const amountNum = parseFloat(data.amount);

      if (isNaN(amountNum) || amountNum <= 0) {
        toast.error("Por favor, insira um valor válido");
        setIsSubmitting(false);
        return;
      }

      // TODO: Backend integration - Uncomment when ready
      // const { error } = await supabase
      //   .from("donations")
      //   .insert([{
      //     amount: amountNum,
      //     donor_name: data.donor_name,
      //     cpf_cnpj: data.cpf_cnpj || null,
      //     payment_method: data.payment_method,
      //     show_name: data.show_name,
      //   }]);
      //
      // if (error) throw error;

      // Mock success response for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Doação registrada com sucesso! Obrigado pela sua generosidade! 💙"
      );
      form.reset();
    } catch (error) {
      console.error("Error submitting donation:", error);
      toast.error("Erro ao processar doação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const paymentMethod = form.watch("payment_method");

  return (
    <div className="min-h-screen flex flex-col">
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
                <CardTitle>Dados da Doação</CardTitle>
                <CardDescription>
                  Preencha os dados abaixo para concluir sua doação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Amount */}
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Valor da Doação (R$)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="100.00"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Donor Name */}
                    <FormField
                      control={form.control}
                      name="donor_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="João da Silva" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* CPF/CNPJ */}
                    <FormField
                      control={form.control}
                      name="cpf_cnpj"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF/CNPJ</FormLabel>
                          <FormControl>
                            <Input placeholder="000.000.000-00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Payment Method */}
                    <FormField
                      control={form.control}
                      name="payment_method"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Método de Pagamento</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 gap-4"
                            >
                              <div>
                                <RadioGroupItem
                                  value="pix"
                                  id="pix"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="pix"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <QrCode className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">
                                    PIX
                                  </span>
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem
                                  value="card"
                                  id="card"
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor="card"
                                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                >
                                  <CreditCard className="mb-3 h-6 w-6" />
                                  <span className="text-sm font-medium">
                                    Cartão
                                  </span>
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Mock Payment Info */}
                    {paymentMethod === "pix" && (
                      <Card className="bg-secondary">
                        <CardContent className="p-6 space-y-4">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                              Escaneie o QR Code abaixo para realizar a doação:
                            </p>
                            <div className="bg-white p-4 rounded-lg inline-block">
                              <Image
                                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126360014BR.GOV.BCB.PIX0114doacao@ong.br520400005303986540510.005802BR5925Fundacao Joanna6009SAO PAULO62070503***6304"
                                alt="QR Code PIX"
                                width={192}
                                height={192}
                                className="w-48 h-48"
                                unoptimized
                              />
                            </div>
                          </div>
                          <div className="border-t pt-4">
                            <p className="text-sm text-muted-foreground mb-2 text-center">
                              Ou copie a chave PIX:
                            </p>
                            <code className="bg-background px-3 py-2 rounded text-sm block text-center">
                              doacao@fundacaojoanna.org.br
                            </code>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {paymentMethod === "card" && (
                      <Card className="bg-secondary">
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground text-center">
                            O processamento de cartão de crédito estará
                            disponível em breve. Por enquanto, utilize o PIX
                            para realizar sua doação.
                          </p>
                        </CardContent>
                      </Card>
                    )}

                    {/* Show Name Checkbox */}
                    <FormField
                      control={form.control}
                      name="show_name"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Desejo que meu nome apareça na lista de apoiadores
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processando..." : "Confirmar Doação"}
                    </Button>
                  </form>
                </Form>
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
                  <h3 className="font-semibold mb-2">🌟 Seu Nome no Site</h3>
                  <p className="text-sm text-muted-foreground">
                    Marcando a opção acima, seu nome será eternizado em nosso
                    site como um dos apoiadores da fundação, inspirando outras
                    pessoas a contribuírem também.
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
        <section className="py-16 mt-28 bg-secondary border-t border-border">
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
                        <p className="text-sm text-muted-foreground">
                          <strong>Horário de recebimento:</strong>
                          <br />
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 8h às 12h
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
                        📞 Dúvidas? Ligue: (22) 1234-5678
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
