const media = document.querySelector("video");
const controls = document.querySelector(".controls");

const play = document.querySelector(".play");
const stoped = document.querySelector(".stop");
const rwd = document.querySelector(".rwd");
const fwd = document.querySelector(".fwd");

const timeWrapper = document.querySelector(".timer");
const timer = document.querySelector(".timer span");
const timerBar = document.querySelector(".timer div");


media.removeAttribute("controls");
controls.style.visibility = "visible";


//Reproducir y pausar el vídeo.

//Reproducir 

play.addEventListener("click", playPauseMedia);

function playPauseMedia() {
    if (media.paused) {
        play.setAttribute("data-icon", "u");
        media.play();
    } else {
        play.setAttribute("data-icon", "P");
        media.pause();
    }
}

//Aquí usamos una ifdeclaración para verificar si el video está en pausa. La HTMLMediaElement.pausedpropiedad devuelve verdadero si el medio está en pausa, es decir, en cualquier momento en que el vídeo no se esté reproduciendo, incluso cuando se establece en una duración de 0 después de cargarse por primera vez. Si está en pausa, configuramos el data-iconvalor del atributo en el botón de reproducción en "u", que es un icono de "pausa", e invocamos el HTMLMediaElement.play()método para reproducir el medio. En el segundo clic, el botón volverá a alternarse: el ícono "reproducir" se mostrará nuevamente y el video se pausará con HTMLMediaElement.pause().


//pausar


stoped.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);

//El clickevento es obvio: queremos detener el video ejecutando nuestra stopMedia()función cuando se hace clic en el botón Detener. Sin embargo, también queremos detener el video cuando termine de reproducirse; esto está marcado por la endedactivación del evento, por lo que también configuramos un oyente para ejecutar la función en la activación de ese evento.


function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute("data-icon", "P");

    rwd.classList.remove("active");
    fwd.classList.remove("active");
    clearInterval(intervalRwd);
    clearInterval(intervalFwd);

}

//no hay ningún stop()método en la API HTMLMediaElement; el equivalente es pause()el video y establece su currentTimepropiedad en 0. Al establecer currentTimeun valor (en segundos), el medio salta inmediatamente a esa posición. Todo lo que queda por hacer después de eso es configurar el ícono que se muestra en el ícono de "reproducir". Independientemente de si el vídeo estaba en pausa o en reproducción cuando se presiona el botón de detener, querrás que esté listo para reproducirse después.


//Rebobinar y avanzar

//Hay muchas maneras de implementar la funcionalidad de rebobinado y avance rápido; aquí te mostramos una forma relativamente compleja de hacerlo, que no se rompe cuando se presionan los diferentes botones en un orden inesperado.

rwd.addEventListener("click", mediaBackward);
fwd.addEventListener("click", mediaForward);
let intervalFwd;
let intervalRwd;

function mediaBackward() {
    clearInterval(intervalFwd);
    fwd.classList.remove("active");

    if (rwd.classList.contains("active")) {
        rwd.classList.remove("active");
        clearInterval(intervalRwd);
        media.play();
    } else {
        rwd.classList.add("active");
        media.pause();
        intervalRwd = setInterval(windBackward, 200);
    }
}

function mediaForward() {
    clearInterval(intervalRwd);
    rwd.classList.remove("active");

    if (fwd.classList.contains("active")) {
        fwd.classList.remove("active");
        clearInterval(intervalFwd);
        media.play();
    } else {
        fwd.classList.add("active");
        media.pause();
        intervalFwd = setInterval(windForward, 200);
    }
}


function windBackward() {
    if (media.currentTime <= 3) {
        rwd.classList.remove("active");
        clearInterval(intervalRwd);
        stopMedia();
    } else {
        media.currentTime -= 3;
    }
}

function windForward() {
    if (media.currentTime >= media.duration - 3) {
        fwd.classList.remove("active");
        clearInterval(intervalFwd);
        stopMedia();
    } else {
        media.currentTime += 3;
    }
}


// Notarás que primero inicializamos dos variables intervalFwdy intervalRwddescubrirás para qué sirven más adelante. Veamos mediaBackward()(la funcionalidad mediaForward()es exactamente la misma, pero a la inversa):
// Borramos las clases e intervalos configurados en la función de avance rápido; hacemos esto porque si presionamos el rwdbotón después de presionarlo fwd, queremos cancelar cualquier función de avance rápido y reemplazarla con la función de rebobinado. Si intentáramos hacer ambas cosas a la vez, el reproductor se rompería.
// Usamos una ifdeclaración para verificar si la activeclase se ha configurado en el rwdbotón, lo que indica que ya se ha presionado. Es classListuna propiedad bastante útil que existe en cada elemento: contiene una lista de todas las clases establecidas en el elemento, así como métodos para agregar/eliminar clases, etc. Usamos el classList.contains()método para verificar si la lista contiene la activeclase. Esto devuelve un resultado booleano true/ false.
// Si activese ha configurado en el rwdbotón, lo eliminamos usando classList.remove(), borramos el intervalo que se configuró cuando se presionó el botón por primera vez (consulte a continuación para obtener más explicaciones) y lo usamos HTMLMediaElement.play()para cancelar el rebobinado y comenzar a reproducir el video normalmente.
// Si aún no se ha configurado, agregamos la activeclase al rwdbotón usando classList.add(), pausamos el video usando HTMLMediaElement.pause()y luego configuramos la intervalRwdvariable para que sea igual a una setInterval()llamada. Cuando se invoca, setInterval()crea un intervalo activo, lo que significa que ejecuta la función dada como primer parámetro cada x milisegundos, donde x es el valor del segundo parámetro. Así que aquí estamos ejecutando la windBackward()función cada 200 milisegundos; usaremos esta función para retroceder el vídeo constantemente. Para detener una setInterval()ejecución, debe llamar a clearInterval(), dándole el nombre identificativo del intervalo a borrar, que en este caso es el nombre de la variable intervalRwd(consulte la clearInterval()llamada anteriormente en la función).

media.addEventListener("timeupdate", setTime);


function setTime() {
    const minutes = Math.floor(media.currentTime / 60);
    const seconds = Math.floor(media.currentTime - minutes * 60);

    const minuteValue = minutes.toString().padStart(2, "0");
    const secondValue = seconds.toString().padStart(2, "0");

    const mediaTime = `${minuteValue}:${secondValue}`;
    timer.textContent = mediaTime;

    const barLength =
        timerWrapper.clientWidth * (media.currentTime / media.duration);
    timerBar.style.width = `${barLength}px`;
}
