// parents element 
const contentKas = document.querySelector("#content_kas_masjid");

const idPemasukan = document.querySelector("#pemasukan");
idPemasukan.style.display = "none";
const pemasukan = document.querySelector(".pemasukan .card-footer");
pemasukan.addEventListener("click", () => {
    contentKas.style.display = "none";
    idPemasukan.style.display = "block";
})


const idPengeluaran = document.querySelector("#pengeluaran");
idPengeluaran.style.display = "none";
const pengeluaran = document.querySelector(".pengeluaran .card-footer");
pengeluaran.addEventListener("click", () => {
    contentKas.style.display = "none";
    idPengeluaran.style.display = "block";
})

const kembaliPemas = document.querySelectorAll(".position-absolute")[0]
kembaliPemas.addEventListener("click", () => {
    idPemasukan.style.display = "none";
    contentKas.style.display = "block";
})

const kembaliPengel = document.querySelectorAll(".position-absolute")[1]
kembaliPengel.addEventListener("click", () => {
    idPengeluaran.style.display = "none";
    contentKas.style.display = "block";
})