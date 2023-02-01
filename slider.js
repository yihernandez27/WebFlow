 const state = {};
  const carouselList = document.querySelector('.carousel__list');
  const sliderControler = document.querySelector('.slider-controler');
  const carouselItems = document.querySelectorAll('.carousel__item');
  const elems = Array.from(carouselItems);

  sliderControler.addEventListener('click', function (event) {
    console.log("click event controller", event.target);
    var newActive = event.target;
    /*  var isItem = newActive.closest('.carousel__item');
 
     if (!isItem || newActive.classList.contains('carousel__item_active')) {
       return;
     }; */
    console.log("newActiveController", newActive);
    update(newActive);
  });

  carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.carousel__item');

    if (!isItem || newActive.classList.contains('carousel__item_active')) {
      return;
    };

    console.log("newActive", newActive);
    update(newActive);
  });

  const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;
    console.log("newActivePos->", newActivePos);

    if (newActivePos == -3) {
      var miElto = document.getElementsByClassName("c-3 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c-3 rosa")[0];
      }
      miElto.className = "c-3 rosa";

      var miEltoC_2 = document.getElementsByClassName("c-2 rosa")[0];
      if (miEltoC_2 != undefined) {
        miEltoC_2.className = "c-2 azul";
      }

      var miEltoC_1 = document.getElementsByClassName("c-1 rosa")[0];
      if (miEltoC_1 != undefined) {
        miEltoC_1.className = "c-1 azul";
      }

      var miEltoC0 = document.getElementsByClassName("c0 rosa")[0];
      if (miEltoC0 != undefined) {
        miEltoC0.className = "c0 azul";
      }

      var miEltoC1 = document.getElementsByClassName("c1 rosa")[0];
      if (miEltoC1 != undefined) {
        miEltoC1.className = "c1 azul";
      }

      var miEltoC2 = document.getElementsByClassName("c2 rosa")[0];
      if (miEltoC2 != undefined) {
        miEltoC2.className = "c2 azul";
      }

      var miEltoC3 = document.getElementsByClassName("c3 rosa")[0];
      if (miEltoC3 != undefined) {
        miEltoC3.className = "c3 azul";
      }

    } else if (newActivePos == -2) {
      var miElto = document.getElementsByClassName("c-2 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c-2 rosa")[0];
      }
      miElto.className = "c-2 rosa";

      var miElto_3 = document.getElementsByClassName("c-3 rosa")[0];
      if (miElto_3 != undefined) {
        miElto_3.className = "c-3 azul";
      }

      var miEltoC_1 = document.getElementsByClassName("c-1 rosa")[0];
      if (miEltoC_1 != undefined) {
        miEltoC_1.className = "c-1 azul";
      }

      var miEltoC0 = document.getElementsByClassName("c0 rosa")[0];
      if (miEltoC0 != undefined) {
        miEltoC0.className = "c0 azul";
      }

      var miEltoC1 = document.getElementsByClassName("c1 rosa")[0];
      if (miEltoC1 != undefined) {
        miEltoC1.className = "c1 azul";
      }

      var miEltoC2 = document.getElementsByClassName("c2 rosa")[0];
      if (miEltoC2 != undefined) {
        miEltoC2.className = "c2 azul";
      }

      var miEltoC3 = document.getElementsByClassName("c3 rosa")[0];
      if (miEltoC3 != undefined) {
        miEltoC3.className = "c3 azul";
      }

    } else if (newActivePos == -1) {
      var miElto = document.getElementsByClassName("c-1 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c-1 rosa")[0];
      }
      miElto.className = "c-1 rosa";

      var miElto_3 = document.getElementsByClassName("c-3 rosa")[0];
      if (miElto_3 != undefined) {
        miElto_3.className = "c-3 azul";
      }

      var miEltoC_2 = document.getElementsByClassName("c-2 rosa")[0];
      if (miEltoC_2 != undefined) {
        miEltoC_2.className = "c-2 azul";
      }

      var miEltoC0 = document.getElementsByClassName("c0 rosa")[0];
      if (miEltoC0 != undefined) {
        miEltoC0.className = "c0 azul";
      }

      var miEltoC1 = document.getElementsByClassName("c1 rosa")[0];
      if (miEltoC1 != undefined) {
        miEltoC1.className = "c1 azul";
      }

      var miEltoC2 = document.getElementsByClassName("c2 rosa")[0];
      if (miEltoC2 != undefined) {
        miEltoC2.className = "c2 azul";
      }

      var miEltoC3 = document.getElementsByClassName("c3 rosa")[0];
      if (miEltoC3 != undefined) {
        miEltoC3.className = "c3 azul";
      }

    } else if (newActivePos == 0) {

      var miElto = document.getElementsByClassName("c0 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c0 rosa")[0];
      }
      miElto.className = "c0 rosa";

      var miElto_3 = document.getElementsByClassName("c-3 rosa")[0];
      if (miElto_3 != undefined) {
        miElto_3.className = "c-3 azul";
      }

      var miEltoC_2 = document.getElementsByClassName("c-2 rosa")[0];
      if (miEltoC_2 != undefined) {
        miEltoC_2.className = "c-2 azul";
      }

      var miEltoC_1 = document.getElementsByClassName("c-1 rosa")[0];
      if (miEltoC_1 != undefined) {
        miEltoC_1.className = "c-1 azul";
      }

      var miEltoC1 = document.getElementsByClassName("c1 rosa")[0];
      if (miEltoC1 != undefined) {
        miEltoC1.className = "c1 azul";
      }

      var miEltoC2 = document.getElementsByClassName("c2 rosa")[0];
      if (miEltoC2 != undefined) {
        miEltoC2.className = "c2 azul";
      }

      var miEltoC3 = document.getElementsByClassName("c3 rosa")[0];
      if (miEltoC3 != undefined) {
        miEltoC3.className = "c3 azul";
      }

    } else if (newActivePos == 1) {

      var miElto = document.getElementsByClassName("c1 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c1 rosa")[0];
      }
      miElto.className = "c1 rosa";

      var miElto_3 = document.getElementsByClassName("c-3 rosa")[0];
      if (miElto_3 != undefined) {
        miElto_3.className = "c-3 azul";
      }

      var miEltoC_2 = document.getElementsByClassName("c-2 rosa")[0];
      if (miEltoC_2 != undefined) {
        miEltoC_2.className = "c-2 azul";
      }

      var miEltoC_1 = document.getElementsByClassName("c-1 rosa")[0];
      if (miEltoC_1 != undefined) {
        miEltoC_1.className = "c-1 azul";
      }

      var miEltoC0 = document.getElementsByClassName("c0 rosa")[0];
      if (miEltoC0 != undefined) {
        miEltoC0.className = "c0 azul";
      }

      var miEltoC2 = document.getElementsByClassName("c2 rosa")[0];
      if (miEltoC2 != undefined) {
        miEltoC2.className = "c2 azul";
      }

      var miEltoC3 = document.getElementsByClassName("c3 rosa")[0];
      if (miEltoC3 != undefined) {
        miEltoC3.className = "c3 azul";
      }

    } else if (newActivePos == 2) {

      var miElto = document.getElementsByClassName("c2 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c2 rosa")[0];
      }
      miElto.className = "c2 rosa";

      var miElto_3 = document.getElementsByClassName("c-3 rosa")[0];
      if (miElto_3 != undefined) {
        miElto_3.className = "c-3 azul";
      }

      var miEltoC_2 = document.getElementsByClassName("c-2 rosa")[0];
      if (miEltoC_2 != undefined) {
        miEltoC_2.className = "c-2 azul";
      }

      var miEltoC_1 = document.getElementsByClassName("c-1 rosa")[0];
      if (miEltoC_1 != undefined) {
        miEltoC_1.className = "c-1 azul";
      }

      var miEltoC0 = document.getElementsByClassName("c0 rosa")[0];
      if (miEltoC0 != undefined) {
        miEltoC0.className = "c0 azul";
      }

      var miEltoC1 = document.getElementsByClassName("c1 rosa")[0];
      if (miEltoC1 != undefined) {
        miEltoC1.className = "c1 azul";
      }

      var miEltoC3 = document.getElementsByClassName("c3 rosa")[0];
      if (miEltoC3 != undefined) {
        miEltoC3.className = "c3 azul";
      }

    } else if (newActivePos == 3) {

      var miElto = document.getElementsByClassName("c3 azul")[0];
      if (miElto == undefined) {
        var miElto = document.getElementsByClassName("c3 rosa")[0];
      }
      miElto.className = "c3 rosa";

      var miElto_3 = document.getElementsByClassName("c-3 rosa")[0];
      if (miElto_3 != undefined) {
        miElto_3.className = "c-3 azul";
      }

      var miEltoC_2 = document.getElementsByClassName("c-2 rosa")[0];
      if (miEltoC_2 != undefined) {
        miEltoC_2.className = "c-2 azul";
      }

      var miEltoC_1 = document.getElementsByClassName("c-1 rosa")[0];
      if (miEltoC_1 != undefined) {
        miEltoC_1.className = "c-1 azul";
      }

      var miEltoC0 = document.getElementsByClassName("c0 rosa")[0];
      if (miEltoC0 != undefined) {
        miEltoC0.className = "c0 azul";
      }

      var miEltoC1 = document.getElementsByClassName("c1 rosa")[0];
      if (miEltoC1 != undefined) {
        miEltoC1.className = "c1 azul";
      }

      var miEltoC2 = document.getElementsByClassName("c2 rosa")[0];
      if (miEltoC2 != undefined) {
        miEltoC2.className = "c2 azul";
      }

    }

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const secondPrev = elems.find((elem) => elem.dataset.pos == -2);
    const secondNext = elems.find((elem) => elem.dataset.pos == 2);
    const first = elems.find((elem) => elem.dataset.pos == -3);
    const last = elems.find((elem) => elem.dataset.pos == 3);

    current.classList.remove('carousel__item_active');

    [current, secondPrev, prev, next, first, secondNext, last].forEach(item => {
      var itemPos = item.dataset.pos;

      item.dataset.pos = getPos(itemPos, newActivePos)
    });
  };

  const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 3) {
      return -current
    }

    return diff;
  }
