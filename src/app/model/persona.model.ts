//aca hace la unoin con la base de datos y el frontend


export class persona{
    id?: number;
    img: string;
    imgU: string;

    constructor(img: string, imgU: string){
        this.img = img;
        this.imgU = imgU;
    }
}