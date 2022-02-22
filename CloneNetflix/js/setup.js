

jQuery(document).ready(function () {
    // Exibe ou oculta o botão
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.voltar-ao-topo').fadeIn(200);
        } else {
            jQuery('.voltar-ao-topo').fadeOut(200);
        }
    });

    // Faz animação para subir
    jQuery('.voltar-ao-topo').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, 300);
    })
});


/* API-KEY-TMDB - https://api.themoviedb.org/3/movie/550?api_key=cc620f2cd38fa17fba4d0b920a4961e5*/
/*https://www.youtube.com/watch?v=YVf7iy2sIOw */
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function cria_card(movie) {
    console.log(movie)
    //div = document.createElement("div");
    //div.className = "owl-carousel owl-theme owl-loaded owl-drag";
    divitem = document.createElement("div");
    divitem.className = "item";
    //div.className = "owl-stage active ";
    img = document.createElement("img")
    let idmove = movie.id + " box-filme";
    console.log(idmove)
    img.className = "box-filme ";
    img.id = idmove;
    img.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path


    divitem.appendChild(img);
    //div.appendChild(divitem);
    //console.log(divitem);
    return divitem;
}

function main() {

    let url = "https://api.themoviedb.org/3";
    let key = "&api_key=cc620f2cd38fa17fba4d0b920a4961e5";
    let movie = "/discover/movie?sort_by=popularity.desc";
    let lang = "&language=pt-br"
    let data = fazGet(url + movie + key + lang);

    let carrosel = document.getElementById("carrosel_filmes");
    //console.log("carrosel - " + carrosel)
    //let carrosel = document.getElementsByClassName("owl-carousel");
    //console.log("classname " + carrosel.className);
    let movies = JSON.parse(data);
    //console.log(movies.results[4])
    //console.log("https://image.tmdb.org/t/p/w500" + movies.results[5].overview);

    movies.results.forEach(element => {
        let card_movie = cria_card(element);
        carrosel.appendChild(card_movie)
    });

}

main()

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})