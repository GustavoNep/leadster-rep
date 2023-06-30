# Teste Leadster Front End

## Decisões

O projeto era criar uma Landing usando Next Js e Styled components. Foi nos dado um Layout padrão em PNG sem qualquer medida auxiliar e pra isso tivemos que pensar nossos proprios padrões de medidas designs o que foi bem interessante e mais desafiador do que apenas ter o projeto pronto no Figma. Utilizei Typescript e resolvi trabalhar me inspirando no design que foi me dado e também pegando alguns aspectos existentes da propria Leadster.

## Como Organizei ?

A principio tive que tratar os erros de compatibilidade do Styled Components com Next Js. 
O Código foi organizado em algumas pastas principais como Components sendo a pasta que guarda todos components principais da minha página de landing. Também criei uma pasta chamada pages que utiliza as Rotas do proprio next pra navegar entre elas. Criei um component Layout para guardar minha navbar e footer caso seja necessária utilizar em outras páginas.
Utilizei Typescript para fazer o código tipado e criei um arquivo de Types que descreve o tipo do objetio que seria os "Videos" listados, na outra pasta contants eu pude guardar esses objetos que estão sendo imprimidos dinâmicamente nos meus components de CardModel e VideoRow no código, caso mude algo nas constants mudará automaticamente nos componentes também.

## Como Rodar ? 

Para rodar o projeto basta copiar estes arquivos para seu computador logo em seguida instalar as depências com `yarn install` e depois dar `yarn dev` para rodar o projeto.
Requisitos:
- Node: v18.16.0
- Yarn: 1.22.17

![Leadster](./Screenshot_1.png)
