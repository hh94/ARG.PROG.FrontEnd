import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  proye: Proyecto[] = [];

  nombreE: string = '';
  descripcionE: string = '';

  constructor( 
              private sProyecto: ProyectoService , 
              private tokenService: TokenService, 
              private router: Router) { }

  isLogged = false;

  ngOnInit(): void{
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreE, this.descripcionE);
    this.sProyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => { this.proye = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }
}