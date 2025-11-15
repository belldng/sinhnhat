const heart = document.getElementById("heart");

// Khi click trái tim -> nhảy nhẹ
heart.addEventListener("click", () => {
  heart.style.transform = "scale(1.3) rotateY(0deg)";
  setTimeout(() => {
    heart.style.transform = "scale(1) rotateY(0deg)";
  }, 300);
});

// Background music
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.5; // Giảm âm lượng
