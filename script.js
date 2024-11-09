const deadline = new Date();
deadline.setDate(deadline.getDate() + 7);

let timer = 0;

setInterval(() => {
  timer = Math.floor((deadline - Date.now()) / 1000);

  const days = Math.floor(timer / (60 * 60 * 24));
  const hours = Math.floor(timer / (60 * 60)) - days * 24;
  const minutes = Math.floor((timer % (60 * 60)) / 60);
  const secondes = Math.floor(timer % 60);

  if (days < 10) {
    document.querySelector(
      ".li-timer:nth-of-type(1) .up"
    ).textContent = `0${days}`;
    document.querySelector(
      ".li-timer:nth-of-type(1) .down"
    ).textContent = `0${days}`;
  } else {
    document.querySelector(".li-timer:nth-of-type(1) .up").textContent = days;
    document.querySelector(".li-timer:nth-of-type(1) .down").textContent = days;
  }

  if (hours < 10) {
    document.querySelector(
      ".li-timer:nth-of-type(2) .up"
    ).textContent = `0${hours}`;
    document.querySelector(
      ".li-timer:nth-of-type(2) .down"
    ).textContent = `0${hours}`;
  } else {
    document.querySelector(".li-timer:nth-of-type(2) .up").textContent = hours;
    document.querySelector(".li-timer:nth-of-type(2) .down").textContent =
      hours;
  }

  if (minutes < 10) {
    document.querySelector(
      ".li-timer:nth-of-type(3) .up"
    ).textContent = `0${minutes}`;
    document.querySelector(
      ".li-timer:nth-of-type(3) .down"
    ).textContent = `0${minutes}`;
  } else {
    document.querySelector(".li-timer:nth-of-type(3) .up").textContent =
      minutes;
    document.querySelector(".li-timer:nth-of-type(3) .down").textContent =
      minutes;
  }

  if (secondes < 10) {
    document.querySelector(
      ".li-timer:nth-of-type(4) .up"
    ).textContent = `0${secondes}`;
    document.querySelector(
      ".li-timer:nth-of-type(4) .down"
    ).textContent = `0${secondes}`;
  } else {
    document.querySelector(".li-timer:nth-of-type(4) .up").textContent =
      secondes;
    document.querySelector(".li-timer:nth-of-type(4) .down").textContent =
      secondes;
  }
});
