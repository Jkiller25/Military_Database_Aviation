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
su33:{

    imagen:"PNG/Su33.png",

    nombre:"Su-33 Sea Flanker",

    fabricante:"Sukhoi",

    pais:"Rusia",

    generacion:"Cuarta",

    velocidad:"Mach 2.17",

    alcance:"3000 km",

    motores:"Saturn AL-31F (2)",

    tripulacion:"1",

    silueta:"PNG/Su33_silueta.png",

    velocidadNivel:"92%",

    alcanceNivel:"88%",

    maniobraNivel:"96%",

    stealthNivel:"10%",

    descripcion:"Caza naval de superioridad aerea basado en el Su-27 y diseñado para operar desde portaaviones. Cuenta con alas plegables, tren de aterrizaje reforzado y gancho de apontaje, manteniendo la alta velocidad y maniobrabilidad caracteristicas de la familia Flanker."

},

    su47:{

    imagen:"PNG/Su47.png",

    nombre:"Su-47 Berkut",

    fabricante:"Sukhoi",

    pais:"Rusia",

    generacion:"Experimental",

    velocidad:"Mach 2.0",

    alcance:"3300 km",

    motores:"Soloviev D-30F11 (2)",

    tripulacion:"1",

    silueta:"PNG/Su47_silueta.png",

    velocidadNivel:"90%",

    alcanceNivel:"89%",

    maniobraNivel:"100%",

    stealthNivel:"20%",

    descripcion:"Avion de combate experimental desarrollado por Sukhoi para evaluar tecnologias avanzadas como las alas de flecha inversa, materiales compuestos y sistemas de control de vuelo. Destaco por su excepcional maniobrabilidad y sirvio como banco de pruebas para futuros cazas rusos."

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
},

    mig19:{

    imagen: "PNG/Mig19.png",

    nombre: "MiG-19 Farmer",

    fabricante: "Mikoyan-Gurevich",

    pais: "Union Sovietica",

    generacion: "Segunda",

    velocidad: "Mach 1.45",

    alcance: "1390 km",

    motores: "2 × Tumansky RD-9B",

    tripulacion: "1",

    silueta: "PNG/Mig19_silueta.png",

    velocidadNivel: "72%",

    alcanceNivel: "45%",

    maniobraNivel: "78%",

    stealthNivel: "2%",

    descripcion: "es un caza de segunda generacion desarrollado por la Union Sovietica. Fue el primer avion de combate sovietico capaz de mantener vuelo supersónico en vuelo nivelado Destaco por su buena aceleracion y maniobrabilidad, aunque su alcance y avionica eran limitados en comparacion con cazas posteriores."

},

f18:{

    imagen: "PNG/F18.png",

    nombre: "F/A-18E Super Hornet",

    fabricante: "Boeing",

    pais: "Estados Unidos",

    generacion: "Cuarta++",

    velocidad: "Mach 1.8",

    alcance: "3330 km (con tanques externos)",

    motores: "2 × General Electric F414-GE-400",

    tripulacion: "1",

    silueta: "PNG/F18_silueta.png",

    velocidadNivel: "85%",

    alcanceNivel: "82%",

    maniobraNivel: "92%",

    stealthNivel: "35%",

    descripcion: "es un caza polivalente de cuarta generacion avanzada diseñado para misiones de superioridad aerea, ataque a tierra, reconocimiento y guerra electronica. Destaca por su gran versatilidad, fiabilidad y capacidad para operar desde portaaviones, siendo uno de los principales aviones de combate de la Armada de los Estados Unidos."

},

    f14:{

    imagen: "PNG/f14.png",

    nombre: "F-14 Tomcat",

    fabricante: "Grumman",

    pais: "Estados Unidos",

    generacion: "Cuarta",

    velocidad: "Mach 2.34",

    alcance: "2960 km",

    motores: "2 × Pratt & Whitney TF30-P-414A (primeras versiones) / General Electric F110-GE-400 (F-14B/D)",

    tripulacion: "2",

    silueta: "PNG/f14_silueta.png",

    velocidadNivel: "95%",

    alcanceNivel: "80%",

    maniobraNivel: "88%",

    stealthNivel: "10%",

    descripcion: "es un caza interceptor y de superioridad aerea de cuarta generacion diseñado para proteger grupos de portaaviones y enfrentar objetivos a larga distancia. Destaca por sus alas de geometria variable, su elevada velocidad, su potente radar y su capacidad para emplear misiles de largo alcance, convirtiendose en uno de los cazas mas emblematicos de la Guerra Fria."

},

f15:{

    imagen: "PNG/f15.png",

    nombre: "F-15 Eagle",

    fabricante: "McDonnell Douglas (actualmente Boeing)",

    pais: "Estados Unidos",

    generacion: "Cuarta",

    velocidad: "Mach 2.5",

    alcance: "5550 km (con tanques externos y combustible adicional)",

    motores: "2 × Pratt & Whitney F100-PW-220/229",

    tripulacion: "1",

    silueta: "PNG/f15_silueta.png",

    velocidadNivel: "98%",

    alcanceNivel: "90%",

    maniobraNivel: "91%",

    stealthNivel: "10%",

    descripcion: "es un caza de superioridad aerea de cuarta generacion diseñado para obtener y mantener el dominio del espacio aereo. Destaca por su extraordinaria velocidad, aceleracion, capacidad de ascenso y gran autonomia, ademas de contar con un historial de combate sobresaliente sin derrotas en enfrentamientos aire-aire."
},

    su30:{

    imagen:"PNG/Su30.png",

    nombre:"Su-30 Strike Flanker",

    fabricante:"Sukhoi",

    pais:"Rusia",

    generacion:"Cuarta++",

    velocidad:"Mach 2.0",

    alcance:"3000 km",

    motores:"Saturn AL-31FP (2)",

    tripulacion:"2",

    silueta:"PNG/Su30_silueta.png",

    velocidadNivel:"90%",

    alcanceNivel:"92%",

    maniobraNivel:"97%",

    stealthNivel:"10%",

    descripcion:"Caza multifuncion biplaza de generacion 4++ desarrollado a partir del Su-27. Diseñado para misiones de superioridad aerea, ataque de precision y combate aire-superficie, combina gran maniobrabilidad, largo alcance y una elevada capacidad de carga de armamento."

},
    su27:{

    imagen:"PNG/Su27.png",

    nombre:"Su-27 Flanker",

    fabricante:"Sukhoi",

    pais:"Union Sovietica",

    generacion:"Cuarta",

    velocidad:"Mach 2.35",

    alcance:"3530 km",

    motores:"Saturn AL-31F (2)",

    tripulacion:"1",

    silueta:"PNG/Su27_silueta.png",

    velocidadNivel:"95%",

    alcanceNivel:"90%",

    maniobraNivel:"98%",

    stealthNivel:"10%",

    descripcion:"Caza de superioridad aerea de cuarta generacion desarrollado por Sukhoi para dominar el combate aire-aire. Destaca por su extraordinaria maniobrabilidad, alta velocidad y gran autonomia, siendo la base de numerosas variantes modernas de la familia Flanker."

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
