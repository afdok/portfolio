
/* for pop-up section start */
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popupcontent');
    const closeBtn = document.getElementById('close');
    const popupDisplayTime = 3000; // délai en millisecondes avant d'afficher le pop-up

    const showPopup = () => {
        if (!getCookie('popupDisplayed')) {
            popup.classList.add('show');
            popup.style.display = "flex";
            setCookie('popupDisplayed', 'true', 1); // le cookie expire en 1 jour
        }
    };

    const hidePopup = () => {
        popup.classList.add('hide');
        setTimeout(() => {
            popup.classList.remove('show');
            popup.classList.remove('hide');
            popup.style.display = "none";
        }, 500); // correspond à la durée de la transition CSS
    };

    // Afficher le pop-up au rechargement de la page après un délai
    setTimeout(showPopup, popupDisplayTime);

    // Fermer le pop-up lorsque le bouton de fermeture est cliqué
    closeBtn.addEventListener('click', hidePopup);

    // Fermer le pop-up lorsqu'on clique à l'extérieur du contenu
    popup.addEventListener('click', (e) => {
        if (e.target.id === 'popup') {
            hidePopup();
        }
    });

    // Fonctions de gestion des cookies
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
});