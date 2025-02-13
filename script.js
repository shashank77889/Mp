const songs = [
    {
        title: "Through it all",
        artist: "Shashank Sebastian",
        file: "Song1.mp3",
        lyrics: `
            We were just kids, hand in hand,
            Running through the schoolyard, making plans.
            From LKG to the final bell,
            You were right there, you knew me well.

            Through the fights and the endless nights,
            When the world felt cold, you held the light.
            You pulled me up when I was down,
            Turned my silence into sound.

            Through it all, you stood by me,
            In my darkest days, you set me free.
            You were my strength when I felt weak,
            A voice of hope when I couldn't speak.
            No one gets me like you do,
            Brother, my heart beats with you.

            You were the star, the one they saw,
            Cool and smart, you had it all.
            Girls would whisper, call your name,
            But you never let it change your way.

            Through the highs and the deepest lows,
            You saw my pain when no one knows.
            You made me laugh when I would cry,
            Taught me to stand and touch the sky.

            Through it all, you stood by me,
            In my darkest days, you set me free.
            You were my strength when I felt weak,
            A voice of hope when I couldn't speak.
            No one gets me like you do,
            Brother, my heart beats with you.

            If life ever pulls us miles apart,
            Know you're still here inside my heart.
            No distance breaks what time has built,
            No shadow fades the love we've filled.

            So here’s my song, my words to you,
            A thank you note for all you do.
            No matter where this road may bend,
            You’ll always be my greatest friend oh! oh!

            Through it all, you stood by me,
            In my darkest days, you set me free.
            You were my strength when I felt weak,
            A voice of hope when I couldn't speak.
            No one gets me like you do,
            Brother, my heart beats with you
            with you...
            with you...

            If life ever pulls us miles apart,
            Know you're still here inside my heart.
            No distance breaks what time has built,
            No shadow fades the love we've filled.


        `
    }
];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const lyricsDiv = document.querySelector('.lyrics');
const songTitle = document.querySelector('.song-title');
const artist = document.querySelector('.artist');

let currentSong = 0;

function loadSong() {
    const song = songs[currentSong];
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.file;

    // Load lyrics with proper line breaks
    lyricsDiv.innerHTML = song.lyrics.map(line => 
        `<p class="lyric-line">${line}</p>`
    ).join('');
}


// Load Song
function loadSong() {
    const song = songs[currentSong];
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.file;
    
    // Display lyrics without sync
    lyricsDiv.textContent = song.lyrics;
}

// Play/Pause Function
function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
}

// Progress Bar
function updateProgress() {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;
}

// Seek Progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
}

// Event Listeners
playBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
});
nextBtn.addEventListener('click', () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong();
    audio.play();
});

audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
audio.addEventListener('ended', () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong();
    audio.play();
});

// Initial load
loadSong();
