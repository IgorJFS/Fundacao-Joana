require('dotenv').config({ path: '.env.local' });

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

console.log("Testing Webhook URL:", webhookUrl);

if (!webhookUrl) {
    console.error("Error: DISCORD_WEBHOOK_URL is not defined in .env.local");
    process.exit(1);
}

fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: "🔔 Teste de verificação do Webhook (Fundação Joana)" })
})
.then(async (res) => {
    if (res.ok) {
        console.log("✅ Sucesso! Mensagem enviada para o Discord.");
    } else {
        console.error("❌ Falha ao enviar:", res.status, res.statusText);
        const text = await res.text();
        console.error("Response:", text);
    }
})
.catch(err => {
    console.error("❌ Erro na requisição:", err);
});
