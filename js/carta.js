var carta = new Array(4);
carta[0] = new Array(4);
carta[1] = new Array(4);
carta[2] = new Array(4);
carta[3] = new Array(4);
var n;
var i1; var i2;

var repetidos = new Array(12);

function cartas(){
  var c = 1;
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y <4; y++){

      while (true){
          n = Math.floor(Math.random() * 54) + 1;
          
          if (repetidos.includes(n)==false)
          {
            break;} 
      }
      carta[x][y]=n;
      repetidos[c-1]=n;
      document.getElementById("c"+c).src="../img/"+n+".jpg";
      c= c+1;
    }
  }
}


function consultar(){
  i1 = document.getElementById("i1").value;
  i2 = document.getElementById("i2").value;

  document.getElementById("prev").src="../img/"+carta[i1][i2]+".jpg";

  play();
}

function play(){
  let audio = new Audio("../audio/b"+carta[i1][i2]+".mp3");

  audio.play();
}

cartas();
consultar();