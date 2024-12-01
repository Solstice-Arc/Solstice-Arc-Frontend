document.addEventListener("DOMContentLoaded", ()=>{

  const cards = document.querySelectorAll(".card");
  const selectedCardsContainer = document.getElementById("selected-cards-container");
  const message = document.getElementById("message");
  
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      } else {
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
      }
    });
    
    card.querySelector(".select-button").addEventListener("click", () => {
      const selectedCard = document.createElement("div");
      selectedCard.classList.add("selected-card");
      selectedCard.innerHTML = `
      <img src="${card.querySelector("img").src}" alt="${card.querySelector(".card-name").innerText}">
      <p class="selectedCardSpan">${card.querySelector(".card-name").innerText}</p>
      `;
      selectedCardsContainer.appendChild(selectedCard);
    });
    
    card.querySelector(".sell-button").addEventListener("click", () => {
      card.style.display = "none";
      message.textContent = "This card has been listed on the marketplace.";
      message.classList.remove("hidden");
      setTimeout(() => {
        message.classList.add("hidden");
      }, 2000);
    });
  });
  
})