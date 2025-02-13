$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() { 
        open();
    });
    
    btn_open.click(function() { 
        open();
    });
    
    btn_reset.click(function() { 
        close(); });
    function open() {
        envelope.addClass("open") 
            .removeClass("close");
    }
    
    function close() {
        envelope.addClass("close")
        .removeClass("open");
    }

})

const bgMusic = document.getElementById("bg-music");

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
}
