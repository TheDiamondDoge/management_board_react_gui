export function funcWithDelay(f, delay) {
    let timeout;
    return function () {
        let args = arguments;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(function () {
            f.apply(this, args)
        }, delay);
    }
}