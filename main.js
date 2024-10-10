const endPoint = "http://192.168.1.15";

function setDapurLed() {
  fetch(endPoint + "/dapur", {
    method: "POST",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledDapur.style.backgroundColor = "red";
        dapurLedImage.src = "./ASSETS-IOT/led-on.png";
      } else {
        ledDapur.style.backgroundColor = "#579fff";
        dapurLedImage.src = "./ASSETS-IOT/led-off.png";
      }
    });
}
function setMakanLed() {
  fetch(endPoint + "/makan", {
    method: "POST",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledMakan.style.backgroundColor = "red";
        makanLedImage.src = "./ASSETS-IOT/led-on.png";
      } else {
        ledMakan.style.backgroundColor = "#579fff";
        makanLedImage.src = "./ASSETS-IOT/led-off.png";
      }
    });
}
function setTamuLed() {
  fetch(endPoint + "/tamu", {
    method: "POST",
  })
    .then((response) => response.text())
    .then((result) => {
      if (result == "ON") {
        ledTamu.style.backgroundColor = "red";
        tamuLedImage.src = "./ASSETS-IOT/led-on.png";
      } else {
        ledTamu.style.backgroundColor = "#579fff";
        tamuLedImage.src = "./ASSETS-IOT/led-off.png";
      }
    });
}

function setToiletLed() {
  ledToilet.style.backgroundColor = "red";
  toiletLedImage.src = "./ASSETS-IOT/led-on.png";
}
