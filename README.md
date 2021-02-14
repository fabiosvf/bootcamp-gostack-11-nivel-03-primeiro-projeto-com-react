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
- Crie uma pasta
- Acesse a pasta em modo terminal
- Digite o seguinte comando para iniciar o projeto à partir de um template padrão contendo várias ferramentas como Babbel e WebPack já configuradas:
```
$ yarn create react-app nome-do-projeto --template typescript
```
- Abra a pasta do projeto no Visual Studio Code
```
$ code .
```
### Configurando a versão inicial do projeto
- Apague os seguintes arquivos que foram gerados automaticamente à partir do comando `create react_app`
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
- Acesse o arquivo `public\index.html` e mantenha o seguinte código:
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
- Acesse o arquivo `src\App.tsx` e mantenha o seguinte código:
```ts
import React from 'react';

function App() {
  return (
    <h1>Hello World</h1>
  );
}

export default App;
```
- Acesse o arquivo `src\index.tsx` e mantenha o seguinte código:
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
### Configurando padrões de projeto com ESLint, Prettier e EditorConfig

#### Configurando o EditorConfig
- Instale a extensão `EditorConfig for VS Code` no Visual Studio Code
- Crie o arquivo `.editorconfig` na raiz do projeto com o seguinte conteúdo:
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

#### Configurando o ESLint
- Instale a extensão `ESLint` no Visual Studio Code
- Abra o arquivo `settings.json` pressionando `CTRL + P` e digitando o nome do arquivo.
- Adicione o trecho abaixo no final do arquivo:
```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
- Abra o arquivo `package.json` localizado na raiz do projeto
- Localize e remova o seguinte trecho de configuração:
```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```
- Instale a biblioteca `eslint` como dependência de desenvolvimento:
```
$ yarn add eslint -D
```
- Inicie o assistente de configuração do ESLint digitando o seguinte comando:
```
$ yarn eslint --init
```
- Responda as perguntas com as seguintes informações:
  - How would you like to use ESLint? `To check syntax, find problems, and enforce code style`
  - What type of module does your project use? `JavaScrtipt modules (import/export)`
  - Which framework does your project use? `React`
  - Does your project use TypeScript? `Yes`
  - Where does your code run? `Browser`
  - How would you like to define a style for your project? `Use a popular style guide`
  - Which style guide do you want to foloow? `Airbnb: https://github.com/airbnb/javascript`
  - What format do you want your config file to be in? `JSON`
  - Would you like to install them now with npm? `No`
- Copie as linhas de comando sugeridas pelo assistente para realizar a instalação das bibliotecas de forma manual
  - No meu caso, as bibliocas sugeridas para instalação foram:
```
eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
```
- Remova, da sugestão de instalação, a referência completa à instalação da biblioteca `eslint`. No meu caso são essas versões:
```
eslint@^5.16.0 || ^6.8.0 || ^7.2.0
```
- Remove, da sugestão de instalação, a referência à versões anteriores para a biblioteca `eslint-plugin-react-hooks` e mantenha apenas a versão mais atual
```
De
eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
Para
eslint-plugin-react-hooks@^4
```
- Instale as bibliotecas manualmente
```
yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
```
- Crie o arquivo `.eslintignore` na raiz do projeto com o seguinte conteúdo:
```
**/*.js
node_modules
build
/src/react-app-env.d.ts
/src/reportWebVitals.ts
```
- Na raiz do projeto, localize o arquivo `.eslintrc.json` e dentro da sessão `extends` adicione o seguinte trecho de código:
```
"plugin:@typescript-eslint/recommended"
```
- Ainda no arquivo `.eslintrc.json` adicione o seguinte código dentro da sessão `plugins`:
```
"react-hooks"
```
- Para finalizar o ajuste no arquivo `.eslintrc.json` adicione o código abaixo dentro da sessão `rules`:
```
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn",
"react/jsx-filename-extension": [
	1,
	{
	"extensions": [
		".tsx"
	]
	}
],
"no-use-before-define": "off",
"@typescript-eslint/no-use-before-define": [
	"error"
],
"react/react-in-jsx-scope": "off"
```
- Instale a biblioteca `eslint-import-resolver-typescript` como dependência de desenvolvimento:
```
$ yarn add eslint-import-resolver-typescript -D
```
- Abra novamente o arquivo de configuração `.eslintrc.json` e adicione o seguinte código na sessão `rules`:
```
"import/extensions": [
    "error",
    "ignorePackages",
    {
      "ts": "never",
      "tsx": "never"
    }
 ]
```
- Ainda no arquivo `.eslintrc.json`, logo abaixo da sessão `rules` adicione o seguinte código:
```
"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
```

#### Configurando o Prettier
- Desinstale a extensão `Prettier - Code Formatter` caso a mesma esteja instalada
- Instale as seguintes bibliotecas como dependências de desenvolvimento:
```
$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```
- Na sessão `extends` do arquivo de configuração `.eslintrc.json` adicione o seguinte código:
```
"prettier/@typescript-eslint",
"plugin:prettier/recommended"
```
- Ainda no mesmo arquivo de configuração adicione o seguinte código na sessão `rules`:
```
"prettier/prettier": "error"
```
- O código final do arquivo `.eslintrc.json` deverá ficar parecido com o conteúdo abaixo:
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [
        1,
        {
        "extensions": [
          ".tsx"
        ]
        }
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "error"
      ],
      "react/react-in-jsx-scope": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
     ],
     "prettier/prettier": "error"
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
}
```
- Crie o arquivo `prettier.config.js` na raiz do projeto e adicione o seguinte código:
```
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```
- Crie ou edite o arquivo `.eslintignore` na raiz do projeto e adicione a seguinte regra:
```
/*.js
```
---
## Padrões de Projeto

#### Introdução
- [Padrões de projeto com ESLint, Prettier e EditorConfig](docs/Padr%C3%B5es%20de%20projeto%20com%20ESLint%2C%20Prettier%20e%20EditorConfig.pdf)
#### Ferramentas para padronização de código
- [EditorConfig](docs/EditorConfig.pdf)
- [ESLint](docs/ESLint.pdf)
- [Prettier](docs/Prettier.pdf)

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
