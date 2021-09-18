# JavaScript ES6 Essencial

##### ECMAScript

Uma especificação da Linguagem de programação da Ecma international, servindo como base para a implementação de outras linguagens Scripts como o Javascript, jScript e actionScript.

##### TC39

São os colaboradores que se reunem para elaborar essas decisões. Ele mantém e atualiza os padrões do ECMAScript.

#### JavaScript

É uma linguagem **Interpretada de Tipagem Fraca** (Não há verificação em todas as operações do Javascript) e **dinâmica** (Você não precisa explicitar o tipo da variável no momento da criação).
O código é executado de cima para baixo e o resultado da execução é imediatamente retornado.

**Exemplo de Código Javascript em tipagem Fraca:**
var meuNumero = 20;
var meuTexto = 'Exemplo';

console.log (meuNumero + meuTexto);

E ele irá concatenar ao invés de somar.

**Exemplo em Python (Linguagem Dinâmica mas de Tipagem Forte)**

meu_numero = 30
meu_texto = 'Exemplo'

print(meu_numero + meu_texto)

Pelo python ser uma linguagem forte você terá um erro no mesmo código.

##### Typescript

Possui como se fosse um validador de código.

####

Currying Para cada Parâmetro posso retornar uma função (que iria repetir esse parâmetro)

Ex: Função Soma que irá receber 4 parâmetros

function soma(a, b){
return a + b;
}

soma (2, 2);
soma (2, 3);
soma (2, 4);
soma (2, 5);

O parâmetro 2 está repetindo, usando o método currying temos a função:
function soma(a) {
return fuction(b) {
return a + b;
}
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(2));
console.log(soma2(4));
console.log(soma2(5));

##### Hoisting

Pode ser separado em dois tipos em variáveis (Elevado apenas a função da sua variável) e Funções (Elevado como um todo)
Levantar ou Suspender Algo.

**Exemplos Seguem em pasta.**

##### Imutabilidade

Um conceito de linguagem funcional que possui dados que não se alteram, a variável não irá mudar e caso você precisa alterar ela você irá criar uma nova. Ao invés de se mudar um array, você irá criar um novo array baseado no que você está querendo alterar, pegando todo o conteúdo desse array e concatenando um novo. E caso remova ele, você irá filtrar. Igualmente um objeto, ele nunca será atualizado, você irá copiar e alterar o que quer dele.

##### Variáveis

Temos três tipos que podemos armazenar uma memória

Var
Let
Const

Escopo de bloco

{
**Escopo de bloco** (Sempre que tivemos o fechamento em chaves)
}

**Escopo Global** (Sem fechamento)

function test() {
**escopo de função**
}

# Links Úteis

[ECMAScript e TC39](https://github.com/tc39)
[TC39 Proposals](https://github.com/tc39/proposals)
[Babel](https://babeljs.io)
[Typescript](https://www.typescriptlang.org)
[Flow](https://flow.org/en/)
