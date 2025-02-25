let counter = 1;
let click = document.getElementById("num-counter");
let audio = document.getElementById("audio");
const image = document.getElementById("image-button");

function moreClick() {
  click.innerText = counter++;
  document.getElementById("audio").play();
  if (counter >= 10 + 1 && counter < 20) {
    image.style.backgroundImage = "url(/orange-trump/assets/mexican-trump.jpg)";
    audio.src = "audio/mexican-dance.mp3";
    document.getElementById("audio").play();
  } else if (counter >= 20 + 1) {
    image.style.backgroundImage = "url(/orange-trump/assets/trump-sun.jpg)";
    audio.src = "audio/you-are-my-sunshine.mp3";
    document.getElementById("audio").play();
}
}
