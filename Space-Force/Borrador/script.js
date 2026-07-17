const aviones = {

    f22:{

        imagen:"PNG/f22.png",

        nombre:"F-22 Raptor",

        fabricante:"Lockheed Martin",

        pais:"Estados Unidos",

        generacion:"Quinta",

        velocidad:"Mach 2.25",

        alcance:"2960 km",

        motores:"2 × Pratt & Whitney F119",

        tripulacion:"1",

        descripcion:"Caza furtivo de superioridad aerea diseñado para dominar el espacio aereo mediante tecnologia stealth, supercrucero y gran maniobrabilidad."

    },

    f35:{

        imagen:"PNG/f35.png",

        nombre:"F-35 Lightning II",

        fabricante:"Lockheed Martin",

        pais:"Estados Unidos",

        generacion:"Quinta",

        velocidad:"Mach 1.6",

        alcance:"2200 km",

        motores:"Pratt & Whitney F135",

        tripulacion:"1",

        descripcion:"Avion de combate multifuncion de quinta generacion diseñado para misiones aire-aire, aire-tierra y reconocimiento."

    }

};

function cambiarAvion(){

    let avion=document.getElementById("aviones").value;

    document.getElementById("imagenAvion").src=aviones[avion].imagen;

    document.getElementById("nombre").innerHTML=aviones[avion].nombre;

    document.getElementById("fabricante").innerHTML=aviones[avion].fabricante;

    document.getElementById("pais").innerHTML=aviones[avion].pais;

    document.getElementById("generacion").innerHTML=aviones[avion].generacion;

    document.getElementById("velocidad").innerHTML=aviones[avion].velocidad;

    document.getElementById("alcance").innerHTML=aviones[avion].alcance;

    document.getElementById("motores").innerHTML=aviones[avion].motores;

    document.getElementById("tripulacion").innerHTML=aviones[avion].tripulacion;

    document.getElementById("descripcion").innerHTML=aviones[avion].descripcion;

}

cambiarAvion();