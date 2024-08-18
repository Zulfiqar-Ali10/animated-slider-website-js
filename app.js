

function prevSlide() {
    let cards = document.querySelectorAll(".card");
  
    document.querySelector(".slider").prepend(cards[cards.length - 1]);
  }
  
  function nextSlide() {
    let cards = document.querySelectorAll(".card");
  
    document.querySelector(".slider").appendChild(cards[0]);
  }