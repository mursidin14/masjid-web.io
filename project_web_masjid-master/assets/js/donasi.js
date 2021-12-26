const donasi = document.querySelectorAll("#donasi input");
donasi.forEach((donate) => {
    donate.addEventListener("click", (e) => {
        let saldo = document.querySelector(".total-donasi input");
        saldo.value = e.target.value;
    })
})