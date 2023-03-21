import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Acerca } from 'src/app/model/acerca';
import { AcercaService } from 'src/app/service/acerca.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  aceca: Acerca[] = [];

    nombreA: string = '';
    apellidoA: string = '';
    profesionA: string = '';
    sobreTiA: string = '';

    isLogged = false;

  constructor(
              private sAcerca: AcercaService, 
              private router: Router,  
              private tokenService: TokenService) { }

ngOnInit(): void{
              this.cargaAcerca();
              if (this.tokenService.getToken()) {
              this.isLogged = true;
              } else {
              this.isLogged = false;
    }
}

onCreate(): void {
    const aceca = new Acerca(this.nombreA, this.apellidoA, this.profesionA, this.sobreTiA);
    this.sAcerca.save(aceca).subscribe(
    data => {
        alert("añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
    }
  )
}

cargaAcerca(): void {
  this.sAcerca.lista().subscribe(data => { this.aceca = data; })
}

delete(id?: number){
        if(id != undefined){
        this.sAcerca.delete(id).subscribe(
        data => {
        this.cargaAcerca();
        }, err => {
        alert("No se pudo borrar");
        }
      )
    }
  }

}