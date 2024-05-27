document.addEventListener("DOMContentLoaded",
    function () {
        const burgerMenu = document.getElementById("burgerMenu");
        const burger = document.getElementById("burger");
        //apro e chiudo il menu hamburger con un unico pulsante
        burger.addEventListener("click", function () {
            if (burgerMenu.classList.contains("deactiveMenu")) {
                burgerMenu.classList.remove("deactiveMenu");
                burgerMenu.classList.add("activeMenu");
            }
            else {
                burgerMenu.classList.remove("activeMenu");
                burgerMenu.classList.add("deactiveMenu");
            }
        })
        //faccio in modo che il menu si chiuda una volta che clicco su un link al suo interno
        const linksMenu = document.querySelectorAll("nav a");
        linksMenu.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                const offset = 80;
                const targetPosition = document.querySelector(targetId).offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                })
                burgerMenu.classList.remove("activeMenu");
                burgerMenu.classList.add("deactiveMenu");

            })
        })

        //faccio funzionare tutti i bottoni di scorrimento dei progetti
        const prevBtnPrj = document.querySelector('.sx-prj');
        const nextBtnPrj = document.querySelector('.dx-prj');
        const prjContainers = document.querySelector('.collab');
        nextBtnPrj.addEventListener('click', function () {
            prjContainers.style.overflowX = "scroll";
            const prj = document.querySelector('.project');
            prjContainers.scrollLeft += prj.clientWidth;
        })
        prevBtnPrj.addEventListener('click', function () {
            prjContainers.style.overflowX = "scroll";
            const prj = document.querySelector('.project');
            prjContainers.scrollLeft -= prj.clientWidth;
        })



        //faccio funzionare tutti i bottoni di scorrimento
        const prevBtn = document.querySelectorAll('.button-sx');
        const nextBtn = document.querySelectorAll('.button-dx');
        const diskContainers = document.querySelectorAll('.disks');
        for (let i = 0; i < nextBtn.length; i++) {
            const btnNext = nextBtn[i];
            const btnPrev = prevBtn[i];
            btnNext.addEventListener('click', function () {
                diskContainers[i].style.overflowX = "scroll";
                const disk = document.querySelector('.disk');
                diskContainers[i].scrollLeft += disk.clientWidth;
            })
            btnPrev.addEventListener('click', function () {
                diskContainers[i].style.overflowX = "scroll";
                const disk = document.querySelector('.disk');
                diskContainers[i].scrollLeft -= disk.clientWidth;
            })

        }

        //SLIDER HEADBAR SCRIPT (faccio ruotare tre messaggi)

        let currentSlide = 0; //stabilisco una variabile di partenza
        const slides = document.querySelectorAll('.slide-recensioni'); //array con le slide
        function showSlide(index) { //index è un parametro funzionale che mostra l'idice dello slider da visualizzare
            const slideWidth = slides[0].offsetWidth; //larghezza nel monitor dello slider di partenza
            const newTransformValue = -index * slideWidth + 'px'; //stringa che andremo a sostituire come parametro nel nostro CSS
            document.getElementById('slides').style.transform = 'translateX(' + newTransformValue + ')'; //traslo lungo x della larghezza dello schermo per mostrare la slide successiva
        }
        function autoSlide() {
            currentSlide = (currentSlide + 1) % slides.length; //incremento di uno fino ad arrivare alla lunghezza dell'array slide, poi ricomincio
            showSlide(currentSlide);
        }
        setInterval(autoSlide, 10000);


        /////////////
    })

