function throttle(fn, delay) {
    let timer; // count by setTimeout function

    return args => {
        // if has timer
        if(timer) return;

        timer = setTimeout(()=> {
            fn(args);
            timer = null; // turn off timer
        }, delay, args)
    }
}

function scrollCallback() {
    console.log("scrolling...");
}

window.addEventListener('scroll', throttle(scrollCallback, 1000));