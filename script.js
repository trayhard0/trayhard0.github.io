const plus_one = document.getElementById("+1");
const plus_one_per_sec = document.getElementById("+1/s");
const plus_five_per_sec = document.getElementById("+5/s");
const Coins_element = document.getElementById("Coins");


let Coins = 0;
var coins_per_second = 0;

plus_one.addEventListener("click",function()
                             {
                               Coins++;
                               Coins_element.textContent = "You have " + Coins + " coins";
                             });

plus_one_per_sec.addEventListener("click",function()
                          {
                            if(Coins>=10)
                            {
                              Coins-=10;
                              coins_per_second++;
                              Coins_element.textContent = "You have " + Coins + " coins";
                            }
                          })

plus_five_per_sec.addEventListener("click",function()
                                   {
                                     if(Coins>=50)
                                     {
                                       Coins-=50;
                                       coins_per_second+=5;
                                       Coins_element.textContent = "You have " + Coins + " coins";
                                     }
                                   })


// Define a function that will be executed every second
function add_amount() {
  console.log("This is done every second!");
  Coins+=coins_per_second;
  Coins_element.textContent = "You have " + Coins + " coins";
}

// Set up an interval to call the function every second (1000 milliseconds)
const intervalId = setInterval(add_amount, 1000);

// Optionally, you can clear the interval after a certain number of repetitions
// For example, to stop after 5 seconds (5 repetitions):
// setTimeout(() => clearInterval(intervalId), 5000);
