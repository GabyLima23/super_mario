//script.js
const mario= document.querySelector( '.mario');
const pipe= document.querySelector( '.pipe');
const clouds= document.querySelector( '.clouds');
let jogoRodando=0
function jump () {  
    if(!mario.classList.contains( 'jump')){
        mario.classList.add('jump');
    
        setTimeout(()=>{
         mario.classList.remove('jump');           
        }, 500)    
    }
}

function terminaJogo(pipePosition, marioPosition){
  
      pipe.style.animation='none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation='none';
      mario.style.bottom = `${marioPosition}px`;

       mario.src = './images/game-over.png'
       mario.style.width='75px'
       mario.style.height='50px '
        const a = clouds.offsetLeft
    clouds.style.animation='none '
      clouds.style.left = `${a}px`;
console.log('terminouJogo')
}

let loop// = setInterval(()=>{

//     const pipePosition = pipe.offsetLeft;
//     let marioPosition = window.getComputedStyle(mario).bottom;
    
//     marioPosition = marioPosition.slice(0, -2)
 

//     if(pipePosition <= 120 && pipePosition > 0 && marioPosition<80){
   
    //  terninaJogo()
     
//          clearInterval(loop) 
        
        
//     }
     
//  }, 10);

   document.addEventListener('keydown', (event)=>{
            // console.log(event.code )
            if(jogoRodando==0){

              if(event.code=='Space')
                  startGame()    
              return
            }
            jump()
          }    
     )

   
  // console.log('a')

   let time = 0; // Tempo inicial
let timeInterval; // Variável para o intervalo de tempo

function startTimer() {
  time = 0; // Reinicia o tempo
  timeInterval = setInterval(() => {
    // if(jogoRodando>2) {
    //   jogoRodando--
    //   return
    // }
    time++; // Incrementa o tempo a cada segundo
    document.getElementById('time').textContent = time; // Atualiza o tempo na tela
    
  }, 1000); // Executa a cada 1000ms (1 segundo)
}

function stopTimer() {
  clearInterval(timeInterval); // Para o contador
  clearInterval(loop )
}

let record = localStorage.getItem('record') || 0; // Carrega o recorde salvo ou 0

document.getElementById('record').textContent = record; // Exibe o recorde na tela

function updateRecord() {
  if (time > record) { // Se o tempo atual for maior que o recorde
    record = time; // Atualiza o recorde
    localStorage.setItem('record', record); // Salva no Local Storage
    document.getElementById('record').textContent = record; // Atualiza na tela
    //  alert('Novo recorde! 🎉'); // Notifica o jogador
  }
}


function checkCollision() {
  // if(jogoRodando!=2) {
  //    return
  //  }
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom.replace('px', ''));
  const obstaclePosition =pipe.offsetLeft;

  if (obstaclePosition > 0 && obstaclePosition < 50 && marioPosition < 50) {
   
    stopTimer(); // Para o contador]
    terminaJogo(obstaclePosition, marioPosition)
    updateRecord(); // Verifica e atualiza o recorde, se necessário
    // alert('Game Over! Tente novamente.');
    jogoRodando=0 
  }
}

function startGame() { 
  console.log('iniciou fff o jogo')
  //pipe.style.right = "100%";
  //console.log( pipe.offsetLeft)
  jogoRodando=1
  time = 0; // Reinicia o tempo
  document.getElementById('time').textContent = time; // Exibe o tempo zerado
  startTimer(); // Inicia o contador de tempo
  loop=setInterval(checkCollision, 10); // Verifica colisões continuamente
  pipe.style.animation='pipe-animation 1.5s infinite linear'
  clouds.style.animation='clouds-animation 20s infinite linear'
  
       mario.src = './images/mario.gif' 

  
 
}
 
