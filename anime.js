/* let items = document.querySelectorAll('.carousel .carousel-item')


		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
}) */

let carruseles = document.querySelectorAll('.carousel');

carruseles.forEach((carrusel) => {
    let items = carrusel.querySelectorAll('.carousel-item');
    const minPerSlide = 4;

    items.forEach((el) => {
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
});

// fecth api jikan
const animeContainer = document.querySelector("#row-ranking");
const url = "https://api.jikan.moe/v4/top/anime";

const obtenerAnime = async () => {
  const response = await fetch(`${url}?limit=12`);
  const data = await response.json();
  setAnimeView(data.data);
};

obtenerAnime();

const setAnimeView = (results) => {
  // Ordenar los resultados por ranking
  results.sort((a, b) => a.rank - b.rank);
  results.forEach((result, index) => {
    const synopsisString = JSON.stringify(result.synopsis).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
    const html = `
      <div class="col-md-4 mt-3">
        <div class="card" style="height: 1100px;">
          <img class="card-img-top mt-2"
            style="object-fit: cover; height: 80%;"
            src="${result.images.jpg.large_image_url}"
            alt="${result.title}">
          <div class="card-body text-center">
            <h6 class="text-title">N. ${result.rank}</h6>
            <h4 class="text-title">${result.title}</h4>
            <p class="text-title">Score: ${result.score}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#synopsisModal" data-synopsis="${synopsisString}">
              Ver Sinopsis
            </button>
          </div>
        </div>
      </div>
    `;

    animeContainer.innerHTML += html;
  });

  // Agregar evento click a los botones después de cargar el contenido
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
      const synopsis = this.getAttribute('data-synopsis');
      cargarSinopsis(synopsis);
    });
  });
};

const cargarSinopsis = (synopsis) => {
  const synopsisContent = document.getElementById("synopsisContent");
  const cleanSynopsis = synopsis.replace(/\\n/g, '<br>').replace(/\\"/g, '"');
  synopsisContent.innerHTML = `<p>${cleanSynopsis}</p>`;
};



let exsynopsis = "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing automail, a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname Fullmetal, the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]"

/* const obtainSynopsis = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("detalle", data);

  pokemonName.innerHTML = data.data.title;
  pokemonSynopsis.innerHTML = data.data.synopsis;
};
 */



