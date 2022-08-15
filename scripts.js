function mustangModal() {

  var modal = document.getElementById("mustangModal");
  var botao1 = document.getElementById("botao1");
  var span = document.getElementsByClassName("close1")[0];
  botao1.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function ferrariModal() {

  var modal = document.getElementById("FerrariModal");
  var botao2 = document.getElementById("botao2");
  var span = document.getElementsByClassName("close2")[0];
  botao2.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function camaroModal() {

  var modal = document.getElementById("CamaroModal");
  var botao3 = document.getElementById("botao3");
  var span = document.getElementsByClassName("close3")[0];
  botao3.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function HB20Modal() {

  var modal = document.getElementById("HB20Modal");
  var botao4 = document.getElementById("botao4");
  var span = document.getElementsByClassName("close4")[0];
  botao4.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function cruzeModal() {

  var modal = document.getElementById("cruzeModal");
  var botao5 = document.getElementById("botao5");
  var span = document.getElementsByClassName("close5")[0];
  botao5.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function palioModal() {

  var modal = document.getElementById("palioModal");
  var botao6 = document.getElementById("botao6");
  var span = document.getElementsByClassName("close6")[0];
  botao6.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

function saveData() {
  //constante para cada area de texto no formulario
  const name = document.getElementById('nome');
  const email = document.getElementById('email');
  const msg = document.getElementById('opnion');


  let data =
    'Nome: ' + name.value + ' \r\n ' +
    'Email: ' + email.value + ' \r\n ' +
    'Message: ' + msg.value;

  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'Formulário.txt';

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}

//Slideshow

var responsiveSlider = function() {
//seleção de variáveis como a janela do slide, largura, itens...
//variavel count para iniciar uma contagem no caso usando numero 1
  var slider = document.getElementById("slide");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slide-wrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  //função dentro da variável previous slide (slide anterior)
  //para mudar de slide as imagens tem a mesma largura, assim elas vão mudando com o tempo
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  
  //função com variável next slide (próximo slide)
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  //adição de evento de click next e previous
  next.addEventListener("click", function() {
    nextSlide();
  });
  
  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  //intervlao de tempo para alternar entre as imagens
  setInterval(function() {
    nextSlide()
  }, 10000);
  
  };
  
  window.onload = function() {
  responsiveSlider();  
  }





