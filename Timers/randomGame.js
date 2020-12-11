function randomGame() {
  let counter = 0;
  const interval = setInterval(function () {
    randomNumber = Math.random();
    console.log(randomNumber);
    counter++;
    if (randomNumber > 0.75) {
      console.log(`It took ${counter} tries`);
      clearInterval(interval);
    }
  }, 1000);
}

randomGame();
