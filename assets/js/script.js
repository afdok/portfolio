$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    const btn = document.getElementById('button');

    document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
        event.preventDefault();
        
        btn.value = 'Sending...';

        const serviceID = 'service_55jy9bp';
        const templateID = 'template_xqa33ks';

        emailjs.init("zGZ7M2EbGmvgXl_WH");

        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, (err) => {
            btn.value = 'Send Email';
            alert("Form Submission Failed! Try Again");
        });
        // <!-- emailjs to mail contact form data -->
    });
});
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Anselme Kodia";
            $("#favicon").attr("href", "assets/images/android-chrome-512x512.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/android-chrome-512x512.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "Full Stack web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("../../skills.json")
        :
        response = await fetch("../../projects/projects.json")
    const data = await response.json();
    return data;
}


function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar ${skill.category}">
            <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`
    })
    skillsContainer.innerHTML = skillHTML;
}


function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });
    
    $(document).ready(function() {
        $('#skills .container2').animate({ height: '0%' }, 1000);

      });

  $(document).ready(function() {
    $("#skillsContainer .bar").css("position", "static");
  });



    var $grid = $('.container2').isotope({
        itemSelector: '.bar',
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});



// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 200);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Script
var Tawk_API=Tawk_API || {}, Tawk_LoadStart=new Date();
(function(){
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6545437cf2439e1631eb79c8/1heb8v7q6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1, s0);
})();
//   End of Tawk.to Script

function translatePage(targetLang) {
    const apiKey = 'VOTRE_CLE_API_GOOGLE_TRANSLATE';
    const currentLang = 'en'; // Langue actuelle de la page (en anglais dans cet exemple)

    // Obtenir tout le contenu HTML de la page
    const htmlContent = document.documentElement.innerHTML;

    // Envoyer le contenu HTML à l'API de Google Translate pour traduction
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
        q: htmlContent,
        target: targetLang,
        source: currentLang
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        const translatedHtml = data.data.translations[0].translatedText;

        // Mettre à jour le contenu HTML de la page avec la traduction
        document.open();
        document.write(translatedHtml);
        document.close();
    })
    .catch(error => {
        console.error('Erreur de traduction : ' + error);
    });
}

// Appeler la fonction pour traduire la page lors du chargement
document.addEventListener('DOMContentLoaded', function() {
    translatePage('fr'); // Remplacez 'fr' par la langue cible souhaitée
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
// srtop.reveal('.about .content p', { delay: 200 });


/* SCROLL SKILLS */
// srtop.reveal('.skills .container2', { interval: 200 });
// srtop.reveal('.skills .container2 .bar', { delay: 400 });

/* SCROLL EDUCATION */

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* for pop-up section start*/
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const popupDisplayTime = 3000; // délai en millisecondes avant d'afficher le pop-up

    const showPopup = () => {
        if (!getCookie('popupDisplayed')) {
            popup.classList.add('show');
            setCookie('popupDisplayed', 'true', 1); // le cookie expire en 1 jour
        }
    };

    const hidePopup = () => {
        popup.classList.add('hide');
        setTimeout(() => {
            popup.classList.remove('show');
            popup.classList.remove('hide');
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

