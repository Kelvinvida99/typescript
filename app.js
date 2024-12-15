"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let powersDcHeroes;
    (function (powersDcHeroes) {
        powersDcHeroes[powersDcHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        powersDcHeroes[powersDcHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        powersDcHeroes[powersDcHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        powersDcHeroes[powersDcHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(powersDcHeroes || (powersDcHeroes = {}));
    const fuerzaFlash = powersDcHeroes.fuerzaFlash;
    const fuerzaSuperman = powersDcHeroes.fuerzaSuperman;
    const fuerzaBatman = powersDcHeroes.fuerzaBatman;
    const fuerzaAcuaman = powersDcHeroes.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
