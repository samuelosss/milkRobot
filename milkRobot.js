function getMilk() {
  let money = prompt("How much you give me for shopping?") ;
  let price = prompt("What's today's price of milk?") ;
  console.log("Get to shop");
  console.log("Buy " + howMany(money,price) + " bottles of milk");
  console.log("Get back home");
  alert("Master, here's your " + howMuch(money, price) + "$ of change.");
}

function howMany(startAmount, costBottle) {
  var numberBottles = Math.floor( startAmount / costBottle) ;
   return numberBottles;
}

function howMuch(startAmount, costBottle) {
  var howMuchChange = startAmount % costBottle ;
    return howMuchChange ;
}
