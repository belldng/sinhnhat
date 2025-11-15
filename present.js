const letterBtn = document.getElementById("letter");
const giftBtn = document.getElementById("gift-box");
const message = document.getElementById("message");
const container = document.querySelector(".container");

// Bấm vào lá thư => mở thư
letterBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // chặn sự kiện click lan ra ngoài
  message.style.display = "block";
});

// Bấm vào hộp quà => tắt thư + chuyển trang
giftBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  message.style.display = "none";
  window.location.href = "gift.html";
});

// Bấm ra ngoài (vùng trống) => tắt thư
document.addEventListener("click", (event) => {
  // nếu click không nằm trong phần message hoặc nút thư
  if (!message.contains(event.target) && event.target !== letterBtn) {
    message.style.display = "none";
  }
});

// Background music control
const music = document.getElementById("bgMusic");

if (localStorage.getItem("musicOK") === "true") {
  music.volume = 0.2; // chỉnh âm lượng ở đây
  music.play();
}
