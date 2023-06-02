
fetch("http://localhost:5500/food", {
    method: "GET"
}).then((response) => response.json())
    .then((data) =>
        renderData(data))
function renderData(data) {
    const moviebox = document.getElementById('showmovie');
    data.map((el) => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const about = document.createElement('div');
        image.src = el.image;
        image.id = "img1";
        about.innerText = el.about;
        const movieTitle = document.createElement('h3');
        movieTitle.innerText = el.title;

        const rating = document.createElement('p');
        rating.innerText = el.rating;
        const button = document.createElement('button');
        button.innerText = "More";
        div.append(image);
        div.append(movieTitle, rating, button);
        button.id = "button1";
        div.style.backgroundColor = "black";
        div.id = "movie-box";
        button.addEventListener('click', () => {
            if (button.innerText == "More") {
                button.innerText = "Less";
                about.id = "about"
                div.append(about)
            }
            else {
                about.remove();
                button.innerText = "More";
            }
        });
        moviebox.append(div);
    });
}

