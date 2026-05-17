const tracks = [
  { title: "The Firepath", src: "BOM/01.m4a", duration: "3:20" },
  { title: "Heart of Anthonays", src: "BOM/02.m4a", duration: "3:46" },
  { title: "Cabal of 2000", src: "BOM/03.m4a", duration: "3:32" },
  { title: "Pierce Dollan Song", src: "BOM/04.m4a", duration: "3:04" },
  { title: "Saga of Ingress", src: "BOM/05.m4a", duration: "2:55" },
  { title: "Comrade Florio", src: "BOM/06.m4a", duration: "3:11" },
  { title: "Cloister Coup", src: "BOM/07.m4a", duration: "4:04" },
  { title: "Blood of Martyrs", src: "BOM/08.m4a", duration: "4:07" },
  { title: "City of Bone", src: "BOM/09.m4a", duration: "3:16" },
  { title: "Martyr Ishin (Denarii Cover)", src: "BOM/10.m4a", duration: "4:23" },
  { title: "Cherry Blossoms", src: "BOM/11.m4a", duration: "3:58" },
  { title: "Blood of Martyrs (SAG Cover)", src: "BOM/12.m4a", duration: "4:43" },
  { title: "Cherry Blossoms (SAG Cover)", src: "BOM/13.m4a", duration: "4:00" },
];

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const trackList = document.getElementById('trackList');

let currentTrack = 0;
let isPlaying = false;

const m4aMime = "audio/mp4";

function loadTrackList() {
  trackList.innerHTML = '';
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.className = 'track-item';
    li.innerHTML = `
      <span>${index + 1}. ${track.title}</span>
      <span style="color:#888">${track.duration}</span>
    `;
    li.addEventListener('click', () => {
      currentTrack = index;
      loadTrack();
      playTrack();
    });
    trackList.appendChild(li);
  });
}

function loadTrack() {
  audio.src = tracks[currentTrack].src;
  audio.type = m4aMime;

  document.querySelectorAll('.track-item').forEach((item, i) => {
    item.classList.toggle('playing', i === currentTrack);
  });
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function playTrack() {
  audio.play().catch(err => console.error("Ошибка воспроизведения:", err));
  isPlaying = true;
  playBtn.innerHTML = '❚❚';
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '▶';
}

playBtn.addEventListener('click', () => {
  if (isPlaying) pauseTrack();
  else playTrack();
});

nextBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack();
  playTrack();
});

prevBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack();
  playTrack();
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

progress.addEventListener('click', (e) => {
  const rect = progress.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pos * audio.duration;
});

audio.addEventListener('ended', () => {
  nextBtn.click();
});

loadTrackList();
loadTrack();
