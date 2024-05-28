function typeWriter(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                let tag = '';
                while (text.charAt(i) !== '>') {
                    tag += text.charAt(i);
                    i++;
                }
                tag += text.charAt(i);
                element.innerHTML += tag;
            } else {
                element.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("typewriter-text");
    typeWriter(element, 100);
});