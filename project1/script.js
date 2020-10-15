var vid = document.getElementById("background-video");
vid.playbackRate = 0.8;

setTimeout(function() { show_youtube(); }, 5000);

function show_youtube() {
    document.getElementById('script-container').style.display = 'none';
    document.getElementById('phone').style.display = 'block';
    document.getElementById('video-lettering').style.display = 'block';
    importYoutube()
    onYouTubeIframeAPIReady();
}

function importYoutube(){
    var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('youtube', {
        height: '430',
        width: '740',
        videoId: 'Wf_2Q2wRWes',
        events: {
        'onReady': onPlayerReady
        }
    });
}
    
    // 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}
    