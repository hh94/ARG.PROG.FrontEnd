export class Acerca {
    id? : number;
    nombreA : string;
    apellidoA : string;
    profesionA : string;
    sobreTiA : string;

    constructor(nombreA: string, apellidoA: string, profesionA: string, sobreTiA: string){
        this.nombreA = nombreA;
        this.apellidoA = apellidoA;
        this.profesionA = profesionA;
        this.sobreTiA = sobreTiA;
    }
}