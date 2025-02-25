const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  const newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
  return "<p>" + pregunta.titulo + "</p>";
}

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
  let respuestas = "";
  //hay 5 respuestas en el enunciado así que el bucle se iterará 5 veces
  for (let i = 0; i < 5; i++) {
    respuestas += imprimeUnaRespuesta(i); //usaremos la funcion de imprimir una 
  }
  return respuestas;
}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here
  //usamos las funciones que declaramos despues
  return imprimeLabel(respuesta) + imprimeInput(respuesta);
}


//output será <label for="william-shatner">William Shatner</label>
function imprimeLabel(respuesta) {
  // Put your code here
  //hay que mirar el output esperado y coger cada "porcion" del codigo, enlazando con ${}
  return `<label for=${pregunta.respuestas[respuesta].id}>${pregunta.respuestas[respuesta].label}</label>`;
}

//output será <input id="blablabla" name="actor" type="radio" value="blablabla">
function imprimeInput(respuesta) {
  // Put your code here
  return `<input id=${pregunta.respuestas[respuesta].id} name=${pregunta.respuestas[respuesta].name} type="radio" value=${pregunta.respuestas[respuesta].value}>`;
  }

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);
/* https://github.com/TheBridge-FullStackDeveloper/fundamentos-de-programacion-kata-constantino-romero.git */