document.addEventListener("DOMContentLoaded", ()=>{
    const play = document.getElementById("PlayButton");
    const deck = document.getElementById("Kart");
    const shop = document.getElementById("market");
    
    play.addEventListener("click", (e)=>{
        e.preventDefault();
        alert("Ideally, this would lead to the matchmaking screen...")
    })  
    deck.addEventListener("click", (e)=>{
        e.preventDefault();
        alert("Ideally, this would lead to the deck-building screen...")
    })  
    shop.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.href="./marketplace.html"
    })  

})