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

// Câu hỏi và nút bấm
const startBtn = document.getElementById("startButton");
startBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Background music control
document.getElementById("startButton").addEventListener("click", () => {
  // Cho phép phát nhạc trên các trang sau
  localStorage.setItem("musicOK", "true");

  // Chuyển sang trang index
  window.location.href = "index.html";
});
