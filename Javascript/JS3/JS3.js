  // parámetros del juego
  const DELAY_END = 2; // segundos hasta que comience un nuevo juego
  const FPS = 30; // FPS
  const GRID_SIZE = 2; // número de filas y columnas
  const HEIGHT = 500; // píxeles

  // dimensiones derivadas
  const WIDTH = HEIGHT * 0.9;
  const CELL = WIDTH / (GRID_SIZE + 2); // tamaño de las celdas (así como el margen izquierdo y derecho)
  const STROKE = CELL / 15; // stroke width
  const DOT = STROKE; // radio de punto
  const MARGIN = HEIGHT - (GRID_SIZE + 1) * CELL; // margen superior para partitura, nombres, etc.

  // colores
  const COLOR_BOARD = "white";
  const COLOR_BORDER = "white";
  const COLOR_COMP = "red";
  const COLOR_COMP_LIT = "red";
  const COLOR_DOT = "black";
  const COLOR_PLAY = "blue";
  const COLOR_PLAY_LIT = "blue";
  const COLOR_TIE = "black";

  // texto
  const TEXT_COMP = "J2";
  const TEXT_COMP_SML = "Comp";
  const TEXT_PLAY = "J1";
  const TEXT_PLAY_SML = "Play";
  const TEXT_SIZE_CELL = CELL / 3;
  const TEXT_SIZE_TOP = MARGIN / 6;
  const TEXT_TIE = "DRAW!";
  const TEXT_WIN = "Ha Ganado!";
  
  let text = "";
  let semaforo = true;
  let auxCont = 60;

  
  let valor1 = 0;
  let valor2 = 0;

  // definiciones
  const Side = {
      BOT: 0,
      LEFT: 1,
      RIGHT: 2,
      TOP: 3
  }

  // configurar el lienzo del juego
  var canv = document.createElement("canvas");
  canv.height = HEIGHT;
  canv.width = WIDTH;
  document.body.appendChild(canv);
  var canvRect = canv.getBoundingClientRect();

  // establecer el contexto
  var ctx = canv.getContext("2d");
  ctx.lineWidth = STROKE;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // variables del juego
  var currentCells, playersTurn, squares;
  var scoreComp, scorePlay;
  var timeEnd;

  // empezar un nuevo juego
  newGame();

  // controladores de eventos
  canv.addEventListener("mousemove", highlightGrid);
  canv.addEventListener("click", click);

  // configurar el bucle del juego
  setInterval(loop, 1);

  function loop() {
      drawBoard();
      drawSquares();
      drawGrid();
      drawScores();
  }

  function click(/** @type {MouseEvent} */ ev) {
      if (/*TODO !playersTurn ||*/ timeEnd > 0) {
          return;
      }
      selectSide();
  }

  function drawBoard() {
      ctx.fillStyle = COLOR_BOARD;
      ctx.strokeStyle = COLOR_BORDER;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.strokeRect(STROKE / 2, STROKE / 2, WIDTH - STROKE, HEIGHT - STROKE);
  }

  function drawDot(x, y) {
      ctx.fillStyle = COLOR_DOT;
      ctx.beginPath();
      ctx.arc(x, y, DOT, 0, Math.PI * 2);
      ctx.fill();
  }

  function drawGrid() {
      for (let i = 0; i < GRID_SIZE + 1; i++) {
          for (let j = 0; j < GRID_SIZE + 1; j++) {
              drawDot(getGridX(j), getGridY(i));
          }
      }
  }

  function drawLine(x0, y0, x1, y1, color) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.stroke();
  }

  function drawScores() {
      let jugador1 = document.getElementById("jugador1");
      let jugador2 = document.getElementById("jugador2");

      let colComp = playersTurn ? COLOR_COMP_LIT : COLOR_COMP;
      let colPlay = playersTurn ? COLOR_PLAY : COLOR_PLAY_LIT;
      drawText(TEXT_PLAY, WIDTH * 0.25, MARGIN * 0.25, colPlay, TEXT_SIZE_TOP);
      drawText(scorePlay, WIDTH * 0.25, MARGIN * 0.6, colPlay, TEXT_SIZE_TOP * 2);
      drawText(TEXT_COMP, WIDTH * 0.75, MARGIN * 0.25, colComp, TEXT_SIZE_TOP);
      drawText(scoreComp, WIDTH * 0.75, MARGIN * 0.6, colComp, TEXT_SIZE_TOP * 2);

      // texto game over
      if (timeEnd > 0) {
          timeEnd=0;

          if (scoreComp == scorePlay) {
              drawText(TEXT_TIE, WIDTH * 0.5, MARGIN * 0.6, COLOR_TIE, TEXT_SIZE_TOP);
          } else {
              let playerWins = scorePlay > scoreComp;
              let color = playerWins ? COLOR_PLAY : COLOR_COMP;
              let text = playerWins ? TEXT_PLAY : TEXT_COMP;
              drawText(text, WIDTH * 0.5, MARGIN * 0.5, color, TEXT_SIZE_TOP);
              drawText(TEXT_WIN, WIDTH * 0.5, MARGIN * 0.7, color, TEXT_SIZE_TOP);
              console.log("ENTRAAAA");
              
              if(text == "J1"){
                  valor1 ++;
                  jugador1.innerHTML = valor1;

              } else if (text == "J2" ) {
                  valor2 ++;
                  jugador2.innerHTML = valor2;
              }
          }
      }
      
  }

  function startgame(){
      newGame();
  }

  function drawSquares() {
      for (let row of squares) {
          for (let square of row) {
              square.drawSides();
              square.drawFill();
          }
      }
  }

  function drawText(text, x, y, color, size) {
      ctx.fillStyle = color;
      ctx.font = size + "px dejavu sans mono";
      ctx.fillText(text, x, y);
  }

  function getColor(player, light) {
      if (player) {
          return light ? COLOR_PLAY_LIT : COLOR_PLAY;
      } else {
          return light ? COLOR_COMP_LIT : COLOR_COMP;
      }
  }

  function getText(player, small) {
      if (player) {
          return small ? TEXT_PLAY_SML : TEXT_PLAY;
      } else {
          return small ? TEXT_COMP_SML : TEXT_COMP;
      }
  }

  function getGridX(col) {
      return CELL * (col + 1);
  }

  function getGridY(row) {
      return MARGIN + CELL * row;
  }

  function highlightGrid(/** @type {MouseEvent} */ ev) {
      if (/*TODO !playersTurn ||*/ timeEnd > 0) {
          return;
      }

      // obtener la posición del mouse en relación con el lienzo.
      let x = ev.clientX - canvRect.left;
      let y = ev.clientY - canvRect.top;

      // resaltar el lado del cuadrado
      highlightSide(x, y);
  }

  function highlightSide(x, y) {

      // borrar resaltado anterior
      for (let row of squares) {
          for (let square of row) {
              square.highlight = null;
          }
      }

      // revisa cada celda
      let rows = squares.length;
      let cols = squares[0].length;
      currentCells = [];
      OUTER: for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              if (squares[i][j].contains(x, y)) {

                  // resaltar actual
                  let side = squares[i][j].highlightSide(x, y);
                  if (side != null) {
                      currentCells.push({row: i, col: j});
                  }

                  // determinar vecino
                  let row = i, col = j, highlight, neighbour = true;
                  if (side == Side.LEFT && j > 0) {
                      col = j - 1;
                      highlight = Side.RIGHT;
                  } else if (side == Side.RIGHT && j < cols - 1) {
                      col = j + 1;
                      highlight = Side.LEFT;
                  } else if (side == Side.TOP && i > 0) {
                      row = i - 1;
                      highlight = Side.BOT;
                  } else if (side == Side.BOT && i < rows - 1) {
                      row = i + 1;
                      highlight = Side.TOP;
                  } else {
                      neighbour = false;
                  }

                  // Destacar vecino
                  if (neighbour) {
                      squares[row][col].highlight = highlight;
                      currentCells.push({row: row, col: col});
                  }

                  // no need to continue
                  break OUTER;
              }
          }
      }
  }

  function newGame() {
      currentCells = [];
      playersTurn = Math.random() >= 0.5;
      scoreComp = 0;
      scorePlay = 0;
      timeEnd = 0;

      // configurar los cuadrados
      squares = [];
      for (let i = 0; i < GRID_SIZE; i++) {
          squares[i] = [];
          for (let j = 0; j < GRID_SIZE; j++) {
              squares[i][j] = new Square(getGridX(j), getGridY(i), CELL, CELL);
          }
      }
  }

  function selectSide() {
      if (currentCells == null || currentCells.length == 0) {
          return;
      }

      // Seleccione los lados.
      let filledSquare = false;
      for (let cell of currentCells) {
          if (squares[cell.row][cell.col].selectSide()) {
              filledSquare = true;
          }
      }
      currentCells = [];

      // Verificar el ganador
      if (filledSquare) {
          if (scorePlay + scoreComp == GRID_SIZE * GRID_SIZE) {
              // juegos terminado
              timeEnd = Math.ceil(DELAY_END * FPS);
          }
      } else {
          // turno del siguiente jugador
          playersTurn = !playersTurn;
      }
  }

  // Crear cuadrado
  function Square(x, y, w, h) {
      this.w = w;
      this.h = h;
      this.bot = y + h;
      this.left = x;
      this.right = x + w;
      this.top = y;
      this.highlight = null;
      this.numSelected = 0;
      this.owner = null;
      this.sideBot = {owner: null, selected: false};
      this.sideLeft = {owner: null, selected: false};
      this.sideRight = {owner: null, selected: false};
      this.sideTop = {owner: null, selected: false};

      this.contains = function(x, y) {
          return x >= this.left && x < this.right && y >= this.top && y < this.bot;
      }

      this.drawFill = function() {
          if (this.owner == null) {
              return;
          }

          // Fondo
          ctx.fillStyle = getColor(this.owner, true);
          ctx.fillRect(
              this.left + STROKE, this.top + STROKE,
              this.w - STROKE * 2, this.h - STROKE * 2
          );

          // Texto
          drawText(
              getText(this.owner, true),
              this.left + this.w / 2,
              this.top + this.h / 2,
              getColor(this.owner, false),
              TEXT_SIZE_CELL
          );
      }

      this.drawSide = function(side, color) {
          switch(side) {
              case Side.BOT:
                  drawLine(this.left, this.bot, this.right, this.bot, color);
                  break;
              case Side.LEFT:
                  drawLine(this.left, this.top, this.left, this.bot, color);
                  break;
              case Side.RIGHT:
                  drawLine(this.right, this.top, this.right, this.bot, color);
                  break;
              case Side.TOP:
                  drawLine(this.left, this.top, this.right, this.top, color);
                  break;
          }
      }

      this.drawSides = function() {

          
          if (this.highlight != null) {
              this.drawSide(this.highlight, getColor(playersTurn, true));
          }

          // lados seleccionados
          if (this.sideBot.selected) {
              this.drawSide(Side.BOT, getColor(this.sideBot.owner, false));
          }
          if (this.sideLeft.selected) {
              this.drawSide(Side.LEFT, getColor(this.sideLeft.owner, false));
          }
          if (this.sideRight.selected) {
              this.drawSide(Side.RIGHT, getColor(this.sideRight.owner, false));
          }
          if (this.sideTop.selected) {
              this.drawSide(Side.TOP, getColor(this.sideTop.owner, false));
          }
      }

      this.highlightSide = function(x, y) {

          // calcular las distancias a cada lado
          let dBot = this.bot - y;
          let dLeft = x - this.left;
          let dRight = this.right - x;
          let dTop = y - this.top;

          // determinar el valor más cercano
          let dClosest = Math.min(dBot, dLeft, dRight, dTop);

          // resaltar el más cercano si aún no está seleccionado
          if (dClosest == dBot && !this.sideBot.selected) {
              this.highlight = Side.BOT;
          } else if (dClosest == dLeft && !this.sideLeft.selected) {
              this.highlight = Side.LEFT;
          } else if (dClosest == dRight && !this.sideRight.selected) {
              this.highlight = Side.RIGHT;
          } else if (dClosest == dTop && !this.sideTop.selected) {
              this.highlight = Side.TOP;
          }

          // devolver el lado resaltado
          return this.highlight;
      }

      this.selectSide = function() {
          if (this.highlight == null) {
              return;
          }

          // seleccione el lado resaltado
          switch (this.highlight) {
              case Side.BOT:
                  this.sideBot.owner = playersTurn;
                  this.sideBot.selected = true;
                  break;
              case Side.LEFT:
                  this.sideLeft.owner = playersTurn;
                  this.sideLeft.selected = true;
                  break;
              case Side.RIGHT:
                  this.sideRight.owner = playersTurn;
                  this.sideRight.selected = true;
                  break;
              case Side.TOP:
                  this.sideTop.owner = playersTurn;
                  this.sideTop.selected = true;
                  break;
          }
          this.highlight = null;

          // aumentar el número de seleccionados
          this.numSelected++;
          if (this.numSelected == 4) {
              this.owner = playersTurn;

              // puntuación de incremento
              if (playersTurn) {
                  scorePlay++;
              } else {
                  scoreComp++;
              }

              return true;
          }

          return false;
      }
  }