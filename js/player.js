const tracks = [
  { title: "Eternal Purge", src: "NOV/01.m4a", duration: "5:40" },
  { title: "Never Alone", src: "NOV/02.m4a", duration: "4:30" },
  { title: "March of Enthusiasts", src: "NOV/03.m4a", duration: "3:37" },
  { title: "Time of Troubles", src: "NOV/04.m4a", duration: "3:13" },
  { title: "Martyr Ishin", src: "NOV/05.m4a", duration: "5:23" },
  { title: "The Iron Faith", src: "NOV/06.m4a", duration: "3:22" },
  { title: "Pitta's Carnage", src: "NOV/07.m4a", duration: "3:33" },
  { title: "Brick in the Wall", src: "NOV/08.m4a", duration: "2:43" },
  { title: "Imperial Reaper", src: "NOV/09.m4a", duration: "3:29" },
  { title: "Final Strike", src: "NOV/10.m4a", duration: "3:37" },
  { title: "Agate Into Splinters", src: "NOV/11.m4a", duration: "3:07" },
  { title: "Way of Goddess", src: "NOV/14.m4a", duration: "3:38" },
  { title: "Eternal Purge (Kaine Cover)", src: "NOV/12.m4a", duration: "5:50" },
  { title: "Martyr Ishin (Denarii Cover)", src: "NOV/13.m4a", duration: "4:23" },
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
