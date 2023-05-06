const dlBtn = document.querySelector(".dl-btn");
const link = "https://drive.google.com/uc?id=1bw6pHMRqLvk2DiBBpJNKYXriMasvhOGN&export=download";


const initTimer = () => {

    if (dlBtn.classList.contains("disable-timer")) {
        return (location.href = link);
    }

    let timer = dlBtn.dataset.timer;
    dlBtn.classList.add("timer");
    dlBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`

    const initCounter = setInterval(() => {
        if (timer > 0) {
            timer--;
            return dlBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`
        }
        clearInterval(initCounter);
        dlBtn.textContent = "Your file is downloading...";
        location.href = link;


        setTimeout(() => {
            dlBtn.classList.replace("timer", "disable-timer");
            dlBtn.innerHTML = `      <i class="fa-solid fa-download"></i>
            <span>Download Files Again</span>`
        }, 3000);

    }, 1000)
}


dlBtn.addEventListener("click", initTimer);