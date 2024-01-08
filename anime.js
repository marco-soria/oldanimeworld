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
const url= "https://api.jikan.moe/v4/top/anime"

const obtenerAnime = async () => {
  
  const response = await fetch(`${url}?limit=12`);
  const data = await response.json();
  console.log(data.data);
  setAnimeView(data.data);
  
};

obtenerAnime()

const setAnimeView = (results) => {
  // Ordenar los resultados por ranking
  results.sort((a, b) => a.rank - b.rank);
  results.forEach((result, index) => {
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
          </div>
        </div>
      </div>
    `;

    animeContainer.innerHTML += html;
  });
};
/* const setAnimeView = (results) => {
  

  results.map(async (result, index) => {
    const html = `
    <div class = "col-md-3 mt-3">
    <div class ='card'>
    <img class = 'card-img-top mt-2'
    width = '200'
    height = '200'
    src='${url.data.images.webp.large}${index + 1}'>
    <div class = 'card-body text-center'>
    <h6 class ='text-title'>N. ${index + 1}</h6>
    <h4 class ='text-title'>${result.name}</h4>
    </div>
    
      </div>
      </div>
    `;

    animeContainer.innerHTML += html;
  });
};
 */




