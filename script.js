let btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    // alert("hello");
    
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    // console.log(dice);
    document.querySelector(".img2").setAttribute("src", "./images/dice" + dice2 + ".png");
    document.querySelector(".img1").setAttribute("src", "./images/dice" + dice1 + ".png");


  if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
  } else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
});


    