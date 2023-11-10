$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience ',{delay: 400});
srtop.reveal('.experience  .container',{interval: 400}); 


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


// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

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

//debut a supprimer

function getExperiences() {
    return fetch("experience.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

function showExperiences(experiences) {
    let experiencesContainer = document.querySelector(".experience .timeline");
    let experiencesHTML = "";
    experiences.forEach(exp => {
        experiencesHTML += `
        <div class="container ${exp.category}">
            <div class="content">
            <div class="tag">
                <h2>${exp.tag}</h2>
            </div>
            <div class="desc">
                <h3>${exp.title}</h3>
                <p>${exp.date}</p>
            </div>
            </div>
        </div>`
    });
    experiencesContainer.innerHTML = experiencesHTML;
}
///Fin a supprimer

// Charger les données depuis le fichier JSON
fetch('experience.json')
  .then(response => response.json())
  .then(data => {
    const timeline = document.querySelector('.timeline');

    // Parcourir les données et créer les éléments HTML
    data.timeline.forEach(item => {
      const container = document.createElement('div');
      container.classList.add('container', item.position);

      container.innerHTML += `
        <div class="content">
          <div class="tag">
            <h2>${item.tag}</h2>
          </div>
          <div class="desc">
            <h3>${item.title}</h3>
            <p>${item.date}</p>
          </div>
        </div>
      `;

      timeline.appendChild(container);
    });
  })
  .catch(error => console.error('Erreur lors du chargement des données JSON :', error));
