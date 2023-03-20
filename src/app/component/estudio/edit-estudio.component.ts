import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})

export class EditEstudioComponent implements OnInit{
  
  study : Estudio = null;

  constructor(private sEstudio: EstudioService , 
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(
      data =>{
        this.study = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.update(id, this.study).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar.");
         this.router.navigate(['']);
      }
    )
  }

}