document.addEventListener("DOMContentLoaded", ()=>{
    const play = document.getElementById("PlayButton");
    const deck = document.getElementById("DeckButton");
    const shop = document.getElementById("MarketplaceButton");
    
    play.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.href="./index.html"
    })  
    deck.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.href="./yourdeck.html"
    })  
    shop.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.href="./marketplace.html"
    })  

})