# Desafio Back-end Comeia

# Rodando aplicação

Para rodar a aplicação baixe as dependências:

```bash
yarn ou npm install
```

Despois de intalado as dependências, rode o comando abaixo para criar a tabelas no banco, lembrando que, precisa criar um arquivo . env na raiz do projeto com as variaveis solicitadas na connection do arquivo connection.ts na pasta Database:

```bash
yarn knex:migrate ou npm run knex:migrate
```

Despois de criado as tabelas, rode o comando abaixo para realizar os incerts:

```bash
yarn knex:seeds ou npm run knex:seeds
```

Para subir o servidor rode o comando:

```bash
yarn dev ou npm run dev
```

Para acessar a documentação da api, acesse a seguinte url:

```bash
http://localhost:3333/api-doc/
```
