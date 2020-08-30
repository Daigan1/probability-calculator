
var oddsList = [];



$("button").on("click", function() {
  oddsList = [];
    calculateOdds(0.50, parseInt($(".penny-input").val()));
    calculateOdds(0.16666666666, parseInt($(".dice-input").val()));
    calculateOdds(0.95, parseInt($(".plane-input").val()));
    calculateOdds(0.499, parseInt($(".card-input").val()));
    calculateOdds(0.96, parseInt($(".lottery-input").val()));
    calculateOdds(0.10, parseInt($(".age-input").val()));
    console.log($(".plane-input").val());
    console.log(oddsList);
    $(".odds-text").text(calculateFinalOdds()*100+"%");
 
});


function calculateOdds(odds, amount) {

if (amount == 0 || isNaN(amount)) {
return;
}

var originalOdds = odds;


for (var i = 1; i < amount; i++) {
  odds = odds*originalOdds;
}
  oddsList.push(odds);
}



    

 function calculateFinalOdds() {
     var odds = 1;
  if (oddsList.length == 1) return oddsList[0];
    if (oddsList.length == 0) return 1;
  for (var i = 0; i < oddsList.length; i++) {
    odds = odds * oddsList[i];

  }
    return odds;
    console.log(odds);
}
