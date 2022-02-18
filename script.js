let pop = document.querySelector(".bg-model");
let body = document.getElementById("body");
let cross = document.getElementById("cross");
let sign = document.getElementById("sign");

// let count;
//  function popup()
//  {
//      count = setInterval(
//          function()
//          {
//              pop.classList.add("active");
//          },
//          3000
//      )
//  }
sign.addEventListener("click",function(){
   
    pop.classList.add("active");
})
  cross.addEventListener("click",function()
  {
      pop.classList.remove("active");
      clearInterval(count);
  })

  let btn = document.querySelector("button");
let bodys =  document.querySelector("body");
btn.addEventListener("click",function()
{
   
    bodys.classList.toggle("myDark");
    if(btn.innerHTML == "Dark Mode")
    {
        btn.innerHTML = "Light Mode";
    }
    else
    {
        btn.innerHTML = "Dark Mode";
    }
    
})