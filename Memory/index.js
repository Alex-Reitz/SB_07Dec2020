let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const colors = [
  "red",
  "yellow",
  "blue",
  "teal",
  "purple",
  "orange",
  "cyan",
  "pink",
];

const cards = [...document.querySelectorAll(".card")];
for (let color of colors) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += `  ${color}`;
  cardA.setAttribute("data-color", color);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += `  ${color}`;
  cardB.setAttribute("data-color", color);
}

function onCardClicked(e) {
  const target = e.currentTarget;
  if (preventClick || target.className.includes("done")) {
    return;
  }
  target.className = target.className.replace("color-hidden", "").trim();
  target.className += " done";

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    preventClick = true;
    if (
      clickedCard.getAttribute("data-color") !==
      target.getAttribute("data-color")
    ) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className =
          clickedCard.className.replace("done", "").trim() + " color-hidden";
        target.className =
          target.className.replace("done", "").trim() + " color-hidden";
        clickedCard = null;
        preventClick = false;
      }, 1000);
    } else {
      preventClick = false;
      combosFound++;
      clickedCard = null;
      if (combosFound == colors.length) {
        alert("You Win!");
      }
    }
  }
}
/* If we have already clicked a card, check if the old card matches the new cards color */
/* If we have not clicked a card, keep track of the card and display its color */
