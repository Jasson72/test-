const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#ccc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (e.touches ? e.touches[0].clientX : e.clientX) - rect.left,
        y: (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
    };
}

function scratch(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getTouchPos(e);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.fill();
}

function startScratch(e) {
    isDrawing = true;
    scratch(e);
}

function stopScratch() {
    isDrawing = false;
}

canvas.addEventListener('mousedown', startScratch);
canvas.addEventListener('mouseup', stopScratch);
canvas.addEventListener('mousemove', scratch);

canvas.addEventListener('touchstart', startScratch);
canvas.addEventListener('touchend', stopScratch);
canvas.addEventListener('touchmove', scratch);

window.addEventListener('resize', setupCanvas);

setupCanvas();




const tombolHari = document.getElementById("img-hari");
const imgFabio = document.getElementById("img-fabio");
const imgorg = document.getElementById("img-ambatukam");
const imgTime = document.getElementById("Wrapper");
const hari = document.getElementById("digithari");
const jam = document.getElementById("digitjam");
const menit = document.getElementById("digitmenit");
const detik = document.getElementById("digitdetik");
const audio = document.getElementById("ambatukam");
const targetHari = new Date("February 27 2025 06:00:00").getTime();
const Hmin3 = new Date ("February 24 2025 06:00:00").getTime();
const Hmin2 = new Date ("February 25 2025 06:00:00").getTime();
const Hmin1 = new Date ("February 26 2025 06:00:00").getTime();

tombolHari.addEventListener("click", () => {
    imgTime.classList.add("open");
    imgFabio.classList.add("close");
})

imgorg.addEventListener("click", () => {
    audio.play();
})

function timer ()  {
    const hariSekarang = new Date().getTime();
    const jedaWaktu = targetHari - hariSekarang;
    const Hari = Math.floor(jedaWaktu / 1000 / 60 / 60 / 24);
    const Jam = Math.floor(jedaWaktu / 1000 / 60 / 60) % 24;
    const Menit = Math.floor(jedaWaktu / 1000 / 60) % 60;
    const Detik = Math.floor(jedaWaktu / 1000) % 60;

    hari.innerHTML = Hari;
    jam.innerHTML = Jam;
    menit.innerHTML = Menit;
    detik.innerHTML = Detik;

    if (hariSekarang >= Hmin3) {
        imgFabio.src = "None"
        imgFabio.src = "h-3.png";
    } 

    if (hariSekarang >= Hmin2) {
        imgFabio.src = "None"
        imgFabio.src = "h-2.png";
    }

    if (hariSekarang >= Hmin1) {
        imgFabio.src = "None"
        imgFabio.src = "h-1.png";
    }
    
}
timer()
setInterval(timer, 1000)
