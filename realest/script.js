// Love Letter toggle
function openLetter() {
  const letter = document.getElementById("letter-box");
  letter.style.display = "block";
}

// Love Quotes
const quotes = [
  "I love you more than words can say ",
  "Distance means so little when someone means so much ",
  "You're my favorite notification every day "
];
document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

// Reasons I Love You
const reasons = [
  "Your make me laugh like no one else",
  "You always make time for me kahit busy ka",
  "You laugh at my dumb jokes and whatever dumbshit i do",
  "You make me feel like im huamn",
  "I love the way you look at me",
  "I forget what i was thinking cause your so beautiful",
  "You always listen to me no matter what LITERARY",
  "You work so hard for yourself and others its so admirale",
  "We Understand so well",
  "tbh i can go forever but i cant think of any so put it",
  "You’re simply the best 💖"
];
const reasonsList = document.getElementById("reasons-list");
reasons.forEach(r => {
  let li = document.createElement("li");
  li.textContent = r;
  reasonsList.appendChild(li);
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);

const box = document.querySelector('.letter-box');
const toggleBtn = document.querySelector('#toggleLetter');

toggleBtn.addEventListener('click', () => {
  box.classList.toggle('open');
});
