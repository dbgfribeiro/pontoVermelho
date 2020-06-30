var back = document.getElementById("back");
var next = document.getElementById("next");

var op0 = document.getElementById("op0");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");

var kind = document.querySelector(".kind-container");
var id = document.querySelector(".id-container");


function submition() {
  if (op0.checked == false && op1.checked == false && op2.checked == false) {
    alert("Por favor escolha uma opção.");
    return false;
  }

  //Carrega a página de identificação do benificiário
  //caso não seja escolhida a opção de requisição interna
  if (op1.checked == true || op2.checked == true) {
    kind.style.display = "none";
    id.style.display = "block";
  }

  //Ativar o botão de back quando se passa para a página seguinte
  if (kind.style.display == "none") {
    back.style.opacity = 1;
    back.style.cursor = "pointer";
    back.onmouseover = function() {
      back.style.opacity = 0.6;
    }
    back.onmouseout = function() {
      back.style.opacity = 1;
    }
  }

  //Voltar atrás
  if (back.style.opacity == 1) {
    back.onclick = function() {
      id.style.display = "none";
      kind.style.display = "block";
    }
  }

}

//SE CARREGAR UMA VEZ LÊ UMA FUNÇÃO SE CARREGAR OUTRA LÊ OUTRA FUNÇÃO


// var n1 = document.getElementById("name1");
// if (n1.value == "") {
//   console.log("oi");
// }
