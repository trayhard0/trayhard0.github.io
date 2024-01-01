const plus_one = document.getElementById("one");
const plus_one_per_sec = document.getElementById("one_per_second");
const plus_five_per_sec = document.getElementById("5_per_second");
const plus_twenty_per_sec = document.getElementById("20_per_second");
const plus_one_hundred_per_sec = document.getElementById("100_per_second");
const plus_one_thousand_per_sec = document.getElementById("1000_per_second");
const Coins_element = document.getElementById("Coins");
const coins_per_sec_element = document.getElementById("coins_per_second");


let Coins = 0;
var coins_per_second = 0;


let coins_deserialized = JSON.parse(localStorage.getItem("Coins"));
Coins = coins_deserialized;
let coins_per_second_deserialized = JSON.parse(localStorage.getItem("coins_per_second"));

if(coins_per_second_deserialized>0)
{
  coins_per_second = coins_per_second_deserialized;
}

function refresh()
{
  Coins_element.textContent = "You have " + Coins.toFixed(1) + " coins";
  coins_per_sec_element.textContent = coins_per_second + " coins per second";
  let coins_serialized = JSON.stringify(Coins);
  let coins_per_second_serialized = JSON.stringify(coins_per_second);
  localStorage.setItem("Coins",coins_serialized);
  localStorage.setItem("coins_per_second",coins_per_second_serialized);
}

plus_one.addEventListener("click",function()
                             {
                               Coins++;
                               refresh();
                             });

plus_one_per_sec.addEventListener("click",function()
                          {
                            if(Coins>=10)
                            {
                              Coins-=10;
                              coins_per_second++;
                              refresh();
                            }
                          })

plus_five_per_sec.addEventListener("click",function()
                                   {
                                     if(Coins>=100)
                                     {
                                       Coins-=100;
                                       coins_per_second+=5;
                                       refresh();
                                     }
                                   })
plus_twenty_per_sec.addEventListener("click",function()
                                     {
                                       if(Coins>=750)
                                       {
                                         Coins-=750;
                                         coins_per_second+=20;
                                         refresh();
                                       }
                                     })

plus_one_hundred_per_sec.addEventListener("click",function()
                                          {
                                            if(Coins>=5000)
                                            {
                                              Coins-=5000;
                                              coins_per_second+=100;
                                              refresh();
                                            }
                                          })
                                    
plus_one_thousand_per_sec.addEventListener("click",function()
                                           {
                                             if(Coins>=75000)
                                             {
                                               Coins-=75000;
                                               coins_per_second+=1000;
                                               refresh();
                                             }
                                           })
                                      
// Define a function that will be executed every second
function add_amount() {
  Coins+=coins_per_second/10;
  refresh();
}

// Set up an interval to call the function every second (1000 milliseconds)
const intervalId = setInterval(add_amount, 100);
