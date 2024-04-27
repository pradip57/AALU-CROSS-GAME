let counter = 0;
let jhela1 = 0;

let jhela2 = 0;
let jhela3 = 0;
let jhela4 = 0;
let jhela5 = 0;
let jhela6 = 0;
let jhela7 = 0;
let jhela8 = 0;
let jhela9 = 0;

let gameL_1_X = 0;
let gameL_1_O = 0;
let gameL_2_X = 0;
let gameL_2_O = 0;
let gameL_3_X = 0;
let gameL_3_O = 0;
let gameL_4_X = 0;
let gameL_4_O = 0;
let gameL_5_X = 0;
let gameL_5_O = 0;
let gameL_6_X = 0;
let gameL_6_O = 0;
let gameL_7_X = 0;
let gameL_7_O = 0;
let gameL_8_X = 0;
let gameL_8_O = 0;
let gameL_9_X = 0;
let gameL_9_O = 0;

let gameAlready = 0;

const aaluCrossMaker1 = () => {
  if (jhela1 == 0) {
    if (counter == 0) {
      document.querySelector(".btn1").innerHTML = "O";
      counter = 1;
      gameL_1_O += 1;
    } else {
      document.querySelector(".btn1").innerHTML = "X";
      counter = 0;
      gameL_1_X += 1;
    }
  }
  jhela1 = 1;
};

const aaluCrossMaker2 = () => {
  if (jhela2 == 0) {
    if (counter == 0) {
      document.querySelector(".btn2").innerHTML = "O";
      counter = 1;
      gameL_2_O += 1;
    } else {
      document.querySelector(".btn2").innerHTML = "X";
      counter = 0;
      gameL_2_X += 1;
    }
  }
  jhela2 = 1;
};

const aaluCrossMaker3 = () => {
  if (jhela3 == 0) {
    if (counter == 0) {
      document.querySelector(".btn3").innerHTML = "O";
      counter = 1;
      gameL_3_O += 1;
    } else {
      document.querySelector(".btn3").innerHTML = "X";
      counter = 0;
      gameL_3_X += 1;
    }
  }
  jhela3 = 1;
};

const aaluCrossMaker4 = () => {
  if (jhela4 == 0) {
    if (counter == 0) {
      document.querySelector(".btn4").innerHTML = "O";
      counter = 1;
      gameL_4_O += 1;
    } else {
      document.querySelector(".btn4").innerHTML = "X";
      counter = 0;
      gameL_4_X += 1;
    }
  }
  jhela4 = 1;
};

const aaluCrossMaker5 = () => {
  if (jhela5 == 0) {
    if (counter == 0) {
      document.querySelector(".btn5").innerHTML = "O";
      counter = 1;
      gameL_5_O += 1;
    } else {
      document.querySelector(".btn5").innerHTML = "X";
      counter = 0;
      gameL_5_X += 1;
    }
  }
  jhela5 = 1;
};

const aaluCrossMaker6 = () => {
  if (jhela6 == 0) {
    if (counter == 0) {
      document.querySelector(".btn6").innerHTML = "O";
      counter = 1;
      gameL_6_O += 1;
    } else {
      document.querySelector(".btn6").innerHTML = "X";
      counter = 0;
      gameL_6_X += 1;
    }
  }
  jhela6 = 1;
};

const aaluCrossMaker7 = () => {
  if (jhela7 == 0) {
    if (counter == 0) {
      document.querySelector(".btn7").innerHTML = "O";
      counter = 1;
      gameL_7_O += 1;
    } else {
      document.querySelector(".btn7").innerHTML = "X";
      counter = 0;
      gameL_7_X += 1;
    }
  }
  jhela7 = 1;
};

const aaluCrossMaker8 = () => {
  if (jhela8 == 0) {
    if (counter == 0) {
      document.querySelector(".btn8").innerHTML = "O";
      counter = 1;
      gameL_8_O += 1;
    } else {
      document.querySelector(".btn8").innerHTML = "X";
      counter = 0;
      gameL_8_X += 1;
    }
  }
  jhela8 = 1;
};

