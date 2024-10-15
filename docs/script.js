document.addEventListener('DOMContentLoaded', () => {
    const menuicon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const scritte = document.querySelector('.hero');
    const bottone = document.querySelector('.bottone');
    const aboutpage = document.querySelector('.aboutpage');
    const luna = document.querySelector('#luna');
    const sole = document.querySelector('#sole');

 

    menuicon.addEventListener('click', () => {
        console.log('cliccato');

        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }

        if (scritte.style.display != 'none') {
            scritte.style.display = 'none'
        } else {
            scritte.style.display = 'flex';
        }

         // Toggle the "open" class to transform the menu icon to an "X"
        menuicon.classList.toggle('open');
  
        // Toggle the visibility of the menu
        menu.classList.toggle('show');
        
    });

    bottone.addEventListener('click', () => {
        console.log('cliccato');
        aboutpage.classList.toggle('dark-mode');
       
        
        

        if (luna.style.display === 'none') {
            luna.style.display = 'block';
            sole.style.display = 'none';
        } else {
            luna.style.display = 'none';
            sole.style.display = 'block';
        }
            
        

    });

        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item'); // Seleziona tutte le immagini del carosello
        const totalItems = items.length; // Numero totale di immagini

        function updateCarousel() {
        // Calcola il nuovo valore di trasformazione
        const offset = currentIndex * -25; // Moltiplica l'indice per -25% per muoversi di un'immagine alla volta
        document.querySelector('.carousel-images').style.transform = `translateX(${currentIndex * -25}%)`;
        }

        function moveSlide(direction) {
        currentIndex += direction;

        // Se si va oltre l'ultima immagine, torna all'inizio
        if (currentIndex >= totalItems - 3) {
            currentIndex = 0;
        }

        // Se si va prima della prima immagine, torna alla fine
        if (currentIndex < 0) {
            currentIndex = totalItems - 4;
        }

        updateCarousel();
        }

        document.querySelector('.prev').addEventListener('click', () => moveSlide(-1)); // Muovi verso sinistra
        document.querySelector('.next').addEventListener('click', () => moveSlide(1));  // Muovi verso destra
        


        const statements = [
            {
                text: "Ho nuotato con gli squali alle Hawaii",
                isLie: false,
                explanation: "Una delle più belle esperienze della mia vita, in uno dei posti più belli del mondo. <br> <br> Prova di nuovo!"
            },
            {
                text: "Ho imparato a parlare coreano durante il lockdown",
                isLie: true,
                explanation: "Purtroppo no, ci ho provato, avevo comprato anche i libri di grammatica. Pare però che io debba lavorarci ancora un po'... Parecchio a dire il vero. <br> <br>Ora che mi conosci un po' meglio sei interessato/a a collaborare? Contattami!"
            },
            {
                text: "Da adolescente andai su Disney Channel",
                isLie: false,
                explanation: "A quanto pare Andy Warhol aveva ragione, ognuno nella vita ha quindici minuti di fama. Da adolescente fui finalista di un concorso di doppiaggio indetto dalla Disney e l'evento fu trasmesso su Disney Channel. <br> <br> Prova di nuovo!"
            }
        ];

        const statementsContainer = document.getElementById("statements");
        const checkBtn = document.getElementById("check-btn");
        const resultContainer = document.getElementById("result");
        let selectedStatement;

        function loadStatements() {
            statements.forEach((statement, index) => {
                const li = document.createElement("li");
                li.textContent = statement.text;
                li.addEventListener("click", () => {
                    selectStatement(index);
                    
                });
                statementsContainer.appendChild(li);
                

            });
        }

        function selectStatement(index) {
            selectedStatement = statements[index];
            const items = document.querySelectorAll("#statements li");
            console.log(items);

            // Rimuovi la classe "selected" da tutti gli elementi della lista
            items.forEach(item => item.classList.remove("selected"));

            // Aggiungi la classe "selected" all'elemento cliccato
            items[index].classList.add("selected");
            console.log(`Elemento ${index + 1} selezionato, classe "selected" aggiunta a:`, items[index]);

               
        }


        checkBtn.addEventListener("click", () => {
            if (!selectedStatement) {
                alert("Per favore, seleziona un'affermazione prima di controllare!");
                return;
            }

            resultContainer.classList.remove("hidden");
            resultContainer.innerHTML = `<strong>${selectedStatement.isLie ? "Hai scelto la bugia!" : "Hai scelto una verità!"}</strong><br>${selectedStatement.explanation}`;
        });

        loadStatements();
});


