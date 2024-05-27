let screen = document.querySelectorAll("img")[1];
let channelsrr = document.querySelectorAll("li");

let imge = [
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg  ",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg  ",

  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
];
// channels.addEventListener("click", () => {
for (let index = 0; index < channelsrr.length; index++) {
  channelsrr[index].addEventListener("click", () => {
    let imges = channelsrr[index].getAttribute("id");
    if (imges == "one") {
      screen.src = imge[index];
    } else if (imges == "two") {
      screen.src = imge[index];
    } else if (imges == "three") {
      screen.src = imge[index];
    } else if (imges == "four") {
      screen.src = imge[index];
    } else if (imges == "five") {
      screen.src = imge[index];
    } else if (imges == "six") {
      screen.src = imge[index];
    } else if (imges == "seven") {
      screen.src = imge[index];
    } else if (imges == "eight") {
      screen.src = imge[index];
    } else if (imges == "nine") {
      screen.src = imge[index];
    }
  });
}
