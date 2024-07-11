document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const playlistItems = document.querySelectorAll('.playlist li');
    let currentSongIndex = 0;
    const audio = new Audio();

    const songs = [
        { title: 'Song 1', artist: 'Artist 1', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/82/38/72/8238725f-089e-e1bc-2e0a-1f5f277ef9eb/mzaf_5729136249016242268.plus.aac.p.m4a', cover: 'cover1.jpg' },
        { title: 'Song 2', artist: 'Artist 2', file: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2b/fe/4e/2bfe4e28-b51f-2c9a-8c34-c0275caa753a/mzaf_10693177838948786266.plus.aac.p.m4a', cover: 'cover2.jpg' },
        { title: 'Song 3', artist: 'Artist 3', file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ab/dd/67/abdd6788-1576-573a-ce16-cf369f513a2e/mzaf_6188765204441386695.plus.aac.p.m4a', cover: 'cover3.jpg' }
    ];

    function loadSong(index) {
        const song = songs[index];
        audio.src = song.file;
        document.querySelector('.cover img').src = song.cover;
        document.querySelector('.info h2').textContent = song.title;
        document.querySelector('.info p').textContent = song.artist;
    }

    function playSong() {
        audio.play();
        playButton.textContent = '||';
    }

    function pauseSong() {
        audio.pause();
        playButton.textContent = '▶';
    }

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
    });

    loadSong(currentSongIndex);
});