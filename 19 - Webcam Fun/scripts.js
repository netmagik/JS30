const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices.getUserMedia( { video: true, audio: false })
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => {
        console.error('NO! I got error', err);
    })
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    console.log(width, height)

    // Every 16 sec take an image from webcam and put into the photo

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        //pixels = redEffect(pixels);

        pixels = rgbSplit(pixels);
        ctx.globalApha = 0.1;
        // put them back
        ctx.putImageData (pixels, 0, 0);
    }, 16);

}

function takePhoto() {
    // Played the sound
    snap.currentTime = 0;
    snap.play();

    // Take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Me" />`;
    strip.insertBefore(link, strip.firstChild);
    console.log(data);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i = i + 4) {
        pixels[i] = pixels.data[i] + 300; // red channel
        pixels[i + 1] = pixels.data[i + 1] - 50; // green channel
        pixels[i + 2] = pixels.data[i + 2] * 0.5; // blue channel
}
    return pixels;

}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i = i + 4) {
        pixels[i - 150] = pixels.data[i + 0]; // red channel
        pixels[i + 100] = pixels.data[i + 1]; // green channel
        pixels[i - 550] = pixels.data[i + 2]; // blue channel
}
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    
}

getVideo();

video.addEventListener('canplay', paintToCanvas);