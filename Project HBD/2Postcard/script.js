const card = document.getElementById('card');
const audio = document.getElementById('bgMusic');
const btn = document.getElementById('toggleMusic');
const nextBtn = document.getElementById('nextMusic');
const prevBtn = document.getElementById('prevMusic');

// รายการเพลง
const playlist = [
  { src: "../audio/Oku Hanako  Birthday.mp3", name: "Oku Hanako Birthday" },
  { src: "../audio/keshi - Soft Spot.mp3", name: "Soft Spot-keshi" },
  { src: "../audio/you - LANY.mp3", name: "you - LANY" }
];
let currentSong = 0;

// โหลดเพลงแรก
function loadSong(index) {
  audio.src = playlist[index].src;
  audio.load();
}
loadSong(currentSong);

// เปิดการ์ด = เล่นเพลง, ปิดการ์ด = หยุดเพลง
card.addEventListener('click', () => {
  card.classList.toggle('open');
  if (card.classList.contains('open')) {
    audio.play();
    btn.textContent = "🔊 เปิดเพลง";
  } else {
    audio.pause();
    btn.textContent = "🔇 ปิดเพลง";
  }
});

// ปุ่มเปิด/ปิดเพลง
btn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    btn.textContent = "🔊 เปิดเพลง";
  } else {
    audio.pause();
    btn.textContent = "🔇 ปิดเพลง";
  }
});

// ปุ่มถัดไป
nextBtn.addEventListener('click', function() {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
  audio.play();
  btn.textContent = "🔊 เปิดเพลง";
});

// ปุ่มก่อนหน้า
prevBtn.addEventListener('click', function() {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  loadSong(currentSong);
  audio.play();
  btn.textContent = "🔊 เปิดเพลง";
});

// ตั้งค่าเริ่มต้นปุ่ม
audio.addEventListener('play', () => btn.textContent = "🔊 เปิดเพลง");
audio.addEventListener('pause', () => btn.textContent = "🔇 ปิดเพลง");

// sapphire สั่น
const sapphire = document.querySelector('.side-decor');
if (sapphire) {
  sapphire.addEventListener('click', function() {
    sapphire.classList.add('shake');
    setTimeout(() => sapphire.classList.remove('shake'), 500);
  });
}

// ซ่อนคำบรรยาย sapphire เมื่อคลิก
const sapphireImg = document.querySelector('.side-decor');
const sapphireCaption = document.querySelector('.sapphire-caption');
let captionVisible = false;

if (sapphireImg && sapphireCaption) {
  sapphireImg.addEventListener('click', function() {
    captionVisible = !captionVisible;
    sapphireCaption.classList.toggle('active', captionVisible);
  });
}

// ซ่อนคำบรรยาย float เมื่อคลิก
const floatImg = document.querySelector('.float-decor-img');
const floatCaption = document.querySelector('.float-caption');
let floatCaptionVisible = false;

if (floatImg && floatCaption) {
  floatImg.addEventListener('click', function() {
    floatCaptionVisible = !floatCaptionVisible;
    floatCaption.classList.toggle('active', floatCaptionVisible);
  });
}
// sapphire สั่น
const infp3 = document.querySelector('.float-decor-img');
if (infp3) {
  infp3.addEventListener('click', function() {
    infp3.classList.add('shake');
    setTimeout(() => infp3.classList.remove('shake'), 500);
  });
}