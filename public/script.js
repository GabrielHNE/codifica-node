 var quantidadeDeItems = 10;
  var itemPorFileira = 4;
  var teamIndex = 0;

  if(screen.width <= 1200){
    itemPorFileira = 1;
  }

  function arrowFrente() {
    if ((teamIndex + 1) * itemPorFileira < quantidadeDeItems) {
      console.log("Team Index aprovado com " + teamIndex);
      teamIndex++;
      for (let i = 1; i <= quantidadeDeItems; i++) {
        if (i > teamIndex * itemPorFileira && i <= (teamIndex + 1) * itemPorFileira) {
          $('#cardtm' + i).removeClass('hideDiv')
        } else {
          $('#cardtm' + i).addClass('hideDiv')
        }
      }
    } else {
      gotoFirst();
    }

  }

  function gotoFirst() {
    teamIndex = -1;
    arrowFrente();
  }

  function gotoLast() {
    let maxRes = 0;
    while (true) {
      if ((maxRes + 1) * itemPorFileira < quantidadeDeItems) {
        maxRes++;
      } else {
        break;
      }
    }
    maxRes--;
    teamIndex = maxRes;
    arrowFrente();
  }

  function arrowTras() {
    if ((teamIndex - 1) > 0) {
      teamIndex--;
      for (let i = 1; i <= quantidadeDeItems; i++) {
        if (i > teamIndex * itemPorFileira && i <= (teamIndex + 1) * itemPorFileira) {
          $('#cardtm' + i).removeClass('hideDiv')
        } else {
          $('#cardtm' + i).addClass('hideDiv')
        }
      }
    } else {
      gotoLast();
    }
  }

  $(window).bind("load", function () {
    $('#loading').css('display', 'none');
    $('#loadingdiv').css('display', 'none');
    $('#fullpage').css('display', 'block');

    if(itemPorFileira == 1){
      $('#cardtm2').addClass('hideDiv');
      $('#cardtm3').addClass('hideDiv');
      $('#cardtm4').addClass('hideDiv');
    }

    loadTyped();

    const config_particleJs = 
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#4286f4"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#4286f4",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
    }
    particlesJS('particles-js', config_particleJs);
  });

  function loadTyped() {
    var typed = new Typed('#typed', {
      strings: ["O que podemos fazer por você?"],
      typeSpeed: 30,
      backSpeed: 60,
      startDelay: 3000,
      smartBackspacing: true,
    });
  }
