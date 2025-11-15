const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("noButton");
const question = document.getElementById("question-container");
const questionImage = document.getElementById("questionImage");
const message = document.getElementById("responseMessage");
const responseImage = document.getElementById("responseImage");
const nextPage = document.getElementById("nextPage");

noBtn.addEventListener("click", () => {
  noBtn.style.display = "none"; // ẩn nút No
  questionImage.style.display = "block"; // hiện hình con gà
});

yesBtn.addEventListener("click", () => {
  message.style.display = "block"; // hiện dòng chữ
  responseImage.style.display = "block"; // hiện hình ảnh phản hồi
  nextPage.style.display = "inline-block"; // hiện nút mũi tên
  question.style.display = "none"; // ẩn câu hỏi
  questionImage.style.display = "none"; // ẩn hình con gà
});

nextPage.addEventListener("click", () => {
  window.location.href = "present.html";
});

// Sparkle effect
const sparklesContainer = document.getElementById("sparkles");
const numSparkles = 100; // số lượng hạt nhỏ

for (let i = 0; i < numSparkles; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";
  sparkle.style.animationDuration = Math.random() * 2 + 1 + "s"; // nhấp nháy random
  sparkle.style.width = sparkle.style.height = Math.random() * 3 + 1 + "px";
  sparklesContainer.appendChild(sparkle);
}

// Background music control
const music = document.getElementById("bgMusic");

if (localStorage.getItem("musicOK") === "true") {
  music.volume = 0.2; // chỉnh âm lượng ở đây
  music.play();
}
