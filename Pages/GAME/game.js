const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.getElementById("startBtn");
const scoreText = document.getElementById("score");
const recordText= document.getElementById("record")


const gameOverWindow=document.getElementById("gameOverWindow");
const finalScore=document.getElementById("finalScore");
const bestRecordText=document.getElementById("bestRecordText");
const restartBtn=document.getElementById("restartBtn");

let score = 0;
let running = false;
let isAlive;
let scoreTimer;
let bestRecord=localStorage.getItem("bestRecord") || 0;

function jump() {
  if (!running) {
    return;
  }

  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => dino.classList.remove("jump"), 300);
  }
}

//добавление кликов через пробел,мышку или кнопку вверх
document.addEventListener("mousedown", jump);
document.addEventListener("keydown", (e) => {
  if (e.code === "Space"|| e.code === "ArrowUp" || e.code === "KeyW") jump();
});



function startGame() {
  // если уже идёт — выходим
  if (running) return;

  running = true;
  score = 0;
  scoreText.textContent = "Счёт: 0";

  // перезапуск анимации кактуса
  cactus.style.animation = "none";
  void cactus.offsetWidth; // сбрасываем анимацию
  cactus.style.animation = "move 1s infinite linear";
  cactus.style.animationPlayState = "running";

  // запускаем счёт
  scoreTimer = setInterval(() => {
    score++;
    scoreText.textContent = "Счёт: " + score;
  }, 200);

  // проверяем столкновения
  isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // столкновение
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      gameOver();
    }
  }, 10);
}


function gameOver() {
  clearInterval(isAlive);
  clearInterval(scoreTimer);

  running = false;
  cactus.style.animationPlayState = "paused";


  if(score>bestRecord) {
    bestRecord=score;
    localStorage.setItem("bestRecord", bestRecord);
   
  }
 
  finalScore.textContent = score;
  bestRecordText.textContent = bestRecord;
  gameOverWindow.classList.remove("game-over-hidden");

  finalScore.textContent=score;
  bestRecordText.textContent= bestRecord;
  
 

}


recordText.textContent= "Рекорд :" + bestRecord;


restartBtn.onclick = function() {
    gameOverWindow.classList.add("game-over-hidden");
     cactus.style.animation = 'none';
    cactus.style.left = '-100px'; 
    startGame();

};

gameOverWindow.onclick = function(event) {
  if (event.target === gameOverWindow) {

    gameOverWindow.classList.add("game-over-hidden");
    cactus.style.animation = 'none';
    cactus.style.left = '-100px'; 
   
  }
};


startBtn.onclick = startGame;


saveImageBtn.onclick = function() {
  // Создаем область для картинки
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 280;
  
  // результат
  ctx.fillStyle = "#1500ffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "white";
  ctx.font = "bold 24px Helvetica";
  ctx.fillText("🎮 Мои Результаты ", 20, 50);
  
  ctx.font = "20px Helvetica";
  ctx.fillText(`Мой рекорд: ${score}`, 20, 100);
  ctx.fillText(`Рекорд чемпиона: ${bestRecord}`, 20, 130);
  ctx.fillText(`Дата: ${new Date().toLocaleDateString()}`, 20, 160);

  ctx.fillStyle = "white";
  ctx.font = "bold 24px Helvetica";
  ctx.fillText("А ты сможешь больше🦖?) ", 20, 230);
  
  // Создаем ссылку для скачивания
  const link = document.createElement("a");
  link.download = `result/official-pavvman-game.png`;
  link.href = canvas.toDataURL("image/png",1.0);
  link.click();
};