console.log("Well done you've loaded js");

function toggleLight() {
    if (document.documentElement.getAttribute("data-theme") === "light") {
      document.documentElement.setAttribute("data-theme", "dark")
      document.getElementById("btnToggleLight").innerHTML = "Light up my life"
      console.log("setting theme to Dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      document.getElementById("btnToggleLight").innerHTML = "I party at night"
      console.log("setting theme to Light")
    }
  }
  
  // on button click, run toggleLight
  
  document.getElementById("btnToggleLight").addEventListener("click", toggleLight)

$(".navMenu").hover(function(){
    $(this).css("color","#C5B101").css("fontSize","1.3rem");
}, function(){
    $(this).css("color", "var(--textAccent)").css("fontSize","1.1rem");
})


