let nb = document.querySelector('#nb');
let boutons = document.querySelectorAll('button');

boutons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let valeur = btn.textContent;

        if (btn.classList.contains('del')) {
            nb.textContent = nb.textContent.slice(0, -1);
        } else if (btn.classList.contains('reset')) {
            nb.textContent = '';
        } else if (btn.classList.contains('egal')) {
            try {
                let expression = nb.textContent.replace(/x/g, '*');
                nb.textContent = eval(expression);
            } catch (e) {
                nb.textContent = 'Erreur';
            }
        } else {
            nb.textContent += valeur;
        }
    });
});