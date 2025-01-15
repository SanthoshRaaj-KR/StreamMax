const scrollContainer=document.getElementById("scrollContainer");
const cards=scrollContainer.children;
const cardsToShow=4; // Number of cards to show at once
const cardWidth=cards[0].offsetWidth + 16; // Including margin-right of 16px

document.getElementById("nextButton").addEventListener("click", () => {
  const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const newScrollPosition = scrollContainer.scrollLeft + cardWidth * cardsToShow;
  
  scrollContainer.scrollLeft = Math.min(newScrollPosition, maxScroll);
});


document.getElementById("prevButton").addEventListener("click", () => {
  const newScrollPosition = scrollContainer.scrollLeft - cardWidth * cardsToShow;
  scrollContainer.scrollLeft = Math.max(newScrollPosition, 0);
});
