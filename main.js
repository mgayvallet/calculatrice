let nb = document.querySelector('#nb');
let boutons = document.querySelectorAll('button');

boutons.forEach((btn) => {
    btn.addEventListener('click', () => {
        traiterEntree(btn.textContent, btn.classList);
    });
});

document.addEventListener('keydown', (event) => {
    let touche = event.key;

    if (!isNaN(touche) || ['+', '-', '*', '/', '.', '(', ')'].includes(touche)) {
        if (touche === '*') {
            nb.textContent += 'x';
        } else {
            nb.textContent += touche;
        }
    } else if (touche === 'Backspace') {
        nb.textContent = nb.textContent.slice(0, -1);
    } else if (touche === 'Enter') {
        try {
            let expression = nb.textContent.replace(/x/g, '*');
            nb.textContent = eval(expression);
        } catch (e) {
            nb.textContent = 'Erreur';
        }
    } else if (touche === 'Escape') {
        nb.textContent = '';
    }
});

function traiterEntree(valeur, classes) {
    if (classes?.contains('del')) {
        nb.textContent = nb.textContent.slice(0, -1);
    } else if (classes?.contains('reset')) {
        nb.textContent = '';
    } else if (classes?.contains('egal')) {
        try {
            let expression = nb.textContent.replace(/x/g, '*');
            nb.textContent = eval(expression);
        } catch (e) {
            nb.textContent = 'Error';
        }
    } else {
        nb.textContent += valeur;
    }
}
