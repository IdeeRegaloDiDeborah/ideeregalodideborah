// Dati dei prodotti organizzati per categoria
const prodotti = {
    natalizia: [
        {
            id: 1,
            titolo: "Candela Natalizia - Nome 1",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 1",
            immagine: "static/images/natale/natalizia1.jpeg"
        },
        {
            id: 2,
            titolo: "Candela Natalizia - Nome 2",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 2",
            immagine: "static/images/natale/natalizia2.jpeg"
        },
        {
            id: 3,
            titolo: "Candela Natalizia - Nome 3",
            prezzo: "€ XX, XX",
            descrizione: "Inserire descrizione per candela 3",
            immagine: "static/images/natale/natalizia3.jpeg"
        },
        {
            id: 4,
            titolo: "Candela Natalizia - Nome 4",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 4",
            immagine: "static/images/natale/natalizia4.jpeg"
        }
    ],
    autunnale: [
        {
            id: 1,
            titolo: "Candela Autunnale - Nome 1",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 1",
            immagine: "static/images/autunno/autunnale1.jpeg"
        },
        {
            id: 2,
            titolo: "Candela Autunnale - Nome 2",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 2",
            immagine: "static/images/autunno/autunnale2.jpeg"
        },
        {
            id: 3,
            titolo: "Candela Autunnale - Nome 3",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 3",
            immagine: "static/images/autunno/autunnale3.jpeg"
        },
        {
            id: 4,
            titolo: "Candela Autunnale - Nome 4",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 4",
            immagine: "static/images/autunno/autunnale4.jpeg"
        },
        {
            id: 5,
            titolo: "Candela Autunnale - Nome 5",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 5",
            immagine: "static/images/autunno/autunnale5.jpeg"
        },
        {
            id: 6,
            titolo: "Candela Autunnale - Nome 6",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 6",
            immagine: "static/images/autunno/autunnale6.jpeg"
        }
    ],
    primaverile: [
        {
            id: 1,
            titolo: "Candela Primaverile - Nome 1",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 1",
            immagine: "static/images/primavera/primavera1.jpeg"
        },
        {
            id: 2,
            titolo: "Candela Primaverile - Nome 2",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 2",
            immagine: "static/images/primavera/primavera2.jpeg"
        },
        {
            id: 3,
            titolo: "Candela Primaverile - Nome 3",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 3",
            immagine: "static/images/primavera/primavera3.jpeg"
        }, 
        {
            id: 4,
            titolo: "Candela Primaverile - Nome 4",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 4",
            immagine: "static/images/primavera/primavera4.jpeg"
        }
    ],
    sanvalentino: [
        {
            id: 1,
            titolo: "Candela San Valentino - Nome 1",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 1",
            immagine: "static/images/sanvalentino/sanvalentino1.jpeg"
        },
        {
            id: 2,
            titolo: "Candela San Valentino - Nome 2",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 2",
            immagine: "static/images/sanvalentino/sanvalentino2.jpeg"
        },
        {
            id: 3,
            titolo: "Candela San Valentino - Nome 3",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 3",
            immagine: "static/images/sanvalentino/sanvalentino3.jpeg"
        }, 
        {
            id: 4,
            titolo: "Candela San Valentino - Nome 4",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per candela 4",
            immagine: "static/images/sanvalentino/sanvalentino4.jpeg"
        }
    ], 
    composizioni: [
        {
            id: 1,
            titolo: "Composizione nome 1",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per composizione 1",
            immagine: "static/images/composizione/composizione1.jpeg"
        },
        {
            id: 2,
            titolo: "Composizione nome 2",
            prezzo: "€ XX,XX",
            descrizione: "Inserire descrizione per composizione 2",
            immagine: "static/images/composizione/composizione2.jpeg"
        }
    ]
};

let currentSlide = 0;
let currentCategory = '';

// Elementi del DOM
const modal = document.getElementById('carouselModal');
const closeBtn = document.querySelector('.modal-close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideImage = document.getElementById('slideImage');
const slideTitolo = document.getElementById('slideTitolo');
const slidePrezzo = document.getElementById('slidePrezzo');
const slideDescrizione = document.getElementById('slideDescrizione');
const dotsContainer = document.getElementById('dotsContainer');

// Event listeners per i prodotti
document.querySelectorAll('.prodotto').forEach(prodotto => {
    prodotto.addEventListener('click', function() {
        const category = this.dataset.category;
        openCarousel(category);
    });
});

// Funzione per aprire il carosello
function openCarousel(category) {
    currentCategory = category;
    currentSlide = 0;
    
    modal.style.display = 'flex';
    createDots();
    updateSlide();
}

// Funzione per chiudere il modal
function closeCarousel() {
    modal.style.display = 'none';
}

// Aggiorna lo slide attuale
function updateSlide() {
    const items = prodotti[currentCategory];
    const item = items[currentSlide];
    
    slideImage.src = item.immagine;
    slideTitolo.textContent = item.titolo;
    slidePrezzo.textContent = item.prezzo;
    slideDescrizione.textContent = item.descrizione;
    
    // Aggiorna i dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Crea i puntini di navigazione
function createDots() {
    const itemCount = prodotti[currentCategory].length;
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < itemCount; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Vai a uno slide specifico
function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

// Slide precedente
function previousSlide() {
    const itemCount = prodotti[currentCategory].length;
    currentSlide = (currentSlide - 1 + itemCount) % itemCount;
    updateSlide();
}

// Slide successivo
function nextSlide() {
    const itemCount = prodotti[currentCategory].length;
    currentSlide = (currentSlide + 1) % itemCount;
    updateSlide();
}

// Event listeners
closeBtn.addEventListener('click', closeCarousel);
prevBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);

// Chiudi il modal cliccando fuori
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeCarousel();
    }
});

// Supporto per i tasti freccia
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowLeft') previousSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'Escape') closeCarousel();
    }
});
