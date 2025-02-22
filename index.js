const tombolHari = document.getElementById("img-hari");
const imgFabio = document.getElementById("img-fabio");
const imgTime = document.getElementById("Wrapper");
const hari = document.getElementById("digithari");
const jam = document.getElementById("digitjam");
const menit = document.getElementById("digitmenit");
const detik = document.getElementById("digitdetik");
const targetHari = new Date("February 27 2025 06:00:00").getTime();

tombolHari.addEventListener("click", () => {
    imgTime.classList.add("open");
    imgFabio.classList.add("close");
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
}
setInterval(timer, 1000)
