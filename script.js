const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let peca1 = 0;
let peca2 = 0;
let pecas = peca1 + peca2;

const menu = {
  0: "0 = Encerrar o sistema e mostrar quantidade atual de peças." + "\n",
  1:
    "1 = Acrescentar peças à contagem, digite 1 para adicionar a peça A ou 2 para adicionar a peça B." +
    "\n",
  2: "2 = Mostrar a quantidade total de peças." + "\n",
};

let menuKeys = Object.keys(menu);

function showMenu() {
  for (let i = 0; i < menuKeys.length; i++) {
    let fullMenu = menu[menuKeys[i]];
    console.log("\n" + fullMenu);
  }

  rl.question("\nQual opção deseja selecionar? ", function (answer) {
    if (answer === "0") {
      closeMenu();
    } else if (answer === "1") {
      addPieces();
    } else if (answer === "2") {
      showPieces();
    } else if (answer === "9") {
      showMenu();
    } else {
      console.log("Essa opção não existe no menu.");
      console.log("Reiniciando o sistema...");
      restart();
    }
  });
}

function restart() {
  rl.question(
    "Qual opção deseja selecionar? (Digite 9 para ver o menu novamente): ",
    function (answer) {
      if (answer === "0") {
        closeMenu();
      } else if (answer === "1") {
        addPieces();
      } else if (answer === "2") {
        showPieces();
      } else if (answer === "9") {
        showMenu();
      } else {
        console.log("Essa opção não existe no menu.");
        console.log("Reiniciando o sistema...");
        restart();
      }
    }
  );
}

function closeMenu() {
  console.log("\nVocê escolheu encerrar.");
  console.log(
    `Quantidade de peças A = ${peca1}, quantidade de peças B = ${peca2}, total de peças = ${pecas}`
  );
  console.log("Até a próxima!");
  rl.close();
}

function addPieces() {
  rl.question(
    "\nVocê escolheu adicionar peças, digite 1 para adcionar a peça A ou 2 para adicionar a peça B. Qual peça quer adicionar? ",
    function (answer) {
      if (answer === "1") {
        console.log(`\nPeça adicionada = ${answer} (A)`);
        peca1 = peca1 + parseInt(answer);
        pecas = peca1 + peca2;
        console.log(
          `Quantidade de peças A = ${peca1}, total de peças = ${pecas}` + "\n"
        );
        console.log("Retornando ao menu...");
        restart();
      } else if (answer === "2") {
        console.log(`\nPeça adicionada = ${answer} (B)`);
        peca2 = peca2 + parseInt(answer);
        pecas = peca1 + peca2;
        console.log(
          `Quantidade de peças B = ${peca2}, total de peças = ${pecas}` + "\n"
        );
        console.log("Retornando ao menu...");
        restart();
      } else {
        console.log("Não conheço esta peça.");
        console.log("Reiniciando o sistema...");
        restart();
      }
    }
  );
}

function showPieces() {
  console.log("\nVocê escolheu mostrar quantidade de peças.");
  console.log(
    `\nQuantidade de peças A = ${peca1}, quantidade de peças B = ${peca2}, total de peças = ${pecas}`
  );
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
