function displayText(number) {
  let paragraph = document.getElementById("p" + number);
  let card = document.getElementById("card" + number);
  if (paragraph.style.display === "none") {
    paragraph.style.display = "inline";
    card.style.height = "auto";
  } else {
    paragraph.style.display = "none";
    card.style.height = "330px";
  }
}
