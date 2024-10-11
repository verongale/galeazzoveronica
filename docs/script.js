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
    
});


