const aviones = {

    f22:{

        imagen:"PNG/F22_Raptor.png",

        nombre:"F-22 Raptor",

        fabricante:"Lockheed Martin",

        pais:"Estados Unidos",

        generacion:"Quinta",

        velocidad:"Mach 2.25",

        alcance:"2960 km",

        motores:"2 × Pratt & Whitney F119",

        tripulacion:"1",
        silueta:"PNG/F22_silueta.png",



        velocidadNivel:"95%",



        alcanceNivel:"80%",



        maniobraNivel:"98%",



        stealthNivel:"95%",

        descripcion:"Caza furtivo de superioridad aerea diseñado para dominar el espacio aereo mediante tecnologia stealth, supercrucero y gran maniobrabilidad."

    },

    f35:{

        imagen:"PNG/F35.png",

        nombre:"F-35 Lightning II",

        fabricante:"Lockheed Martin",

        pais:"Estados Unidos",

        generacion:"Quinta",

        velocidad:"Mach 1.6",

        alcance:"2200 km",

        motores:"Pratt & Whitney F135",

        tripulacion:"1",

        silueta:"PNG/F35_silueta0.png",



        velocidadNivel:"75%",

        alcanceNivel:"85%",



        maniobraNivel:"80%",



        stealthNivel:"90%",

        descripcion:"Avion de combate multifuncion de quinta generacion diseñado para misiones aire-aire, aire-tierra y reconocimiento."

    },

 f16:{

        imagen: "PNG/F16.png",

nombre: "F-16 Fighting Falcon",

fabricante: "Lockheed Martin",

pais: "Estados Unidos",

generacion: "Cuarta",

velocidad: "Mach 2.0",

alcance: "4220 km (con tanques externos)",

motores: "1 × Pratt & Whitney F100 o General Electric F110",

tripulacion: "1",

silueta: "PNG/F16_silueta.png",

velocidadNivel: "90%",

alcanceNivel: "85%",

maniobraNivel: "96%",

stealthNivel: "15%",

        descripcion:"es un caza polivalente de cuarta generacion diseñado para misiones de superioridad aerea y ataque a tierra. Destaca por su alta maniobrabilidad, velocidad y versatilidad, convirtiendose en uno de los aviones de combate mas exitosos y utilizados del mundo."

    },

su22:{

imagen: "PNG/Su22.png",

nombre: "Su-22 Fitter",

fabricante: "Sukhoi",

pais: "Unión Soviética",

generacion: "Tercera",

velocidad: "Mach 1.8",

alcance: "2250 km",

motores: "1 × Lyulka AL-21F-3",

tripulacion: "1",

silueta: "PNG/Su22_silueta.png",

velocidadNivel: "80%",

alcanceNivel: "75%",

maniobraNivel: "68%",

stealthNivel: "5%",

descripcion: "El Su-22 Fitter es un avion de ataque y caza bombardero de tercera generacion, diseñado para realizar misiones de apoyo aéreo cercano e interdicción. Su ala de geometría variable le permite operar eficazmente a distintas velocidades y en diversos perfiles de mision."

},

su57:{

imagen: "PNG/Su57.png",

nombre: "Su-57 Felon",

fabricante: "Sukhoi",

pais: "Rusia",

generacion: "Quinta",

velocidad: "Mach 2.0",

alcance: "3500 km",

motores: "2 × Saturn AL-41F1",

tripulacion: "1",

silueta: "PNG/su57_silueta.png",

velocidadNivel: "94%",

alcanceNivel: "90%",

maniobraNivel: "99%",

stealthNivel: "88%",

descripcion: "El Su-57 Felon es un caza multifuncion de quinta generacion diseñado para superioridad aerea y ataque de precision. Combina alta maniobrabilidad, velocidad supersonica sostenida y capacidades furtivas avanzadas para operar en entornos de combate modernos."

},
mig31:{
imagen: "PNG/Mig31.png",

nombre: "MiG-31 Foxhound",

fabricante: "Mikoyan",

pais: "Unión Soviética",

generacion: "Cuarta",

velocidad: "Mach 2.83",

alcance: "3000 km",

motores: "2 × Soloviev D-30F6",

tripulacion: "2",

silueta: "PNG/Mig31_silueta.png",

velocidadNivel: "100%",

alcanceNivel: "88%",

maniobraNivel: "60%",

stealthNivel: "5%",

descripcion: "El MiG-31 Foxhound es un interceptor supersonico de largo alcance diseñado para detectar y destruir objetivos a gran distancia. Destaca por su extraordinaria velocidad, potente radar y capacidad para interceptar bombarderos, misiles de crucero y otras aeronaves en amplias zonas de defensa aerea."
},

b2:{
imagen: "PNG/b2.png",

nombre: "B-2 Spirit",

fabricante: "Northrop Grumman",

pais: "Estados Unidos",

generacion: "Quinta",

velocidad: "Mach 0.95",

alcance: "11100 km",

motores: "4 × General Electric F118-GE-100",

tripulacion: "2",

silueta: "PNG/b2_silueta.png",

velocidadNivel: "55%",

alcanceNivel: "100%",

maniobraNivel: "40%",

stealthNivel: "100%",

descripcion: "El B-2 Spirit es un bombardero estrategico furtivo diseñado para penetrar defensas aereas avanzadas y atacar objetivos de alto valor con armamento convencional o nuclear. Su diseño de ala volante y su reducida firma de radar lo convierten en uno de los aviones mas furtivos jamas construidos."
},
    mig29:{

    imagen:"PNG/Mig29.png",

    nombre:"MiG-29 Fulcrum",

    fabricante:"Mikoyan (MiG)",

    pais:"Union Sovietica",

    generacion:"Cuarta",

    velocidad:"Mach 2.25",

    alcance:"1430 km",

    motores:"2 × Klimov RD-33",

    tripulacion:"1",

    silueta:"PNG/Mig29_silueta.png",

    velocidadNivel:"90%",

    alcanceNivel:"60%",

    maniobraNivel:"90%",

    stealthNivel:"15%",

    descripcion:"Caza de superioridad aerea de cuarta generacion desarrollado por la Union Sovietica. Destaca por su alta maniobrabilidad, velocidad y capacidad de combate aire-aire, aunque posee un alcance limitado en comparacion con cazas modernos."
},

    f5:{

    imagen:"PNG/F5.png",

    nombre:"F-5 Tiger II",

    fabricante:"Northrop",

    pais:"Estados Unidos",

    generacion:"Tercera",

    velocidad:"Mach 1.6",

    alcance:"1405 km",

    motores:"2 × General Electric J85-GE-21",

    tripulacion:"1",

    silueta:"PNG/F5_silueta.png",

    velocidadNivel:"70%",

    alcanceNivel:"60%",

    maniobraNivel:"80%",

    stealthNivel:"10%",

    descripcion:"Caza ligero de tercera generacion desarrollado por Estados Unidos. Destaca por su bajo costo operativo, excelente maniobrabilidad y facilidad de mantenimiento. Aunque posee menor capacidad de carga y avionica que cazas mas modernos, ha sido ampliamente utilizado por numerosas fuerzas aereas en todo el mundo."
}


};

