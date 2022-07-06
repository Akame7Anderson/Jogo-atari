let xCarros = [600, 600, 600, 600, 600 ,600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 4, 5, 3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;
function mostraCarro(){
  for (let i = 0;i < imagemCarros.length;i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
}
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarro.length;i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length;i++)
    if (passouTodaTela (xCarros[i])){
      xCarros[0] = 600;
    }
  }

function passouTodaTela(xCarros){
 return xCarros < -50;
}


