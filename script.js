const boton = document.getElementById("calcular");

boton.addEventListener ("click", function() {

    let peso = document.getElementById ("peso") .value;
    let gravedad = document.getElementById ("planeta") .value;

    let resultado = peso * gravedad;

    document.getElementById ("resultado").textContent =
        "Tu peso sería " + resultado.toFixed (2) + " kg";

});

const datosPlanetas = {

    Mercurio: {
        tamano: "4.879 km",
        composicion: "Roca y metal",
        lunas: "0",
        distancia: "57.9 millones km",
        imagen: "Mercurio.png"
    },

    Venus: {
        tamano: "12.104 km",
        composicion: "Roca y minerales",
        lunas: "0",
        distancia: "108.2 millones km",
        imagen: "Venus.png"
    },

    Marte: {
        tamano: "6.779 km",
        composicion: "Roca y minerales",
        lunas: "2",
        distancia: "227.9 millones km",
        imagen: "Marte.png"
    },

    Tierra: {
        tamano: "12.742 km",
        composicion: "Roca y minerales",
        lunas: "1",
        distancia: "149.6 millones km",
        imagen: "Tierra.png"
    },

    Jupiter: {
        tamano: "139.820 km",
        composicion: "Gas",
        lunas: "95",
        distancia: "778.5 millones km",
        imagen: "Jupiter.png"

    },

    Saturno: {
        tamano: "116.460 km",
        composicion: "Gas",
        lunas: "146",
        distancia: "1.434 millones km",
        imagen: "Saturno.png"
    },

    Urano: {
        tamano: "50.724 km",
        composicion: "Hielo y gas",
        lunas: "28",
        distancia: "2.871 millones km",
        imagen: "Urano.png"
    },

    Neptuno: {
        tamano: "49.244 km",
        composicion: "Hielo y gas",
        lunas: "16",
        distancia: "4.495 millones km",
        imagen: "Neptuno.png"
    }

};

const selector = document.getElementById("planeta");

selector.addEventListener("change", function() {

    let nombre = selector.options[selector.selectedIndex].text;
    let datos = datosPlanetas[nombre];

    document.getElementById("nombre-planeta").textContent = nombre;
    document.getElementById("tamano").textContent = datos.tamano;
    document.getElementById("composicion").textContent = datos.composicion;
    document.getElementById("lunas").textContent = datos.lunas;
    document.getElementById("distancia").textContent = datos.distancia;
    document.getElementById("imagen-planeta").src = datos.imagen;
});