function cambiarAvion(){

    let avion=document.getElementById("aviones").value;

    const imagen = document.getElementById("imagenAvion");

imagen.style.opacity = "0";

setTimeout(() => {

    imagen.src = aviones[avion].imagen;

    imagen.style.opacity = "1";

},200);

    document.getElementById("nombre").innerHTML=aviones[avion].nombre;

    document.getElementById("fabricante").innerHTML=aviones[avion].fabricante;

    document.getElementById("pais").innerHTML=aviones[avion].pais;

    document.getElementById("generacion").innerHTML=aviones[avion].generacion;

    document.getElementById("velocidad").innerHTML=aviones[avion].velocidad;

    document.getElementById("alcance").innerHTML=aviones[avion].alcance;

    document.getElementById("motores").innerHTML=aviones[avion].motores;

    document.getElementById("tripulacion").innerHTML=aviones[avion].tripulacion;

    document.getElementById("descripcion").innerHTML=aviones[avion].descripcion;

    document.getElementById("siluetaAvion").src =
aviones[avion].silueta;




document.getElementById("velocidadBarra").style.width =
aviones[avion].velocidadNivel;




document.getElementById("alcanceBarra").style.width =
aviones[avion].alcanceNivel;




document.getElementById("maniobraBarra").style.width =
aviones[avion].maniobraNivel;




document.getElementById("stealthBarra").style.width =
aviones[avion].stealthNivel;

document.getElementById("designacion").innerHTML =
aviones[avion].nombre;

document.getElementById("paisFicha").innerHTML =
aviones[avion].pais;

document.getElementById("generacionFicha").innerHTML =
aviones[avion].generacion;

document.getElementById("estadoAvion").innerHTML =
"OPERATIVO";

}

cambiarAvion();


function relojSistema(){

    const ahora = new Date();

    document.getElementById("hora").innerHTML =
    ahora.toUTCString().substring(17,25);

    document.getElementById("fecha").innerHTML =
    ahora.toLocaleDateString("es-ES");

}

setInterval(relojSistema,1000);

relojSistema();
