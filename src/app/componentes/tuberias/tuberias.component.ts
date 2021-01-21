import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string="ruben garcia"
  mes: string="ENERO"
  texto: string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos distinctio rerum optio, odit cupiditate? Similique distinctio pariatur possimus totam tenetur laborum, odio perferendis mollitia itaque fugit, doloribus, animi iusto!"
  fecha: Date = new Date();
  dinero: number =12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a', 'ante', 'bajo', 'cabe', 'con', 'contra', 'de']
  usuarios =[
    {nombre: "Ruben", apellido: "Garcia", edad:19},
    {nombre: "Rodolfo", apellido: "Llaviejas", edad:18},
    {nombre: "Keko", apellido: "Jones", edad:33},
  ]
  constructor() { }


  ngOnInit(): void {
  }

}
