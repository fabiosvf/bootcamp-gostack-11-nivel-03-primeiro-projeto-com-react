####  Bootcamp - GoStack 11
# 🚀 Nível 03 - Primeiro projeto com React

## Sobre

- Neste projeto desenvolveremos uma aplicação web completa chamada GitHub Explorer 
- Serão abordados fundamentos que serão aplicados tanto na web com ReactJS quanto em mobile com React Native
- Nesta estapa aprenderemos sobre padronização de projetos React, estrutura de pastas, estilização tanto em ReactJS quanto em React Native, rotas, consumo de APIs externas (neste caso, a API do GitHub) e TypeScript, além de ferramentas como ESLint, Prettier e EditorConfig.
- Nesse ponto o dev já deve conhecer os conceitos de componentes, estado e propriedades, mas eles serão relembrados durante as aulas.

---

## Roteiro

- Nesta seção será descrito o roteiro com todos os passos para criação do projeto em ReactJS com TypeScript

### Criando o projeto
- Criar uma pasta
- Acessar a pasta em modo terminal
- Digitar o seguinte comando para iniciar o projeto à partir de um template padrão contendo várias ferramentas como Babbel e WebPack já configuradas:
```
$ yarn create react-app nome-do-projeto --template typescript
```
- Abrir a pasta do projeto no Visual Studio Code
```
$ code .
```
### Configurando a versão inicial do projeto
- Apagar os seguintes arquivos que foram gerados automaticamente à partir do comando `create react_app`
```
public\favicon.ico
public\logo192.png
public\logo512.png
public\manifest.json
src\App.css
src\Aoo.test.tsx
src\index.css
src\logo.svg
src\reportWebVitals.ts
```
- Acessar o arquivo `public\index.html` e manter o seguinte código:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#3A3A3A" />
    <title>Github Explorer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
- Acessar o arquivo `src\App.tsx` e manter o seguinte código:
```ts
import React from 'react';

function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;
```
- Acessar o arquivo `src\index.tsx` e manter o seguinte código:
```ts
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

---

## Tecnologias utilizadas

#### Dependências de Projeto
- [@testing-library/jest-dom](https://yarnpkg.com/package/@testing-library/jest-dom)
- [@testing-library/react](https://yarnpkg.com/package/@testing-library/react)
- [@testing-library/user-event](https://yarnpkg.com/package/@testing-library/user-event)
- [@types/jest](https://yarnpkg.com/package/@types/jest)
- [@types/node](https://yarnpkg.com/package/@types/node)
- [@types/react](https://yarnpkg.com/package/@types/react)
- [@types/react-dom](https://yarnpkg.com/package/@types/react-dom)
- [react](https://yarnpkg.com/package/react)
- [react-dom](https://yarnpkg.com/package/react-dom)
- [react-scripts](https://yarnpkg.com/package/react-scripts)
- [typescript](https://yarnpkg.com/package/typescript)
- [web-vitals](https://yarnpkg.com/package/web-vitals)

#### Dependências de Desenvolvimento
- 

---

## Como executar
- Crie uma pasta para o projeto
- Acesse a pasta
- Faça o clone do projeto
```
$ git clone https://github.com/fabiosvf/bootcamp-gostack-11-nivel-03-primeiro-projeto-com-react.git .
```
- Atualize as bibliotecas
```
$ yarn
```
- Para iniciar a aplicação web, digite:
```
$ yarn start
```
