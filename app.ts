(() => {
    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';

    const exits:boolean = false;

    // Tuple
    const hero: [string, string] = [batman, superman];
    const villain: [string, number, boolean] = ['Lex Luthor', 5, true];

    // Arrays
    const allies: string[] = ['Mujer Maravilla', 'Aquaman', 'San', 'Flash'];

    // Enums
    enum powers {
        aquaman = 0,
        batman = 1,
        flash = 5,
        superman = 100
    };

    const flashPower: powers = powers.flash;
    const supermanPower: powers = powers.superman;
    const batmanPower: powers = powers.batman;
    const aquamanPower: powers = powers.aquaman;

    // Return functions
    function batsignal(): string {
        return 'activada';
    }

    function need_help(): void {
        console.log('Auxilio!!!');
    }

    // Aserciones de Tipo
    const power: any = '100';
    const powerLength: number = ( power as string ).length;

    console.log( exits );
    console.log( hero );
    console.log( villain );
    console.log( allies );
    console.log( flashPower );
    console.log( supermanPower );
    console.log( batmanPower );
    console.log( aquamanPower );
    console.log( batsignal() );
    console.log( need_help() );
    console.log( powerLength );
})()