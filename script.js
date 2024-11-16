const API_BASE = "https://savetube.cc"; // API pública SaveTube

document.getElementById('download-video').addEventListener('click', () => {
    const url = document.getElementById('youtube-url').value.trim();
    if (!url) {
        alert('Por favor, insira uma URL válida.');
        return;
    }
    // URL para download de vídeo
    const videoUrl = `${API_BASE}/download/video?url=${encodeURIComponent(url)}`;
    window.open(videoUrl, '_blank');
});

document.getElementById('download-mp3').addEventListener('click', () => {
    const url = document.getElementById('youtube-url').value.trim();
    if (!url) {
        alert('Por favor, insira uma URL válida.');
        return;
    }
    // URL para download de MP3
    const mp3Url = `${API_BASE}/download/mp3?url=${encodeURIComponent(url)}`;
    window.open(mp3Url, '_blank');
});

