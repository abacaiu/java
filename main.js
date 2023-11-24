 function tocaSom (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio).play();
 
    if (elemento && elemento.localName === 'audio') {
         elemento.play();
       
    }
    else {
        //alert('Elemento ou seletor não encotrado');
        console.log('Elemento ou seletor não encontrado!')
    }

 }

 const listaDeTeclas = document.querySelectorAll('.tecla')

 //para
 for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const intrumento = tecla.classList(1);
    const idAudio = '#som_${instrumento}' //template string 

    tecla.onclick = function () {
         tocaSom(idAudio);
    }

    tecla.onclick = fuction (evento) {
      if (evento.code === 'Enter' || evento.code === 'Space' ) {
           tecla.classList.add('ativar');
    }
 }






























