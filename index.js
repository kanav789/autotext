const text = "My name is kanav....!";
let index = 0;
function Writtentext() {
    document.body.innerText = text.slice
    (0, index);
    index++;
    if (index > text.length - 1) {
        index = 0;

    }

}
setInterval(Writtentext, 150) 