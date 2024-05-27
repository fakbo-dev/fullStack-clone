# Snake Game



## Requisitos

- Html & css
- javaScript


### UI (HTML & CSS)

- Se necesita Dos puntuaciones (Scores) donde se deben mostrar la puntuacion actual y el mejor puntaje 

- Una pantalla 20 x 20 donde se ejecutara el juego (gird layout)

- usar un diseño retro 

## JavaScript

#### Get references

Lo primero es tomar referencias a los Elementos `DOM` del documento que necesitamos para darle funcionalidad a la pagina `board`, `score`, `highScore`, `logo`, `logo-text`,


```
const element = document.querySelector(".element-class");
```

#### funciones 


##### draw

- Lo Primordial para un juego es siempre dibujar la pantalla para que cualquier cambio en el programa se vea reflejado llamamos `draw()` que a su vez es el nexo de cada cambio mostrado en la UI (Interfaz de usuario).


##### drawSake 

- El juego tiene 2 cosas que deben mostrarse la primera es el la serpiente (snake).

- ya que la serpiente mientras coma se va haciendo mas grande debemos para cada segmento de si misma crear un elemento snake (div) ademas debemos posicionarla en medio de nuestra pantalla y luego debemos agregarlo a nuestra pantalla 

##### createGameElement

- toma como parametro un tag y una clase  lo que hacemos es crear un elemento cual sea pasado por el parametro y poner su clase, esto se hace para mantener el estilo de `snake` o `food`.

##### setPosition

- toma valores `x` y `y` de un elemento en este caso `snake` o `food` y cambia su posicion en el pantalla posicionando usando `gridColumn` y `gridRow`.

##### drawFood

- creamos un elemento food con la funcion `createGameElement()` lo posicionamos usando `setPosition()`  y adjuntamos el elemento a la pantalla 

##### generateFood

- toma dos constantes que sera los ejes `x` y `y` para crearlo en un lugar random necesitamos usar la build-in `Math.random` en cada constante multiplicado por el size de la pantalla en este caso 20 (20 vertical, 20 horizontal) y devolvemos un objeto


##### move

- Creamos una `head` variable donde vamos a guardar la cabeza de la snake usamos `...spread` operator y lo seteamos en el index 0.

```
const head = {...snake[0]};
```

- luego debemos definir la `direction`.  crear las condicionales  para saber si `up`, `down`, `left`, `right` coinciden con el valor de `direction` para determinar hacia donde se movera la snake

- luego debemos agregar el valor de head a la snake object para mostrar en la pantalla hacia donde se movio la snake 

- si la posicion de `head` y `food` es la misma entonces debemos crear una nueva `food` aumentar la velocidad de la snake limpiamos la `game interval` variable y luego asignarle un intervalo en el cual llamaremos `checkCollision` `move` y `draw` y se refrescara con la variable `gameSpeedDelay`, si no es asi, borramos el ultimo valor de el array de objetos `snake`. 


##### startGame

cambiamos el valor de `gameStarted` a `true` para empezar el juego por lo cual escondemos el texto y el logo y iniciamos el juego usando una vez mas el `gameInterval` variable y cabiamos su contenido a build-in `setInterval`