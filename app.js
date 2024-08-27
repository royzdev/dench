particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 6.5,
            "density": {
                "enable": true,
                "value_area": 50
            }
        },
        "color": {
            "value": "#253621"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#253621"
            },
            "polygon": {
                "nb_sides": 1.5
            },
            "image": {
                "src": "img/github.svg",
                "width": 32.5,
                "height": 17
            }
        },
        "opacity": {
            "value": 0.4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": true
            }
        },
        "size": {
            "value": 2.0,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 5,
                "size_min": 0.4,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 7.5,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 12,
                "rotateY": 10
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 62.5,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 40,
                "size": 4.5,
                "duration": 1,
                "opacity": 2.5,
                "speed": 2.0
            },
            "repulse": {
                "distance": 32.5,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 1.5
            },
            "remove": {
                "particles_nb": 2.4
            }
        }
    },
    "retina_detect": true
});
