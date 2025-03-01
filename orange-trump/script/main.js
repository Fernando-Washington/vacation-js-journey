let counter = 1;
let click = document.getElementById("num-counter");
let audio = document.getElementById("audio");
const image = document.getElementById("image-button");

function moreClick() {
  click.innerText = counter++;
  audio.play();

  if (counter >= 11 && counter < 20) {
    image.style.backgroundImage = "url(/orange-trump/assets/mexican-trump.jpg)";
    audio.src = "audio/mexican-dance.mp3";
    audio.play();
  } else if (counter >= 21) {
    image.style.backgroundImage = "url(/orange-trump/assets/trump-sun.jpg)";
    audio.src = "audio/you-are-my-sunshine.mp3";
    audio.play();
  }
}
