function consulta(dezena) {


  let grupo = Math.floor(dezena / 4) + 1;
  switch (grupo) {
    case 1:
     return "Avestruz"
    case 2:
      return "Águia";
    case 3:
      return "Burro";
    case 4:
      return "Borboleta";
    case 5:
      return "Cachorro";
    case 6:
      return "Cabra";
    case 7:
      return "Carneiro";
    case 8:
      return "Camelo";
    case 9:
      return "Cobra";
    case 10:
      return "Coelho";
    case 11:
      return "Cavalo";
    case 12:
      return "Elefante";
    case 13:
      return "Galo";
    case 14:
      return "Gato";
    case 15:
      return "Jacaré";
    case 16:
      return "Leão";
    case 17:
      return "Macaco";
    case 18:
      return "Porco";
    case 19:
      return "Pavão";
    case 20:
      return "Perú";
    case 21:
      return "Touro";
    case 22:
      return "Tigre";
    case 23:
      return "Urso";
    case 24:
      return "Veado";
    case 25:
      return "Vaca";
    default:
      return "Dezena inválida";
  }
}
function mostrarAnimal() {
  let dezena = parseInt(document.getElementById("dezena").value);
  let animal = consulta(dezena);
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (animal == "Dezena inválida") {
    resultado.innerHTML = "<span class='invalido'>Dezena inválida</span>";
    document.getElementById("imagem").innerHTML = "";
  } else {
    let nomeAnimal = "<span class='nome-animal'>" + animal + "</span>";
    let imagemAnimal = "<img src='imagens/" + animal.toLowerCase() + ".jpg' alt='" + animal + "'>";
    resultado.innerHTML = nomeAnimal;
    document.getElementById("imagem").innerHTML = "<div class='imagem-animal'>" + imagemAnimal + "</div>";
  }
}
function mostrarDezenas() {
  let animal = document.getElementById("animal").value;
  let dezenas = consultarDezenas(animal);
  let resultado = document.getElementById("resultado");

  if (dezenas.length === 0) {
    resultado.innerHTML = "<span class='invalido'>Animal inválido</span>";
    document.getElementById("imagem").innerHTML = "";
  } else {
    let listaDezenas = dezenas.join(", ");
    let nomeAnimal = "<span class='nome-animal'>" + animal + "</span>";
    let imagemAnimal = "<img src='imagens/" + animal.toLowerCase() + ".jpg' alt='" + animal + "'>";
    resultado.innerHTML = nomeAnimal + " Representa as dezenas: " + listaDezenas;
    document.getElementById("imagem").innerHTML = "<div class='imagem-animal'>" + imagemAnimal + "</div>";
  }
}
function consultarDezenas(animal) {
  switch (animal) {
    case "Avestruz":
      return ["01", "02", "03", "04"];
    case "Águia":
      return ["08", "05", "06", "07"];
    case "Burro":
      return ["12", "09", "10", "11"];
    case "Borboleta":
      return ["16", "13", "14", "15"];
    case "Cachorro":
      return ["20", "17", "18", "19"];
    case "Cabra":
      return ["24", "21", "22", "23"];
    case "Carneiro":
      return ["28", "25", "26", "27"];
    case "Camelo":
      return ["32", "29", "30", "31"];
    case "Cobra":
      return ["36", "33", "34", "35"];
    case "Coelho":
      return ["40", "37", "38", "39"];
    case "Cavalo":
      return ["44", "41", "42", "43"];
    case "Elefante":
      return ["48", "45", "46", "47"];
    case "Galo":
      return ["52", "49", "50", "51"];
    case "Gato":
      return ["53", "54", "55", "56"];
    case "Jacaré":
       return ["57", "58", "59", "60"];
    case "Leão":
       return ["61", "62", "63", "64"];
    case "Macaco":
       return ["65","66","67","68"];
    case "Porco":
       return ["69","70","71","72"];
    case "Pavão":
       return ["73","74","75","76"];
    case "Perú":
       return ["77","78","79","80"];
    case "Touro":
       return ["81","80","83","84"];
    case "Tigre":
       return ["85","86","86","88"];
    case "Urso":
       return ["89","90","91","92"];
    case "Veado":
       return ["97","94", "95", "96"];
    case "Vaca":
       return ["97","98","99","00"];
      default:
        return[]
  }
}


