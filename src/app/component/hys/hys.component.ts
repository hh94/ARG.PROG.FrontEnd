import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})


export class HysComponent implements OnInit {

  skill: Skill[] = [];

  nombreH: string;
  porcentajeH: number;

  constructor(
              private skillS: SkillService, 
              private tokenService: TokenService,
              private router: Router)  {  }

  isLogged = false;
  
  ngOnInit(): void {    
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  onCreate(): void{
    const skill = new Skill(this.nombreH, this.porcentajeH);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Se creo correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir");
        this.router.navigate(['']);
      }
    )
  }

  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }

  }

}
