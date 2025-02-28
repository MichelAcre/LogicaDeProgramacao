console.log(
    "----------------------------------Cara ou Coroa------------------------------------------"
  );
  var contador = 1;
  var vitoria = 0;
  var derrota = 0;
  do {
    let moeda = Math.random() * 2;
    if (moeda > 1) {
      console.log("É cara!");
      vitoria++;
    } else {
      console.log("É coroa!");
      derrota++;
    }
    contador++;
  } while (contador <= 3);
  
  console.log("------------------------------------");
  console.log("             PLACAR                 ");
  console.log("------------------------------------");
  console.log(`Nº de vitórias: ${vitoria}`);
  console.log(`Nº de derrotas: ${derrota}`);
  console.log("------------------------------------");