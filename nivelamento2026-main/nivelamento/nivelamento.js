//1. exiba a "menagen ola mundo"
console.log("ola mundo")

// 2. crie uma variavel com seu nome e exiba seu nome 
let nome = "gustavo"
console.log(nome);

// 3.some dois numeros e exiba o resultado

let soma = 5 + 3;
console.log(soma);

// 4.ubtraia dois numeros e exiba o resultado

let soma2 = 5 - 3;
console.log(soma2);


//descubra o resto a ivisao de um numero por outro

let resto = 5 * 3;
console.log(resto);

//crie uma variavel boleana e exiba seu valor

let estachovendo =true;
console.log(etachovendo);

//verifique se um numero e maior que o outro e exiba o resultado
  
let maiorque=18 > 22;
console.log(maiorque);

// ==================== ATIVIDADES COM FOR ====================

// 1: Exiba os números de 1 a 10 usando for
for(let i=1; i<=10; i++){
    console.log(i);}
    
    // 2: Exiba os números de 10 até 1 em ordem decrescente
    for(let i=10; i>=1; i--){
    console.log(i);}
    
    // 3: Exiba todos os números pares de 2 a 20
    console.log("\n==== Números pares até 20 ====");
    for(let i=2; i<=20; i= i + 2){
    console.log(i);}
    
    // 4: Exiba a tabuada do número 5 (5x1 até 5x10);
    console.log("\n=== Tabuada do 5 ====");
    for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`);}
    
    // 5: Calcule e exiba a soma dos números de 1 até 50
    console.log("\n=== Soma de 1 a 50 =====");
    let sooma = 0;
    for(let i =1; i<=50; i++){
    soma = soma + i;}
    console.log(`A soma é: ${soma}`);
    
    // 6: Conte de 1 até o número 8 (use for);
    for(let i=1; i<=8; i++){
    console.log(i);}
    
    // 7: Exiba todos os números ímpares de 1 a 15
    for(let i= 1; i<=15; i= i +2){
    console.log(i);}
    // 8: Exiba o resultado da multiplicação de 1 a 10 por 2
    for(let i=1; i<=10; i++){
    console.log(`${i} x 2 ${i*2}`);}
    // 9: Exiba os números de 5 em 5, de 5 até 50
    for(let i=5; i<=50; i = i+ 5){
    console.log(i);}
    // 10: Calcule e exiba o quadrado dos números de 1 a 10
    for(let i =1; i<=10; i++){
    console.log(`${i}² = ${i*i}`);}
    
    
    // ==================== ATIVIDADES COM IF ====================
    
    // 11: Verifique se o número 15 é positivo e exiba uma mensagem
    let numero =-1;
    if(numero >0){
    console.log(`${numero} é positivo`);
    }else{
    console.log(`${numero} é negativo`);
    }
    
    
    // 12: Verifique se uma pessoa com 17 anos é maior de idade
    
    let idade =17;
    if(idade >=18){
    console.log("Maior de idade");
    }else{
    console.log("Menor de idade");
    }
    
    
    // 13: Verifique se o número 7 é par ou ímpar
    
    // 14: Verifique se a nota 7.5 é suficiente para aprovação (média 6)
    let nota =7.5;
    if(nota>=6){
    console.log("Aprovado");}
    else{console.log("Reprovado");}
    
    // 15: Verifique se o número 8 é maior que 10
    let num =8;
    if(num>=10){
    console.log(`${num} é maior do 10`);
    
    }else{
    console.log("menor");
    }
    
    // 16: Verifique se o número 0 é igual a zero
    
    // 17: Compare os números 10 e 20 e diga qual é o maior
    
    // 18: Verifique se uma pessoa de 16 anos pode votar (16+ pode votar)
    
    // 19: Verifique se o número 25 está entre 10 e 30
    
    // 20: Verifique se "sábado" é dia útil (segunda a sexta)
    
    
    // ==================== ATIVIDADES COM FUNÇÕES ====================
    
    // 21: Crie uma função que exiba "Olá, mundo!" quando for chamada
    
    
    // 23: Crie uma função que receba dois números e retorne a soma
    
    // 24: Crie uma função que receba um número e retorne o dobro
    
    // 25: Crie uma função que receba um número e diga se ele é par
    
    // 26: Crie uma função que receba duas notas e retorne a média
    
    // 27: Crie uma função que receba um número e retorne ele ao quadrado
    
    // 28: Crie uma função que converta Celsius para Fahrenheit
    
    // 29: Crie uma função que receba três números e retorne a multiplicação
    
    // 30: Crie uma função que receba um número e retorne o sucessor dele
    
    
    // ==================== ATIVIDADES COM ARRAY ====================
    
    // 31: Crie um array com os números 10, 20, 30, 40 e exiba todos
    
    
    // 32: Crie um array com 5 frutas e exiba a primeira fruta
    let frutas = ["maça","banana","laranja","uva","manga"];
    console.log(frutas[0]);
    
    
    // 33: Adicione o número 50 no final do array [10, 20, 30, 40]
    let arr = [10,20,30,40];
    
    
    // 34: Remova o último elemento do array [1, 2, 3, 4, 5]
    
    // 35: Exiba quantos elementos tem o array [5, 10, 15, 20]
    
    // 36: Some todos os números do array [2, 4, 6, 8]
    console.log("\n ====multiplicar")
    let array3 =[1,2,3,4];
    let multiplicar=[];
    for (let  i= 0;i<array3.length; i ++){
        multiplicar.push(array3[1] * 2);}
    console.log(multiplicar);
    
    // 37: Multiplique cada elemento do array [1, 2, 3, 4] por 2
    
    // 38: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
    
    // 39: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]
    
    // 40: Exiba o último elemento do array [100, 200, 300, 400, 500]
    
    
    // ==================== ATIVIDADES COM MATRIZ ====================
    
    // 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda
    
    // 42: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]
    
    // 43: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]
    
    // 44: Some todos os números da matriz [[2, 4], [6, 8]]
    
    // 45: Crie uma matriz 3x3 com números de 1 a 9
    
    // 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]
    
    // 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10
    
    // 48: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]
    
    // 49: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]
    
    // 50: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2
    
    
    // ==================== ATIVIDADES COM OBJETOS ====================
    
    // 51: Crie um objeto pessoa com nome "Ana" e idade 25
    
    // 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
    
    // 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
    
    // 54: Altere a idade do objeto {nome: "João", idade: 18} para 19
    
    // 55: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
    
    // 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
    
    // 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
    
    // 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]
    
    // 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"
    
    // 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos