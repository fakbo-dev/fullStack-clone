L.mapquest.key = 'YOUR-API-KEY-HERE';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    // 1. change 'map' to 'hybrid', try other type of map
    layers: L.mapquest.tileLayer('hybrid'),
    zoom: 12
});


//Aquí estamos creando una variable para almacenar la información del mapa, luego creamos un nuevo mapa usando el mapquest.map()método, que toma como parámetros el ID de un <div>elemento en el que desea mostrar el mapa ("mapa") y un objeto de opciones que contiene los detalles del mapa particular que queremos mostrar. En este caso especificamos las coordenadas del centro del mapa, una capa de mapa de tipo mappara mostrar (creada usando el mapquest.tileLayer()método) y el nivel de zoom predeterminado.

//Esta es toda la información que la API de Mapquest necesita para trazar un mapa simple. El servidor al que te estás conectando maneja todas las cosas complicadas, como mostrar los mosaicos de mapa correctos para el área que se muestra, etc.


