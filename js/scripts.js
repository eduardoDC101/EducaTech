function mudarVideo(videoId) {
    const iframe = document.getElementById('video-iframe');
    const novaUrl = `https://www.youtube.com/embed/${videoId}`;
    iframe.src = novaUrl;
}