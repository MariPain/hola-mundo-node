const http = require('http'); // Modulo a importar
const cowsay = require('cowsay')
const calculadora = require('./modules/calculadora.js')


const hostname = 'localhost'; // IP 127.0.0.1
const port = 3000; // Puerto 

console.log("caunto sería 3+2?: pues sería " + calculadora.suma(3, 2))
console.log("si tengo 8 - 3 me quedarían " + calculadora.resta(8, 3))

// Codigo de servidor
const server = http.createServer((req, res) => {
    //Rellenar la respuesta
    res.statusCode = 200; // 200 es ok,la carga ha ido bien
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>hey</h2>')
    res.write('<h2>soy una vaca</h2>')
    res.write('<pre>' + cowsay.think({
        text: "sumo 2+2 y el resultado es " + calculadora.suma(2, 2),
        cow: '', // Template for a cow, get inspiration from `./cows`
        eyes: 'oo', // Select the appearance of the cow's eyes, equivalent to cowsay -e
        tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
        wrap: true, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
        wrapLength: 20, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
        mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
    }) + '</pre>')
    res.end('<p>Hola mundo NODE</p>');
});

//Escuchador de eventos. Espera a que llegue petición
server.listen(port, hostname, () => {

    // Mensaje de "bienvenida" al servidor
    console.log(`Server running at http: //${hostname}:${port}/`);
    console.log(cowsay.say({
        text: "Muuuuuuuuuu buenas",
        e: "oO",
        T: "U "
    }));
});