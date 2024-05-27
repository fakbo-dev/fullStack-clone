//Crear una escalera

//su tamano es definido por "n"

//base y altura son iguales a n

// se dibuja utilizando "#" y espacios

// la ultima linea no va precedida de ningun espacio


function task(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        let draw = "#";
        let space = " ";

        if (!(i === n)) {
            console.log(space.repeat(n - i) + draw.repeat(i));
        } else {
            console.log(draw.repeat(i));
        }

    }
}


task(6);

