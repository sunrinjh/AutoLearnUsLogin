if(document.URL == 'https://www.learnus.org/' || document.URL == 'http://www.learnus.org/'){
    window.location.replace("https://www.learnus.org/login.php");
}
if(document.URL.indexOf("https://www.learnus.org/mod/vod/") != -1){
    m3u8 = document.getElementById('my-video_html5_api').childNodes[1].getAttribute('src');
    navigator.clipboard.writeText(m3u8);    
}