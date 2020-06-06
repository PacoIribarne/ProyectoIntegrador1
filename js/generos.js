let proxi = 'https://cors-anywhere.herokuapp.com/';
let url = proxi + 'https://api.deezer.com/genre';


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let generos = document.querySelector('.generos');
        console.log(datos);
        let resultados = datos.data;

        resultados.forEach(function(genres){
            generos.innerHTML += "<div class='portadagenero'>" + "<img src='" + genres.picture_medium  +  "'>" + genres.name + "</div>";
        })
    })
    .catch(function(error){
        console.log(error);
    })
//     <div class="fila">
//     <a href="detailgenre.html"><img class="portadagenero"  src="../img/rock.jpg" alt="rock" height="140vh"></a> 
//     <a href="detailgenre.html"><img class="portadagenero" src="../img/pop.jpg" alt="pop" height="140vh"></a> 
//     <a href="detailgenre.html"><img class="portadagenero" src="../img/jazz.jpg" alt="jazz" height="140vh"></a> 
//     <a href="detailgenre.html"><img class="portadagenero" src="../img/folk.jpg" alt="folk" height="140vh"></a> 
//     <a href="detailgenre.html"><img class="portadagenero" src="../img/rap.jpg" alt="rap" height="140vh"></a> 
//     <a href="detailgenre.html">  <img class="portadagenero" src="../img/metal.jpg" alt="metal" height="140vh"></a> 
//  </div>
//  <div class="fila">
//      <a href="detailgenre.html"><img class="portadagenero" src="../img/rock.jpg" alt="rock" height="140vh"></a> 
//      <a href="detailgenre.html"> <img class="portadagenero" src="../img/pop.jpg" alt="pop" height="140vh"></a> 
//      <a href="detailgenre.html"><img class="portadagenero" src="../img/jazz.jpg" alt="jazz" height="140vh"></a> 
//      <a href="detailgenre.html"> <img class="portadagenero" src="../img/folk.jpg" alt="folk" height="140vh"></a> 
//      <a href="detailgenre.html">  <img class="portadagenero" src="../img/metal.jpg" alt="metal" height="140vh"></a> 
//      <a href="detailgenre.html"> <img class="portadagenero" src="../img/rap.jpg" alt="rap" height="140vh"></div></a> 
// </div>