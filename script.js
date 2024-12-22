const bulb = document.getElementById("bulb");
const button = document.getElementById("switch");

button.addEventListener("click", () => {
  // alert("The bulb is on");

  if (bulb.src.match("Bulb_Off")) {
    bulb.src = "images/Bulb_Light.png";
    button.textContent = "On";
    button.style.color = "white";
    button.style.backgroundColor = "green";
    button.title = "Click to switch off the bulb";
  } else {
    bulb.src = "images/Bulb_Off.png";
    button.textContent = "Off";
    button.style.color = "white";
    button.style.backgroundColor = "red";
  }
});