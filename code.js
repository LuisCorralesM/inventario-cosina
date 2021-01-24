
// JERCICIO CON ARRAYS MULTIDIMENCIONALES---------------------------------------------------------

let cocina = [
    ["platos", ["plato hondo", "plato pando", "plato tintero", "plato llano ", "plato sopero"]],
    ["pocillos", ["pocillo tintero", "pocillo mediano", "pocillo grande"]],
    ["cubiertos", ["cuchara", "tenedor", "trinchete", "palillos chinos"]],
    ["ollas", ["arrocera", "olla a presiOn", "sartén", "cacerola", "paila", "olla sopera"]]
];

document.write((`<H1 style="color: red; font-size: 35px;"> inventario cocina </H1>`).toUpperCase());

for(let i=0; i<cocina.length; i++){
    document.write((`<H2 style="font-size: 30px; color: darkblue">${cocina[i][0]}: </H2>`).toUpperCase());
    for(let y=0; y<cocina[i][1].length; y++){
        document.write(`<b>${y + 1}. </b> ${cocina[i][1][y]} <br>`);
    }
    let totalPlatos = cocina[i][1].length;
        document.write(`<b>Total ${cocina[i][0]} </b> ${totalPlatos}`)
}

