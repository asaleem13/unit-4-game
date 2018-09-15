var wins = 0;
var losses = 0;
var crystalTotal = 0;
var randomNumber = Math.floor(Math.random() * 120); // make this between 19 and 120
var crystal1point = Math.floor(Math.random() * 13);
var crystal2point = Math.floor(Math.random() * 13);
var crystal3point = Math.floor(Math.random() * 13);
var crystal4point = Math.floor(Math.random() * 13);


$(document).ready(function() {



    // Random number insertion
    document.querySelector("#rando").innerHTML = randomNumber;
    document.querySelector("#crystototal").innerHTML = crystalTotal;


   function reset () {
    crystalTotal = 0
    document.querySelector("#crystototal").innerHTML = crystalTotal;
    randomNumber = Math.floor(Math.random() * 51);
    document.querySelector("#rando").innerHTML = randomNumber;
   }

   function checkforwin() {
    if (crystalTotal === randomNumber) {
        wins++;
        document.querySelector("#howmanywins").innerHTML = wins;
        reset();
     }

    if (crystalTotal > randomNumber) {
        losses++;
        document.querySelector("#howmanylosses").innerHTML = losses;
        reset();
    }
   }



    $(".crystal1").on("click", function() {
        crystalTotal = crystalTotal + crystal1point;
        document.querySelector("#crystototal").innerHTML = crystalTotal;
        checkforwin()
      });

      $(".crystal2").on("click", function() {
        crystalTotal = crystalTotal + crystal2point;
        document.querySelector("#crystototal").innerHTML = crystalTotal;
        checkforwin()
      });

      $(".crystal3").on("click", function() {
        crystalTotal = crystalTotal + crystal3point;
        document.querySelector("#crystototal").innerHTML = crystalTotal;
        checkforwin()
      });

      $(".crystal4").on("click", function() {
        crystalTotal = crystalTotal + crystal4point;
        document.querySelector("#crystototal").innerHTML = crystalTotal;
        checkforwin()
      });


      
    






    

    });

    console.log(crystal1point);
    console.log(crystal2point);
    console.log(crystal3point);
    console.log(crystal4point);