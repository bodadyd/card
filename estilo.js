document.getElementById('btnConfirmar').addEventListener('click', function() {
    document.getElementById('sectionC').style.display = 'block';
}); 


var url = new URL(window.location.href);
//// Obtener el parámetro 'valor' de la URL
var valor = url.searchParams.get("invitado");
//// Mostrar el valor en el elemento HTML
document.getElementById("invitadoUrl").textContent = valor;

// Valores de los invitados
var invitados = [
    {nombre:"TiaRuca",valor:"Ruth Portilla"}
    ,{nombre:"CarlosHernan",valor:"Carlos Hernan Portilla"}
    ,{nombre:"AhidaLola",valor:"Ahida Lola Portilla e hijo"}
    ,{nombre:"AdolfoGomezJurado",valor:"Adolfo GomezJurado y esposa"}
    ,{nombre:"EstherPortilla",valor:"Esther Portilla e hija"}
    ,{nombre:"MarcelRodriguez",valor:"Marcel Rodríguez"}
    ,{nombre:"DavidRodriguez",valor:"David Rodríguez"}
    ,{nombre:"PilarPortilla",valor:"Pilar Portilla y esposo"}
    ,{nombre:"EsperanzaPortilla",valor:"Esperanza Portilla y esposo"}
    ,{nombre:"AlejandroPortilla",valor:"Alejandro Portilla, esposa e hijas"}
    ,{nombre:"MonicaPortilla",valor:"Monica Portilla y esposo"}
    ,{nombre:"FannyPortilla ",valor:"Fanny Portilla e hijo"}
    ,{nombre:"JuanCarlosEscandón",valor:"Juan Carlos Escandón y esposa"}
    ,{nombre:"JavierEscandón",valor:"Javier Escandón, esposa e hija"}
    ,{nombre:"CarlosEfrain",valor:"Carlos Efrain Portilla, esposa e hijo"}
    ,{nombre:"SantiagoPortilla",valor:"Santiago Portilla y esposa"}
    ,{nombre:"CarlosPortilla",valor:"Carlos Andrés Portilla y esposa"}
    ,{nombre:"JoseEscandon",valor:"Jose Escandón y esposa"}
    ,{nombre:"MariaEsther",valor:"Maria Esther Hurtado e hija"}
    ,{nombre:"AdrianaPortilla",valor:"Adriana Portilla e hijo"}
    ,{nombre:"JoseMaria",valor:"Jose Maria Portilla y esposo"}
    ,{nombre:"LuzDeLeon",valor:"Luz de León"}
    ,{nombre:"GilbertoJurado ",valor:"Gilberto Jurado y esposa"}
    ,{nombre:"FranciscoJurado",valor:"Francisco Jurado y esposa"}
    ,{nombre:"JackelineJurado",valor:"Jackeline Jurado y esposo"}
    ,{nombre:"MariaLuisa",valor:"Maria Luisa Amador y esposa"}
    ,{nombre:"JenniferCardenas",valor:"Jennifer Cardenas"}
    ,{nombre:"GustavoGomezJurado",valor:"Gustavo GomezJurado"}
    ,{nombre:"GermanJurado",valor:"German Jurado y familia"}
    ,{nombre:"CarolinaEscandon",valor:"Carolina Escandon y esposo"}
    ,{nombre:"NidiaPatino",valor:"Nidia Patiño y familia"}
    ,{nombre:"JorgeGiron",valor:"Jorge Giron, esposa e hijos"}
    ,{nombre:"AlfonsoPatiñoFamilia",valor:"Alfonso Patiño y familia"}
    ,{nombre:"FerchaViteri",valor:"Ricardo Perez, esposa e hija"}
    ,{nombre:"FlorPatiño",valor:"Orlando Cisneros y esposa"}
    ,{nombre:"IgnacioCoral",valor:"Ignacio Coral, esposa e hijo"}
    ,{nombre:"LidaPatiño",valor:"Fabian Lopez, esposa e hijo"}
    ,{nombre:"FabiLopez",valor:"Fabian Lopez y esposa"}
    ,{nombre:"LuisPatiño",valor:"Luis Alfonso Patiño y familia"}
    ,{nombre:"DiegoGamez",valor:"Diego Gámez y esposa"}
    ,{nombre:"AidaGamez",valor:"Francisco Melo y familia"}
    ,{nombre:"ClaudiaMelo",valor:"Mauricio Muñoz, esposa e hijas"}
    ,{nombre:"MarioGamez",valor:"Mario Gamez"}
    ,{nombre:"LorenaGamez",valor:"Lorena Gámez e hija"}
    ,{nombre:"MarisaGamez",valor:"Maria Isabel Gámez "}
    ,{nombre:"MargaritaSolarte",valor:"Maria Margarita Solarte y esposo"}
    ,{nombre:"MichaelBorda",valor:"Michael Borda"}
    ,{nombre:"JhonBurgos",valor:"Jhon Burgos "}
    ,{nombre:"DianaRomero",valor:"Diana Romero"}
    ,{nombre:"JairoCaicedo",valor:"Jairo Caicedo "}
    ,{nombre:"OrlandoCisnerosP",valor:"Orlando Cisneros Patiño y esposa"}
    ,{nombre:"LilianaOrdoñez",valor:"Liliana Ordoñez e hijo"}
    ,{nombre:"XiomaraBecerra",valor:"Xiomara Becerra y esposo"}
    ,{nombre:"LauraCisneros",valor:"Alex Marin, Esposa e hija"}


];

// Función para homologar el valor del parámetro 'invitado'
function homologarValorInvitado() {
    var url = new URL(window.location.href);
    
    // Obtener el parámetro 'invitado' de la URL
    var nombreInvitado = url.searchParams.get("invitado");

    // Buscar el objeto correspondiente en el array 'invitados'
    var invitadoHomologado = invitados.find(function(invitado) {
        return invitado.nombre === nombreInvitado;
    });

    // Mostrar el valor homologado en el elemento HTML
    if (invitadoHomologado) {
        document.getElementById("invitadoUrl").textContent = invitadoHomologado.valor;
    } else {
        document.getElementById("invitadoUrl").textContent = "Invitado no encontrado";
    }
}

// Llamar a la función para homologar y mostrar el valor
homologarValorInvitado();


function adaptFontSize() {
    const inputText = document.getElementById("invitadoUrl").textContent;
    const textLength = inputText.length;
  
    let fontSizeMin;
    let fontSizeMax;
  
    if (textLength <= 15) {
      fontSizeMax = '3.5rem';  // Texto corto, tamaño de letra grande
      fontSizeMin = '2.7rem';
    } else if (textLength <= 25) {
      fontSizeMax = '3rem';  // Texto moderado, tamaño mediano
      fontSizeMin = '2.3rem';
    } else {
      fontSizeMax = '2.79rem';  // Texto muy largo, tamaño mínimo
      fontSizeMin = '2rem';
    }
  
    const txtInvitadoElement = document.querySelector('.txtInvitado');
    txtInvitadoElement.style.setProperty('font-size', `clamp(${fontSizeMin}, 5vw, ${fontSizeMax})`);
  }

window.onload = adaptFontSize;
document.getElementById("invitadoUrl").addEventListener("input", adaptFontSize);