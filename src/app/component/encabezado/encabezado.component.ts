import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
  
})

export class EncabezadoComponent implements OnInit {

  persona: persona = new persona("","");
  
  isLogged = false;
  
  constructor(public personaService: PersonaService,
              private tokenService: TokenService) { }

  ngOnInit(): void{
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarPersona(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data; })
  }
  

}