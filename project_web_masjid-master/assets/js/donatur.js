const ulScroll = document.querySelector(".whole-wrap .card_donatur")
const idJumlah = document.querySelector("#jumlah")
const donatur = document.getElementById("list-donatur")
idJumlah.style.display = "none";

const listDonatur = document.querySelectorAll(".card-footer ul li");
for (let i = 0; i < listDonatur.length; i++) {
    listDonatur[i].addEventListener("click", () => {
        if (i == [0]) {
            ulScroll.scrollIntoView({ behavior: "smooth", });
            donatur.style.display = "block";
            idJumlah.style.display = "none";
        } else if (i == [1]) {
            ulScroll.scrollIntoView({ behavior: "smooth", });
            idJumlah.style.display = "block"
            donatur.style.display = "none"
        }
    })
}