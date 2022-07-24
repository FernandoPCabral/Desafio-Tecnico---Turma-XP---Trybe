# Boas vindas ao repositório do Desafio Técnico Turma XP - Trybe!

Este repositório contém o desenvolvimento do Desafio Técnico proposto pela [XP inc.](https://www.xpinc.com/) em parceria com a [Trybe](https://www.betrybe.com/). O desafio foi realizado por _[Fernando Pereira Cabral](https://www.linkedin.com/in/fernandopcabral/)_.

O desafio foi proposto na área de _FrontEnd_ e tinha como objetivo desenvolver uma aplicação que se assemelha ao dia a dia de uma pessoa investidora, um aplicativo de investimentos em ações, com algumas funcionalidades de conta digital.

---

# Sumário

- [Boas vindas ao repositório do Desafio Técnico Turma XP - Trybe!](#boas-vindas-ao-repositório-do-desafio-técnico-turma-xp-trybe)
- [Sumário](#sumario)
- [Habilidades](#habilidades)
- [Sobre a Construção da Aplicação e Gerenciamento de Dados](#sobre-a-construção-da-aplicação-e-gerenciamento-de-dados)
- [Sobre os Requisitos Mínimos: As telas da Aplicação](#sobre-os-requisitos-mínimos-as-telas-da-aplicação)
   - [Tela de Login](#tela-de-login)
   - [Tela de Ações](#tela-de-ações)
   - [Tela de Compra/Venda de Ações](#tela-de-compra-venda-de-ações)
   - [Tela da Conta Pessoal](#tela-da-conta-pessoal)
- [Sobre os Requisitos Adicionais](#sobre-os-requisitos-adicionais)
   - [Salvamento do Usuário, data e hora e exibição do Email](#salvamento-do-usuário-data-e-hora-e-exibição-do-email)
   - [Validação de email e senha](#validação-de-email-e-senha)
   - [Testes Unitários](#testes-unitários)
   - [Tratamento de Erros](#tratamento-de-erros)
- [Sobre a estilização da Aplicação com Styled Components](#sobre-a-estilização-da-aplicação-com-styled-components)
- [Sobre o Deploy](#sobre-o-deploy)


---

# Habilidades

Nesta aplicação, é verificada a capacidade de:

 * Utilizar os ciclos de vida de um componente _React_.
 
 * Utilizar o gerencimento de estado, props e componentes atraves do _Context API_.
 
 * Utilizar as funções _useState_, _useEffect_, _useContext_.
 
 * utilizar o _Local Storage_ para salvamento e atualização das informações contidas nas Páginas da aplicação.
 
 * Fazer verificações das informações enviadas em Formulário.
 
 * Fazer Validações e Tratamentos de erros.
 
 * Fazer a alimentação de forma dinamica das Tabelas através de _HOF's_.
 
 * Criar links de navegação.
 
 * Mapear o caminho da _URL_ através do atributo _History_ e da função _useParams_.
 
 ---
 ---

# Sobre a Construção da Aplicação e Gerenciamento de Dados

Para a construção da aplicação, foi utilizado o _React_ com destaque para o uso de _react-router-dom_ com gerenciamento de rotas utilizando o _Switch_ e _Route_, _PropTypes_ e _react-number-format_. Para o gerenciamento dos estados da aplicação foi utilizado o _Context API_ com destaque para o uso de um contexto único _"myContext"_ e _"myProvider"_ e gerenciamento de composição de páginas com o _useEffect_.

---
---

# Sobre os Requisitos Mínimos: As telas da Aplicação

## Tela de Login

A tela de Login é composta apresentando o Nome Fantasia da aplicação: _PocketStock_ além de um formulário de preenchimento de E-mail e Senha, juntamente com um botão de acesso e link com redirecionamento.

---

## Tela de Ações

A tela de Ações é formada pelo componente Header que traz as informações de saldo e E-mail logado além do nome fantasia. A tela também é formada por 2 componentes de tabelas que representam as Ações disponíveis para investimento e as Ações adquiridas pela pessoa usuária, ambas com botões de redirecionamento para a tela de compra e venda de Ações. Ao fim da tela, existe o botão de redirecionamento para a tela da conta pessoal.

---

## Tela de Compra/Venda de Ações

A tela de Compra/Venda de ações é formada pelo Header já mencionado, um componente de tabela que tráz a informação de compra ou venda seguido do _id_ e os detalhes da ação, um componente de inserção da quantidade e dois botões sendo um com redirecionamento para a tela anterior (Tela de Ações) e outra para a confirmação da compra/venda.

---

## Tela da Conta Pessoal

A tela da Conta Pessoal tráz o Header com uma pequena modificação, onde o saldo não aparece. Ao invés disso temos o saldo disposto na própria tela, em destaque, seguido pelos botões de seleção do método de transação: Depósito ou Retirada, o campo para a definição da quantia e dois botões de interação, sendo eles o botão de retorno para a tela anterior (Tela de Ações) e o botão para confirmar a transação.

---
---

# Sobre os Requisitos Adicionais

## Salvamento do Usuário, data e hora e exibição do Email

O salvamento do E-mail do usuário e da data e hora são feitos através do Local Storage. Uma função é utilizada para recuperar o dado do E-mail e exibi-lo da tela.

---

## Validação de email e senha

A validação do E-mail é feita atrvés de um _REGEX_ que verifica a existência do @ e da string ".com" além de verificar a existencia de pelo menos 1 caracter antes e depois do @, enquanto que a validação da senha é feita através da propriedade _Length_ onde a senha deve obrigatoriamente ter no mínimo 8 caractéres.

---

## Testes Unitários

---

## Tratamento de Erros

Há Tratamento de erros na Tela de ações: com a verificação das quantias de cada ação, nas Telas de Compra/Venda de ações: com a verificação de compra ou venda da ação em relação a quantidade e também ao saldo da conta, e por fim, na Tela da Conta Pessoal: com a verificação do método de Transação e da quantia inserida em relação a este método e ao saldo da conta.

---
---

# Sobre a estilização da Aplicação com Styled Components

Para a estilização e formatação do _CSS_ desta aplicação, foi utilizado a biblioteca _Styled Components_, que possibilita a escrita de códigos CSS dentro do _JavaScript_, além de possibilitar a utilização de um componente estilizado em mais de uma situação. A renomeação de Tag contribui muito neste processo, tornando o código mais limpo e entendível.

---
---

# Sobre o Deploy

O deploy desta aplicação foi feito utilizando a plataforma [Vercel](https://vercel.com) e a aplicação pode ser acessada através deste Link [Pocket Stock](https://pocket-stock.vercel.app)

