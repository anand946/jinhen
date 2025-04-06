const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4.crying.gif",
  "../resources/5.crying.gif",
  "../resources/idc.gif"
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "C:\\Users\\user\\Desktop\\Valentines main\\resources\\mindblown-mind-blown.gif";// gif credit: https://knowyourmeme.com/photos/2738959-mr-fresh-side-eye-cat
    text.innerHTML = "ohhhhhh 😲";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "C:\\Users\\user\\Desktop\\Valentines main\\resources\\kabangu-upset.gif";// gif credit: https://tenor.com/view/tkthao219-peach-goma-gif-25008901
    text.innerHTML = "yaasan muuhain 🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "C:\\Users\\user\\Desktop\\Valentines main\\resources\\panda-lonely.gif";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = "gomdloo 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "C:\\Users\\user\\Desktop\\Valentines main\\resources\\please.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = " guijin tehuu 😊";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  } else if (count == 6) {
    gif.src = "C:\\tosol\\Valentines-website-by-loopz-main\\Valentines-website-by-loopz-main\\valentines website\\resources\\giphy.gif";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = " guijin tehuu 😊";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "C:\\Users\\user\\Desktop\\Valentines main\\resources\\erm-fingers.gif";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978
  text.innerHTML = "👉🏿hariuga chataar ilgeegere👈🏿";
  yes.innerHTML = '<a href="https://www.instagram.com/jambaq_p/">Message me</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
