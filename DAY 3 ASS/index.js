const data = [{

    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/1024px-Espaguetis_carbonara.jpg",
    title: "Spaghetti",
    about: " Roman pasta dish[1][2] made with eggs, hard cheese, cured pork, and black pepper. The dish took its modern form and name in the middle of the 20th century.",
    rating: "⭐⭐⭐⭐",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg/390px-Tiramisu_with_blueberries_and_raspberries%2C_July_2011.jpg",
    title: "Tiramisu",
    rating: "⭐⭐⭐⭐⭐",
    about: "  A coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Acqua_pazza.jpg",
    title: "Acqua pazza ",
    rating: "⭐⭐⭐",
    about: "A variation of Acqua pazza featuring black olives, scallions and mushrooms",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CapponMagroMD.jpg/450px-CapponMagroMD.jpg",
    title: "Cappon magro",
    rating: "⭐⭐⭐⭐",
    about: "An elaborate Genoese salad of seafood and vegetables over hardtack arranged into a decorative pyramid and dressed with a rich sauce.",
},
{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cacciucco.jpg/330px-Cacciucco.jpg",
    title: "Cacciucco",
    rating: "⭐⭐⭐⭐",
    about: "An Italian fish stew native to the western coastal towns of Tuscany.",
},
];

const moviebox = document.getElementById('showmovie');
data.map((el) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const about = document.createElement('div');
    image.src = el.image;
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
            div.append(about);
            button.innerText = "Less";
            about.style.position = "relative";
            about.style.marginTop = '-360px';
            about.style.textAlign = "justify";
            about.style.padding = "10%";
            about.style.backgroundColor = "rgba(0,0,0,0.9)";
            about.style.height = "290px";
            about.style.width = "300px";
            about.style.borderRadius = '7px';
            about.style.marginLeft = '0px';
            about.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'TrebuchetMS', sans-serif";

            about.style.color = "white";
            about.style.fontVariant = "normal";
        }
        else {
            about.remove();
            button.innerText = "More";
        }
    });
    moviebox.append(div);
});