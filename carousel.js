// Dati dei prodotti organizzati per categoria
const prodotti = {
    natalizia: [
        {
            id: 1,
            titolo: "Candela Natalizia - Red Velvet",
            prezzo: "€ 20,00",
            descrizione: "Profumo di arancia e spezie, ispirata alle feste. Realizzata con stoppino in cotone e contenitore in vetro riutilizzabile.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
        },
        {
            id: 2,
            titolo: "Candela Natalizia - Golden Snow",
            prezzo: "€ 22,00",
            descrizione: "Una miscela di cannella, chiodi di garofano e mandarino per un'atmosfera dorata e festiva.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
        },
        {
            id: 3,
            titolo: "Candela Natalizia - Winter Spice",
            prezzo: "€ 18,00",
            descrizione: "Note calde di zenzero, cannella e vaniglia. Perfetta per le serate invernali in compagnia.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
        },
        {
            id: 4,
            titolo: "Candela Natalizia - Frosted Pine",
            prezzo: "€ 19,00",
            descrizione: "Profumo fresco di pino innevato con note di cedro. Evoca il profumo del bosco natalizio.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
        }
    ],
    autunnale: [
        {
            id: 1,
            titolo: "Candela Autunnale - Spiced Amber",
            prezzo: "€ 18,00",
            descrizione: "Candela in cera di soia con note di cannella e vaniglia. Perfetta per creare un'atmosfera calda nelle serate autunnali.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.34.jpeg"
        },
        {
            id: 2,
            titolo: "Candela Autunnale - Harvest Moon",
            prezzo: "€ 17,00",
            descrizione: "Profumo di mela, zucca e spezie. Un'esperienza olfattiva che cattura l'essenza dell'autunno.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.34.jpeg"
        },
        {
            id: 3,
            titolo: "Candela Autunnale - Forest Walk",
            prezzo: "€ 19,00",
            descrizione: "Note legnose e terrene con accenni di foglie secche e muschio. Ideale per le serate cozy.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.34.jpeg"
        }
    ],
    primaverile: [
        {
            id: 1,
            titolo: "Candela Primaverile - Blossom",
            prezzo: "€ 16,00",
            descrizione: "Profumazione fresca di fiori di campo e cera naturale. Porta la primavera in casa con una luce dolce e color pastello.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (3).jpeg"
        },
        {
            id: 2,
            titolo: "Candela Primaverile - Fresh Meadow",
            prezzo: "€ 17,00",
            descrizione: "Note di erba fresca, lilac e gelsomino. Perfetta per rinfrescare le stanze di casa in primavera.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (3).jpeg"
        },
        {
            id: 3,
            titolo: "Candela Primaverile - Garden Awakening",
            prezzo: "€ 18,00",
            descrizione: "Profumo delicato di peonia, tulipano e menta. Come camminare in un giardino fiorito al mattino.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (3).jpeg"
        }
    ],
    estiva: [
        {
            id: 1,
            titolo: "Candela Estiva - Tropical Breeze",
            prezzo: "€ 19,00",
            descrizione: "Note di cocco, lime e fiori tropicali. Trasporta la brezza estiva direttamente nella tua casa.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
        },
        {
            id: 2,
            titolo: "Candela Estiva - Beach Sunset",
            prezzo: "€ 20,00",
            descrizione: "Profumo salato-fresco con note di agrumi e ambra. Evoca il profumo del mare al tramonto.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
        },
        {
            id: 3,
            titolo: "Candela Estiva - Lavender Dream",
            prezzo: "€ 17,00",
            descrizione: "Profumo rilassante di lavanda francese con accenni di miele. Perfetta per le serate estive serene.",
            immagine: "static/images/WhatsApp Image 2025-10-25 at 13.28.35 (1).jpeg"
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
