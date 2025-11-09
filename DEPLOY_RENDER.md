# Guia de Deploy na Render

Este guia explica como fazer deploy do Material de Acompanhamento na Render de forma simples.

## Passo 1: Baixar o Código

Você tem duas opções para obter o código:

### Opção A: Usar o Management Dashboard (Recomendado)
1. Clique no botão **"View"** no card do projeto
2. Acesse a aba **"Code"** no Management UI (painel direito)
3. Clique em **"Download all files"** para baixar um ZIP com todo o projeto

### Opção B: Clonar via Git
Se você tiver Git instalado:
```bash
git clone <seu-repositorio-git>
cd material_acompanhamento_redes
```

## Passo 2: Preparar o Projeto

Antes de fazer deploy, certifique-se de que tem:
- **Node.js** instalado (versão 22+)
- **pnpm** instalado (npm install -g pnpm)

Navegue até a pasta do projeto:
```bash
cd material_acompanhamento_redes
```

## Passo 3: Instalar Dependências

Execute o comando:

```bash
pnpm install
```

## Passo 4: Testar Localmente (Opcional)

Para verificar se tudo está funcionando:

```bash
pnpm dev
```

Abra seu navegador em `http://localhost:5173` para visualizar.

## Passo 5: Fazer Deploy na Render

### 5.1 Criar uma Conta na Render
1. Acesse [render.com](https://render.com)
2. Clique em **"Sign Up"** e crie uma conta (pode usar GitHub)

### 5.2 Conectar seu Repositório Git
1. Faça push do seu código para um repositório GitHub/GitLab
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/material_acompanhamento_redes.git
   git push -u origin main
   ```

2. No Dashboard da Render, clique em **"New +"** → **"Web Service"**
3. Selecione seu repositório GitHub
4. Configure os seguintes dados:

**Configuração Correta:**
- **Name**: material-acompanhamento-redes
- **Environment**: Node
- **Build Command**: `pnpm install && pnpm build`
- **Start Command**: `pnpm preview`
- **Node Version**: 22

**IMPORTANTE**: Use `pnpm` em vez de `npm`. O projeto foi criado com pnpm e isso evita erros de compatibilidade.

### 5.3 Deploy
1. Clique em **"Create Web Service"**
2. Aguarde o build completar (leva alguns minutos)
3. Quando terminar, você receberá uma URL como: `https://seu-app.onrender.com`

## Passo 6: Acessar sua Aplicação

Após o deploy, acesse sua aplicação através da URL fornecida pela Render. Pronto! Seu material de acompanhamento está online!

## Troubleshooting

### Erro: "Cannot read properties of null (reading 'matches')"
- **Causa**: Usando `npm` em vez de `pnpm`
- **Solução**: Altere o Build Command para `pnpm install && pnpm build`

### Erro: "Build failed"
- Verifique se o arquivo `package.json` está presente
- Certifique-se de que todas as dependências estão listadas
- Verifique se há erros de TypeScript: `pnpm build`

### Erro: "Port not available"
- A Render usa a porta 3000 automaticamente
- Certifique-se de que o arquivo de configuração não força uma porta específica

### Aplicação carrega lentamente
- Render oferece plano gratuito com limitações
- Considere fazer upgrade para melhor performance

## Próximas Atualizações

Para atualizar o código após fazer deploy:
1. Faça as alterações localmente
2. Teste com `pnpm dev`
3. Faça commit e push para GitHub
4. Render fará deploy automaticamente

## Suporte

Para mais informações sobre Render, consulte a [documentação oficial](https://render.com/docs).
