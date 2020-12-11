function countdown(num) {
  const timer = setInterval(function () {
    if (num > 1) {
      num--;
      console.log(num);
    } else {
      console.log("DONE!");
      clearInterval(timer);
    }
  }, 1000);
}

countdown(5);
