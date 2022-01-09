export const options=[
    {
  "background": {
    "color": {
      "value": "#000000"
    }
  },
  "fullScreen": {
    "enable": true,
    "zIndex": -1
  },
  "particles": {
    "bounce": {
      "vertical": {
        "value": 0
      },
      "horizontal": {
        "value": 0
      }
    },
    "color": {
      "value": [
        "#1E00FF",
        "#FF0061",
        "#E1FF00",
        "#00FF9E"
      ],
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "move": {
      "decay": 0.1,
      "direction": "top",
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": true,
        "maxSpeed": 200
      },
      "outModes": {
        "top": "none",
        "default": "destroy",
        "bottom": "bounce"
      },
      "speed": {
        "min": 50,
        "max": 150
      }
    },
    "number": {
      "value": 0,
      "limit": 300
    },
    "opacity": {
      "value": 1,
      "animation": {
        "enable": false,
        "startValue": "max",
        "destroy": "min",
        "speed": 0.3,
        "sync": true
      }
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "move": true,
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "move": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "shape": {
      "type": [
        "circle",
        "square",
        "polygon",
        "character",
        "character",
        "character"
      ],
      "options": {
        "polygon": [
          {
            "sides": 5
          },
          {
            "sides": 6
          }
        ],
        "character": [
          {
            "value": [
              "💩",
              "🤡",
              "🍀",
              "🍙"
            ]
          }
        ]
      }
    },
    "size": {
      "value": 3
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 30
      },
      "enlighten": {
        "enable": true,
        "value": 30
      },
      "enable": true,
      "speed": {
        "min": 15,
        "max": 25
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "move": true,
      "speed": {
        "min": -15,
        "max": 15
      }
    }
  },
  "emitters": {
    "position": {
      "x": 50,
      "y": 100
    },
    "size": {
      "width": 0,
      "height": 0
    },
    "rate": {
      "quantity": 10,
      "delay": 0.1
    }
  }
},
{
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "fpsLimit": 60,
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
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
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab",
        "parallax": {
          "enable": true,
          "smooth": 10,
          "force": 60
        }
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
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
        "opacity": 0.8,
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
  "background": {
    "color": "#0d47a1",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  }
},
{
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
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
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
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
  "background": {
    "color": "#0d47a1",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  }
}
]