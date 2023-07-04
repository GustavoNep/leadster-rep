# Teste Leadster Front End

## Decisões

O projeto era criar uma Landing usando Next Js e Styled components. Foi nos dado um Layout padrão em PNG sem qualquer medida auxiliar e pra isso tivemos que pensar nossos proprios padrões de medidas designs o que foi bem interessante e mais desafiador do que apenas ter o projeto pronto no Figma. Utilizei Typescript e resolvi trabalhar me inspirando no design que foi me dado e também pegando alguns aspectos existentes da propria Leadster.

## Como Organizei ?

A principio tive que tratar os erros de compatibilidade do Styled Components com Next Js crinado meu arquivo registry.tsx que garante o tratamento certo do styled components no Server Side rendering e também no lado do cliente.
Para uma melhor organização e otimização do meu código resolvi trabalhar com a pasta App do Next js 13. Nesta pasta posso criar um arquivo page.tsx aonde seria a pagina principal da minha aplicação. Fiz o uso do react context para guardar estado globais dos meus botões. Utilizei Typescript para fazer o código tipado e criei um arquivo de Types que descreve o tipo do objeto que seria os "Videos" listados, na outra pasta contants eu pude guardar esses objetos que estão sendo imprimidos dinâmicamente nos meus components de CardModel,VideoRow e também em minhas páginas , caso mude algo nas constants mudará automaticamente nos componentes também.

## Como Rodar ? 

Para rodar o projeto basta copiar estes arquivos para seu computador logo em seguida instalar as depências com `yarn install` e depois `yarn dev` para rodar o projeto.
Requisitos:
- Node: v18.16.0
- Yarn: 1.22.17

![Leadster](./Screenshot_1.png)
