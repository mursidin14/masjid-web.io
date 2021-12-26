const idContainer = document.querySelector("#container");
const sectionMading = document.querySelector("#section-mading")

const mading1 = document.querySelector("#mading1")
const mading2 = document.querySelector("#mading2")
const mading3 = document.querySelector("#mading3")
const Tombol = document.querySelectorAll("#container button")
for (let i = 0; i < Tombol.length; i++) {
    Tombol[i].addEventListener("click", () => {
        if (i == [0]) {
            sectionMading.scrollIntoView({ behavior: "smooth", });
            idContainer.style.display = "none"
            mading1.style.display = "block"
        } else if (i == [1]) {
            sectionMading.scrollIntoView({ behavior: "smooth", });
            idContainer.style.display = "none"
            mading2.style.display = "block"
        } else if (i == [2]) {
            sectionMading.scrollIntoView({ behavior: "smooth", });
            idContainer.style.display = "none"
            mading3.style.display = "block"
        }
    })
}