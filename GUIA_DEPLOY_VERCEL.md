# 🚀 Guia de Deploy no Vercel

Seu portfólio está pronto para ir ao ar! Siga este passo a passo para fazer o deploy no Vercel.

---

## 📋 Pré-requisitos

- Conta no GitHub (para conectar seu repositório)
- Conta no Vercel (gratuita em [vercel.com](https://vercel.com))
- Git instalado no seu computador

---

## 🔧 Passo 1: Preparar o Repositório Git

Se ainda não tem um repositório Git, crie um:

```bash
cd portfolio-melhorado
git init
git add .
git commit -m "Initial commit: Portfolio Mariana Cardoso"
```

---

## 📤 Passo 2: Enviar para GitHub

1. Acesse [github.com](https://github.com) e crie um novo repositório
2. Copie o URL do repositório (ex: `https://github.com/seu-usuario/portfolio-mariana.git`)
3. No terminal, execute:

```bash
git remote add origin https://github.com/seu-usuario/portfolio-mariana.git
git branch -M main
git push -u origin main
```

---

## 🌐 Passo 3: Deploy no Vercel

### Opção A: Via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione **"Import Git Repository"**
4. Conecte sua conta GitHub
5. Selecione o repositório `portfolio-mariana`
6. Clique em **"Import"**
7. Vercel detectará automaticamente que é um projeto Vite + React
8. Clique em **"Deploy"**
9. Aguarde o deploy finalizar (leva ~2-3 minutos)

### Opção B: Via CLI (Linha de Comando)

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
cd portfolio-melhorado
vercel
```

4. Siga as instruções na tela

---

## ✅ Verificar o Deploy

Após o deploy, você receberá um URL como:
- `https://portfolio-mariana.vercel.app`

Acesse o link para verificar se tudo está funcionando corretamente!

---

## 🎯 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio (ex: `mariana.com.br`):

1. No Vercel, vá para **Settings > Domains**
2. Clique em **"Add Domain"**
3. Digite seu domínio
4. Configure os DNS records conforme as instruções do Vercel
5. Aguarde a propagação (pode levar até 48 horas)

---

## 🔄 Atualizações Futuras

Toda vez que você fizer um `git push` para a branch `main`, o Vercel automaticamente:
1. Detecta as mudanças
2. Reconstrói o projeto
3. Faz o deploy da nova versão

Nenhuma ação manual necessária!

---

## 🐛 Troubleshooting

### Erro: "Build failed"
- Verifique se todas as dependências estão instaladas
- Execute `npm install` localmente
- Verifique se há erros de TypeScript: `npm run build`

### Erro: "Port already in use"
- Mude a porta: `npm run dev -- --port 3001`

### Imagens não aparecem
- Verifique se as imagens estão em `/public/images/`
- Verifique os nomes dos arquivos (case-sensitive)

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no Vercel Dashboard
2. Consulte a documentação: [vercel.com/docs](https://vercel.com/docs)
3. Teste localmente: `npm run dev`

---

## 🎉 Pronto!

Seu portfólio está no ar! Compartilhe o link com todos! 🚀

**URL do seu portfólio:** `https://portfolio-mariana.vercel.app`