const aaluCrossMaker9 = () => {
  if (jhela9 == 0) {
    if (counter == 0) {
      document.querySelector(".btn9").innerHTML = "O";
      counter = 1;
      gameL_9_O += 1;
    } else {
      document.querySelector(".btn9").innerHTML = "X";
      counter = 0;
      gameL_9_X += 1;
    }
  }
  jhela9 = 1;
};

const aaluCrossMaker1_1 = () => {
  gameWC1_O = gameL_1_O + gameL_4_O + gameL_7_O;
  gameWC1_X = gameL_1_X + gameL_4_X + gameL_7_X;
  if (gameWC1_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("columnline1").style.border = "3px solid red";
  } else if (gameWC1_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("columnline1").style.border = "3px solid red";
  }
};

const aaluCrossMaker1_2 = () => {
  gameWC2_O = gameL_2_O + gameL_5_O + gameL_8_O;
  gameWC2_X = gameL_2_X + gameL_5_X + gameL_8_X;
  if (gameWC2_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("columnline2").style.border = "3px solid red";
  } else if (gameWC2_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("columnline2").style.border = "3px solid red";
  }
};

const aaluCrossMaker1_3 = () => {
  gameWC3_O = gameL_3_O + gameL_6_O + gameL_9_O;
  gameWC3_X = gameL_3_X + gameL_6_X + gameL_9_X;
  if (gameWC3_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("columnline3").style.border = "3px solid red";
  } else if (gameWC3_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("columnline3").style.border = "3px solid red";
  }
};
const aaluCrossMaker1_4 = () => {
  gameWR1_O = gameL_1_O + gameL_2_O + gameL_3_O;
  gameWR1_X = gameL_1_X + gameL_2_X + gameL_3_X;
  if (gameWR1_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("rowline1").style.border = "3px solid red";
  } else if (gameWR1_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("rowline1").style.border = "3px solid red";
  }
};
const aaluCrossMaker1_5 = () => {
  gameWR2_O = gameL_4_O + gameL_5_O + gameL_6_O;
  gameWR2_X = gameL_4_X + gameL_5_X + gameL_6_X;
  if (gameWR2_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("rowline2").style.border = "3px solid red";
  } else if (gameWR2_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("rowline2").style.border = "3px solid red";
  }
};
const aaluCrossMaker1_6 = () => {
  gameWR3_O = gameL_7_O + gameL_8_O + gameL_9_O;
  gameWR3_X = gameL_7_X + gameL_8_X + gameL_9_X;
  if (gameWR3_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("rowline3").style.border = "3px solid red";
  } else if (gameWR3_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("rowline3").style.border = "3px solid red";
  }
};
const aaluCrossMaker1_7 = () => {
  gameWD1_O = gameL_1_O + gameL_5_O + gameL_9_O;
  gameWD1_X = gameL_1_X + gameL_5_X + gameL_9_X;
  if (gameWD1_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("diagonalline1").style.border = "3px solid red";
  } else if (gameWD1_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("diagonalline1").style.border = "3px solid red";
  }
};
const aaluCrossMaker1_8 = () => {
  gameWD2_O = gameL_3_O + gameL_5_O + gameL_7_O;
  gameWD2_X = gameL_3_X + gameL_5_X + gameL_7_X;
  if (gameWD2_O == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("diagonalline2").style.border = "3px solid red";
  } else if (gameWD2_X == 3 && gameAlready == 0) {
    gameAlready = 1;
    document.getElementById("diagonalline2").style.border = "3px solid red";
  }
};

function hello() {
  aaluCrossMaker1_1();
  aaluCrossMaker1_2();
  aaluCrossMaker1_3();
  aaluCrossMaker1_4();
  aaluCrossMaker1_5();
  aaluCrossMaker1_6();
  aaluCrossMaker1_7();
  aaluCrossMaker1_8();
}
