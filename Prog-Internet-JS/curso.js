/*

alert("Meu primeiro JS");


<!DOCTYPE html>
<html lang="pt-br">

  <head>
    <meta charset="UTF-8">
    <title>Minha página</title>
  </head>

  <body>

   /*#################################################
    <script>
      alert("Meu primeiro JS");
    </script>
    ################################################## 

  <h1> Minha Página</h1>
    
  </body>
</html>

*/

/*

//=======================================================
var nome = "Homer J Simpson";

var idade = "50";
var idade2 = "100";

//var idade = 50;
//var idade2 = 100;


// alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
alert(idade + idade2);

var nome = "Homer J Simpson";

//var idade = 50;
//var idade2 = 100;

var idade = "50";
var idade2 = "100";

// alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
alert(idade + idade2);

console.log("Hello World!");

//===============================================================

var frase = "Tokio é a melhor cidade para nos mudarmos.";

console.log(frase);

console.log(frase.replace("Tokio","Tallinn"));

//============================================================

var lista = ["maçã","pêra","laranja"];

console.log(lista);

console.log(lista[1]);

lista.push("Uva");

console.log(lista);

//================================================================

var lista = ["maçã","pêra","laranja"];

console.log(lista);

console.log(lista[1]);

lista.push("Uva");

console.log(lista);

lista.pop();

console.log(lista);

console.log(lista.length);

//========================================================


var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"verde"}];

console.log(frutas);

console.log(frutas[1].cor);

//==========================================================================

var idade;

idade = prompt('Qual sua idade ?');
//var idade = 19;

if (idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Maior de idade');
}

*/


/*
//===============================================================

function clicou() {
  alert("Obrigado por Clicar!");
}

//=================================================================

HTML: 
<p id=agradecimento> </p>

JS:

function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b> Obrigado por Clicar </b>";
  }

*/
//==================================================================


/*
<p id="agradecimento" onclick="redirecionar()"> </p>


<p id="agradecimento" onmouseover="redirecionar()"> Passe o mouse aqui </p>


function trocar() {
  alert("TRocar texto");
  }
  

function redirecionar() {

  window.open("https://globallabs.academy/");

  window.location.href = "https://globallabs.academy/";
 
}

*/

//========================================================================

/*
<p id="mousemove" onmouseover="trocar()"> Passe o mouse aqui </p>


function voltar() {
  MediaElementAudioSourceNode.innerHTML = "Obrigado por passsar o mouse";
}
//=============================================================================


onmouseout="voltar()";


<p id="mousemove2" onmouseover="trocar(this)" onmouseout="voltar(this)"> Passe o mouse aqui </p>

//================================================================================

<body onload="load()">


function load(){
  alert("Página carregada");
}

*/

//===================================================================

<select onchange="funcaoChange(this)">

  <option value="1"> Valor 1 </option>
  <option value="2"> Valor 2 </option>
  <option value="3"> Valor 3 </option>

</select>

function funcaoChange(elemento) {
  console.log(elemento.value)
}





















