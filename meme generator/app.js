const genBtn = document.querySelector(".gen-btn");
const memeImg = document.querySelector(".meme-box img");
const memeTitle = document.querySelector(".title");
const memeAuthor = document.querySelector(".author");



const update = (url, title, author) => {
    memeImg.setAttribute("src", url)
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}


const getMeme = () => {

    fetch("https://meme-api.com/gimme")
        .then(res => res.json())
        .then(data => {
            update(data.url, data.title, data.author)
        })
}

genBtn.addEventListener("click", getMeme);

getMeme();