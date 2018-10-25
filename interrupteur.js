INTERRUPTEUR = {
  btn: "",
  container: "",



  init: function() {
    INTERRUPTEUR.btn = document.getElementById('btn');
    INTERRUPTEUR.btn.addEventListener("click", INTERRUPTEUR.onOff);
  },


  onOff: function() {
    INTERRUPTEUR.container = document.getElementById('container');
    // console.log(INTERRUPTEUR.container);
    INTERRUPTEUR.container.classList.toggle("colorOFF");
  }


}


window.onload = INTERRUPTEUR.init;
