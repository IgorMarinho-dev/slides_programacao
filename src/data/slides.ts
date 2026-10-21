import type { Slide } from "../types/slide";

export const slides: Slide[] = [
  { title: "cover" },
  {
    title: "O que vamos aprender hoje",
    pts: [
      "Estruturas condicionais: if e else",
      "Operadores relacionais (comparar valores)",
      "Operadores lógicos: and, or e not",
      "Listas e os métodos mais usados",
      "Exercícios para praticar tudo isso",
    ],
  },
  {
    title: "Estrutura condicional: if",
    sub: "É assim que o programa toma decisões.",
    pts: [
      "No dia a dia você decide: se está chovendo, leva guarda-chuva.",
      "O if testa uma condição. Se ela for verdadeira (True), o bloco roda.",
      "Depois dos dois-pontos, o bloco fica com recuo (4 espaços).",
    ],
    code: `idade = 15\nif idade >= 14:\n    print("Você pode entrar!")`,
    out: "Você pode entrar!",
  },
  {
    title: "if e else",
    sub: "else quer dizer “senão”.",
    pts: [
      "O else roda quando a condição do if é falsa (False).",
      "Só um dos dois blocos é executado, nunca os dois.",
      "O else não tem condição: ele pega todo o resto.",
    ],
    code: `nota = 5\nif nota >= 6:\n    print("Aprovado!")\nelse:\n    print("Recuperação")`,
    out: "Recuperação",
  },
  {
    title: "Operadores relacionais",
    sub: "Comparam dois valores e respondem True ou False.",
    pts: [
      "==  igual     !=  diferente",
      ">  maior      <  menor",
      ">=  maior ou igual     <=  menor ou igual",
      "Cuidado: = guarda um valor, == compara dois valores.",
    ],
    code: `a = 7\nprint(a == 7)\nprint(a != 7)\nprint(a > 10)\nprint(a <= 7)`,
    out: "True\nFalse\nFalse\nTrue",
  },
  {
    title: "Operadores lógicos",
    sub: "Juntam ou invertem condições.",
    pts: [
      "and (e): as duas condições precisam ser verdadeiras.",
      "or (ou): basta uma condição ser verdadeira.",
      "not (não): inverte o resultado, True vira False.",
    ],
    code: `idade = 16\ningresso = True\nif idade >= 14 and ingresso:\n    print("Pode entrar")\nif not ingresso:\n    print("Compre o ingresso")`,
    out: "Pode entrar",
  },
  {
    title: "Juntando tudo",
    sub: "if, else, relacionais e lógicos trabalhando juntos.",
    pts: [
      "No primeiro exemplo, as duas condições precisam ser verdadeiras.",
      "No segundo, basta que o dia seja sábado ou domingo.",
    ],
    code: `nota = 8\nfaltas = 3\nif nota >= 6 and faltas <= 10:\n    print("Aprovado")\nelse:\n    print("Reprovado")\n\ndia = "sábado"\nif dia == "sábado" or dia == "domingo":\n    print("Fim de semana!")\nelse:\n    print("Dia de aula")`,
    out: "Aprovado\nFim de semana!",
  },
  {
    title: "Listas",
    sub: "Várias informações guardadas numa variável só.",
    pts: [
      "A lista fica entre colchetes [ ] e os itens são separados por vírgula.",
      "Cada item tem uma posição (índice), e a contagem começa no 0.",
      "Podemos ter textos, números ou os dois na mesma lista.",
    ],
    code: `frutas = ["maçã", "uva", "pera"]\nprint(frutas[0])\nprint(frutas)`,
    out: "maçã\n['maçã', 'uva', 'pera']",
  },
  {
    title: "append() e insert()",
    sub: "Adicionando itens.",
    pts: [
      "append(item): coloca o item no final da lista.",
      "insert(posição, item): coloca o item na posição escolhida e empurra os outros.",
    ],
    code: `nomes = ["Ana", "Bia"]\nnomes.append("Caio")\nnomes.insert(1, "Davi")\nprint(nomes)`,
    out: "['Ana', 'Davi', 'Bia', 'Caio']",
  },
  {
    title: "remove(), pop() e clear()",
    sub: "Tirando itens.",
    pts: [
      "remove(item): apaga o item que você indicar (o primeiro que achar).",
      "pop(): tira o último item e devolve ele para você.",
      "clear(): esvazia a lista inteira.",
    ],
    code: `nums = [10, 20, 30, 40, 50]\nnums.remove(20)\nultimo = nums.pop()\nprint(ultimo, nums)\nnums.clear()\nprint(nums)`,
    out: "50 [10, 30, 40]\n[]",
  },
  {
    title: "len(), count() e index()",
    sub: "Descobrindo informações.",
    pts: [
      "len(lista): quantos itens a lista tem.",
      "lista.count(x): quantas vezes o x aparece.",
      "lista.index(x): em que posição o x está.",
    ],
    code: `notas = [7, 9, 7, 10]\nprint(len(notas))\nprint(notas.count(7))\nprint(notas.index(9))`,
    out: "4\n2\n1",
  },
  {
    title: "sort() e reverse()",
    sub: "Organizando a lista.",
    pts: [
      "sort(): coloca os itens em ordem crescente.",
      "reverse(): inverte a ordem atual da lista.",
      "Juntos, sort() e reverse() deixam a lista em ordem decrescente.",
    ],
    code: `n = [5, 2, 9, 1]\nn.sort()\nprint(n)\nn.reverse()\nprint(n)`,
    out: "[1, 2, 5, 9]\n[9, 5, 2, 1]",
  },
  {
    title: "Resumo dos métodos de lista",
    pts: [
      "append(x): adiciona no final",
      "insert(i, x): adiciona na posição i",
      "remove(x): apaga o item x",
      "pop(): tira o último item",
      "clear(): esvazia a lista",
      "len(lista): conta os itens",
      "sort(): ordena",
      "reverse(): inverte",
      "count(x): conta quantas vezes x aparece",
      "index(x): mostra a posição de x",
    ],
  },
  {
    title: "Exercícios 1: decisões",
    sub: "Dica: input() devolve texto. Use int(input(...)) para números.",
    ex: true,
    pts: [
      "Peça a idade. Mostre “Maior de idade” se for 18 ou mais; senão, “Menor de idade”.",
      "Leia um número e diga se ele é par ou ímpar. Dica: use o resto da divisão, %.",
      "Leia duas notas e calcule a média. Mostre “Aprovado” se for maior ou igual a 6; senão, “Reprovado”.",
    ],
  },
  {
    title: "Exercícios 2: operadores lógicos",
    ex: true,
    pts: [
      "Leia um número e diga se ele está entre 1 e 10 (use and).",
      "Leia uma letra e diga se é “a” ou “e” (use or); senão, mostre “Outra letra”.",
      "O parque exige idade >= 12 and altura >= 1.40. Leia os dois valores e mostre “Pode entrar” ou “Não pode”. Depois refaça usando not.",
    ],
  },
  {
    title: "Exercícios 3: listas",
    ex: true,
    pts: [
      "Crie uma lista com 5 números. Use append para colocar 100 no final e insert para colocar 0 no começo. Mostre a lista.",
      "Com [4, 8, 15, 16, 23, 42]: mostre o len, use remove no 15 e depois pop. Mostre a lista final.",
      "Com [3, 1, 3, 2, 3]: mostre quantas vezes o 3 aparece (count) e a posição do 2 (index). Depois use sort e reverse.",
    ],
  },
  {
    title: "Exercícios 4: desafios",
    sub: "Aqui você mistura tudo o que aprendeu.",
    ex: true,
    pts: [
      "Leia 3 notas e guarde numa lista com append. Use sort e mostre a menor e a maior nota. Dica: a maior é lista[len(lista) - 1].",
      "Crie cardapio = [\"pizza\", \"sushi\", \"taco\"]. Leia um prato. Se cardapio.count(prato) for maior ou igual a 1, mostre “Está no cardápio”; senão, “Não temos”.",
      "Crie a lista vazia convidados. Leia nome e idade. Se a idade for menor que 14 or maior que 17, mostre “Fora da faixa”; senão, adicione o nome com append. Repita para 2 pessoas e mostre a lista e o len.",
    ],
  },
];