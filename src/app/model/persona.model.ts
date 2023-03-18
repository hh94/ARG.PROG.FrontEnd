//aca hace la unoin con la base de datos y el frontend


export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    profesion: string;
    sobreTi: string;
    img: string;
    imgU: string;

    constructor(nombre: string, apellido: string, profesion: string, sobreTi: string, img: string, imgU: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.sobreTi = sobreTi;
        this.img = img;
        this.imgU = imgU;
    }
}