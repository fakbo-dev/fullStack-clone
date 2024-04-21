// WebGL
// Ahora es el momento de dejar atrás el 2D y echar un vistazo rápido al lienzo 3D. El contenido del lienzo 3D se especifica mediante la API WebGL , que es una API completamente independiente de la API del lienzo 2D, aunque ambas se representan en <canvas>elementos.

// WebGL está basado en OpenGL (Open Graphics Library) y permite comunicarse directamente con la GPU de la computadora . Como tal, escribir WebGL sin formato está más cerca de lenguajes de bajo nivel como C++ que de JavaScript normal; Es bastante complejo pero increíblemente poderoso.

//using a library

// Debido a su complejidad, la mayoría de las personas escriben código de gráficos 3D utilizando una biblioteca JavaScript de terceros, como Three.js , PlayCanvas o Babylon.js . La mayoría de estos funcionan de manera similar, brindando funcionalidad para crear formas primitivas y personalizadas, colocar cámaras de visualización e iluminación, cubrir superficies con texturas y más. Ellos manejan WebGL por usted, lo que le permite trabajar en un nivel superior.

// Sí, usar uno de estos significa aprender otra API nueva (una de terceros, en este caso), pero son mucho más simples que codificar WebGL sin formato.


//Cube

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube;

const loader = new THREE.TextureLoader();

loader.load('metal003.png', texture => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);

    const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const material = new THREE.MeshLambertMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    draw();
});

const light = new THREE.AmbientLight('rgb(255,255,255)'); // soft white light
scene.add(light);

const spotLight = new THREE.SpotLight('rgb(255,255,255)');
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

function draw() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

    requestAnimationFrame(draw);
}