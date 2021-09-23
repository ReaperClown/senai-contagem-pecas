const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pecas = 0;

const menu = {
  0: "0 = Encerrar o sistema e mostrar quantidade atual de peças." + "\n",
  1:
    "1 = Acrescentar peças à contagem, '1' para adicionar uma e '2' para adicionar duas." +
    "\n",
  2: "2 = Mostrar quantidade de peças." + "\n",
};

let menuKeys = Object.keys(menu);

function restart() {
  rl.question("Qual opção deseja selecionar? ", function (answer) {
    if (answer === "0") {
      closeMenu();
    } else if (answer === "1") {
      addPieces();
    } else if (answer === "2") {
      showPieces();
    } else {
      console.log("Essa opção não existe no menu.");
      console.log("Reiniciando o sistema...");
      restart();
    }
  });
}

function closeMenu() {
  console.log("\nVocê escolheu encerrar.");
  console.log(`Quantidade de peças = ${pecas}`);
  console.log("Até a próxima!");
  rl.close();
}

function addPieces() {
  rl.question(
    "\nVocê escolheu adicionar peças, digite 1 para adcionar uma peça e 2 para adicionar duas peças. Quantas peças quer adicionar? ",
    function (answer) {
      if (answer === "1" || answer === "2") {
        console.log(`Peças adicionadas = ${answer}`);
        pecas = pecas + parseInt(answer);
        console.log(`Quantidade de peças = ${pecas}` + "\n");
        console.log("Retornando ao menu...");
        restart();
      } else {
        console.log("Não posso adicionar essa quantidade de peças.");
        console.log("Reiniciando o sistema...");
        restart();
      }
    }
  );
}

function showPieces() {
  console.log("\nVocê escolheu mostrar quantidade de peças.");
  console.log(`Quantidade de peças = ${pecas}`);
  console.log("Retornando ao menu...");
  restart();
}

function welcome() {
  console.log(
    "\nBem vindo ao sistema de contagem de peças! Para começar escolha uma opção do menu a seguir: " +
      "\n"
  );

  for (let i = 0; i < menuKeys.length; i++) {
    let fullMenu = menu[menuKeys[i]];
    console.log(fullMenu);
  }

  rl.question("Qual opção deseja selecionar? ", function (answer) {
    if (answer === "0") {
      closeMenu();
    } else if (answer === "1") {
      addPieces();
    } else if (answer === "2") {
      showPieces();
    } else {
      console.log("Essa opção não existe no menu.");
      console.log("Reiniciando o sistema...");
      restart();
    }
  });
}

welcome();
