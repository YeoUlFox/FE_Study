function transition() {
    var ele = document.getElementById("anim");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
           clearInterval(id);
        } else {
            pos++; 
            ele.style.top = pos + 'px'; 
            ele.style.left = pos + 'px'; 
        }
    }
}