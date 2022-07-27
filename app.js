"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const exits = false;
    // Tuple
    const hero = [batman, superman];
    const villain = ['Lex Luthor', 5, true];
    // Arrays
    const allies = ['Mujer Maravilla', 'Aquaman', 'San', 'Flash'];
    // Enums
    let powers;
    (function (powers) {
        powers[powers["aquaman"] = 0] = "aquaman";
        powers[powers["batman"] = 1] = "batman";
        powers[powers["flash"] = 5] = "flash";
        powers[powers["superman"] = 100] = "superman";
    })(powers || (powers = {}));
    ;
    const flashPower = powers.flash;
    const supermanPower = powers.superman;
    const batmanPower = powers.batman;
    const aquamanPower = powers.aquaman;
    // Return functions
    function batsignal() {
        return 'activada';
    }
    function need_help() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const power = '100';
    const powerLength = power.length;
    console.log(exits);
    console.log(hero);
    console.log(villain);
    console.log(allies);
    console.log(flashPower);
    console.log(supermanPower);
    console.log(batmanPower);
    console.log(aquamanPower);
    console.log(batsignal());
    console.log(need_help());
    console.log(powerLength);
})();
