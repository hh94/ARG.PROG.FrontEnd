import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})


export class EstudioComponent implements OnInit{

  est: Estudio[] = [];

  nombreS: string = '';
  descripcionS: string = '';

  constructor( 
              private sEstudio: EstudioService, 
              private router: Router,  
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void{
    this.cargaEstudio();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  onCreate(): void {
    const est = new Estudio(this.nombreS, this.descripcionS);
    this.sEstudio.save(est).subscribe(
      data => {
        alert("añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  cargaEstudio(): void {
    this.sEstudio.lista().subscribe(data => { this.est = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sEstudio.delete(id).subscribe(
        data => {
          this.cargaEstudio();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }
  
}