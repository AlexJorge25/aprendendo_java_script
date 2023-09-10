//declarando variaveis usadas
var continuar = 0;
var cont = 0;
var votos = [0, 0, 0, 0];
var nome = ["Alessandra", "Caio", "Geraldo", "Talita"];
var vencedor = 0;
var maior = votos[0]; 

//repetido para que o usuario continue até clicar num 5
while (continuar !== 5) {
    //perguntando a pessoa para votar
    //prompt é como se fosse o ReadLine()
    //ParseInt voces ja sabem serve para transformar o numero de string para inteiro
    continuar = parseInt(prompt("Digite o candidato: 1-Alessandra 2-Caio 3-Geraldo 4-Talita 5-Sair"));
    cont++;//contador de rodadas

    switch (continuar) {
        case 1:
            votos[0]++;//voto para alessadra
            break;
        case 2:
            votos[1]++;//voto para caio
            break;
        case 3:
            votos[2]++;//voto para geraldo
            break;
        case 4:
            votos[3]++;//voto para talita
            break;
        case 5:
            alert("Votação encerrada");// <---auto explicativo
            cont--;//disconta 1 do contador, muito necessario
            break;
        default:
            alert("Candidato inexistente");
    }
    //resultado
    resultadoHTML = "";
    for (var i = 0; i < nome.length; i++) {
        //digita no paragrafo de id=resultado os votos e nomes das pessoas
        resultadoHTML += nome[i] + ": " + votos[i] + " Votos<br>";
    }

    // Encontra o vencedor
    for (var l = 0; l < votos.length; l++) {
        //procura o maior numero do votos
        if (votos[l] > maior) {
            maior = votos[l];
            vencedor = l; // Índice do vencedor no array 'votos'
        }
    }
    // coloca no html o resutado de tudo
    document.getElementById("resultado").innerHTML = resultadoHTML;
    document.getElementById("cont").innerHTML = cont;
    document.getElementById("vencedor").innerHTML = "O maior voto é: " + maior + " e o vencedor é: " + nome[vencedor];
}
