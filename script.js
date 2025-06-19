document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".sponsors-slider");
    const images = Array.from(slider.children);
    const imageWidth = images[0].offsetWidth + 10; // Largeur + marge entre images

    let scrollAmount = 0;
    let cloned = false;

    function scrollSponsors() {
        scrollAmount += 3; // Ajuste cette valeur pour ralentir ou accélérer
        slider.style.transform = `translateX(${-scrollAmount}px)`;

        // Cloner les premières images pour un défilement infini
        if (!cloned && scrollAmount >= slider.scrollWidth / 2) {
            images.forEach((img) => {
                let clone = img.cloneNode(true);
                slider.appendChild(clone);
            });
            cloned = true;
        }

        // Réinitialiser quand la moitié des images a été affichée
        if (scrollAmount >= slider.scrollWidth / 2) {
            scrollAmount = 0;
            slider.style.transition = "none"; // Pas d'animation pour éviter un saut
            slider.style.transform = `translateX(0px)`;
            setTimeout(() => {
                slider.style.transition = "transform 0.02s linear"; // Remettre l'animation
            }, 10);
        }
    }

    let scrollInterval = setInterval(scrollSponsors, 30);

    // Arrêter le défilement au survol
    document.querySelector(".sponsors-container").addEventListener("mouseover", function () {
        clearInterval(scrollInterval);
    });

    // Reprendre le défilement à la sortie
    document.querySelector(".sponsors-container").addEventListener("mouseout", function () {
        scrollInterval = setInterval(scrollSponsors, 30);
    });
});

/* Ouvrir la barre de navigation sur téléphone de manière responsive et sous format hamburger */
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // pour rendre les sous-menus cliquables sur mobile
    dropdowns.forEach(drop => {
        drop.addEventListener('click', () => {
            drop.classList.toggle('active');
        });
    });


/* Automatisation des cards sponsors avec du JS */
/*const sponsors = [
      {
        name: "Nest",
        img: "images/nest.png",
        url: "https://www.nest-renovation.fr/"
      },
      {
        name: "Samsic",
        img: "images/samsic.png",
        url: "https://www.samsic.fr/"
      },
      {
        name: "Bénéfiq Habitat",
        img: "images/benefiq.png",
        url: "https://benefiq-habitat.fr/"
      },
      {
        name: "Réseau Le Saint",
        img: "images/lesaint.png",
        url: "https://www.reseau-lesaint.fr/"
      },
      {
        name: "Kibinn",
        img: "images/kibinn.png",
        url: "https://www.kibinn.bzh/"
      },
      // Tu peux en ajouter autant que nécessaire ici
    ];

    const container = document.getElementById("sponsor-cards-container");

    sponsors.forEach(sponsor => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${sponsor.img}" alt="${sponsor.name}">
        <a href="${sponsor.url}" target="_blank" rel="noopener noreferrer">
          <button class="site-internet">Site internet</button>
        </a>
      `;
      container.appendChild(card);
    });
    */
