// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Item 1
  let hornSelect = document.getElementById("horn-select");
  let image = document.querySelector("#expose img");
  let audio = document.querySelector("audio");

  hornSelect.addEventListener("change", function(){
    let value = hornSelect.value;

    if (value === "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } else if (value === "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } else if (value === "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  // Item 2
  let volumeSlider = document.getElementById("volume");
  let volumeIcon = document.querySelector("#volume-controls img");

  volumeSlider.addEventListener("input", function() {
    let value = Number(volumeSlider.value);
    // console.log(value);
    audio.volume = value / 100;

    if (value === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  let playBtn = document.querySelector("#expose button");

  playBtn.addEventListener("click", function(){
    audio.play();
    if (hornSelect.value === "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }

  })
}