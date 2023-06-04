function debounce(fn, delay) {
    let timer;
    return args => {
        // ignore other request for delay
        if(timer) clearTimeout(timer);
        timer = setTimeout(fn, delay, args);
    }
}

function scrollCallback() {
    console.log("scrolling...");
}

window.addEventListener('scroll', debounce(scrollCallback, 1000));